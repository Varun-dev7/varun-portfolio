/**
 * Vercel Serverless API — Portfolio Visitor Counter
 *
 * GET /api/views
 *   → Increments the global view count (once per visitor session)
 *   → Returns { views: number }
 *
 * Duplicate protection:
 *   Uses @upstash/ratelimit with a "visitor" limiter keyed by IP.
 *   One increment per unique IP per sliding 10-minute window.
 *   No client-side cookies or localStorage required.
 */

import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// ─── Diagnostic helpers ─────────────────────────────────────────────────────

function log(...args) {
  // Only logs to Vercel Runtime Logs in production
  console.log('[api/views]', ...args)
}

function logError(...args) {
  // Always logs — Vercel captures these in Runtime Logs
  console.error('[api/views ERROR]', ...args)
}

// ─── Redis & Rate-limiter ───────────────────────────────────────────────────

const redisUrl = process.env.UPSTASH_REDIS_REST_URL
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN

log('Env check — UPSTASH_REDIS_REST_URL set:', !!redisUrl)
log('Env check — UPSTASH_REDIS_REST_TOKEN set:', !!redisToken)

const redis = redisUrl && redisToken
  ? new Redis({ url: redisUrl, token: redisToken })
  : null

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(1, '10 m'),
      analytics: false,
      prefix: 'portfolio_views_ratelimit',
    })
  : null

const VIEWS_KEY = 'portfolio:views'

// ─── Helper ─────────────────────────────────────────────────────────────────

/**
 * Extracts a cheap visitor identifier from the request.
 * Uses CF-Connecting-IP (Vercel Edge) → X-Forwarded-For → fallback.
 * We hash it before passing to ratelimit so no raw IPs touch the ratelimit storage.
 */
function getVisitorId(request) {
  const ip =
    request.headers.get('cf-connecting-ip')?.trim() ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'anonymous'
  // Simple deterministic hash — good enough for duplicate detection
  let hash = 0
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash |= 0
  }
  return `v_${Math.abs(hash).toString(36)}`
}

// ─── GET handler ────────────────────────────────────────────────────────────

export async function GET(request) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, max-age=0',
  }

  // ── Check 1: Redis credentials present ──────────────────────────────────
  if (!redisUrl || !redisToken) {
    logError('REDIS NOT CONFIGURED — env vars missing')
    logError('UPSTASH_REDIS_REST_URL:', redisUrl ? 'SET' : 'MISSING')
    logError('UPSTASH_REDIS_REST_TOKEN:', redisToken ? 'SET' : 'MISSING')
    return new Response(
      JSON.stringify({ views: 0, error: 'Redis not configured — missing environment variables' }),
      { status: 503, headers }
    )
  }

  if (!redis) {
    logError('REDIS CLIENT FAILED TO INITIALIZE despite credentials')
    return new Response(
      JSON.stringify({ views: 0, error: 'Redis client failed to initialize' }),
      { status: 503, headers }
    )
  }

  if (!ratelimit) {
    logError('RATELIMITER FAILED TO INITIALIZE')
    return new Response(
      JSON.stringify({ views: 0, error: 'Rate-limiter failed to initialize' }),
      { status: 503, headers }
    )
  }

  // ── Check 2: Redis connectivity ─────────────────────────────────────────
  try {
    const pong = await redis.ping()
    log('Redis ping:', pong)
  } catch (pingErr) {
    logError('Redis ping FAILED:', pingErr.message)
    return new Response(
      JSON.stringify({ views: 0, error: 'Redis connection failed' }),
      { status: 503, headers }
    )
  }

  // ── Check 3: Rate-limit + increment ─────────────────────────────────────
  try {
    const visitorId = getVisitorId(request)
    log('Visitor ID:', visitorId)

    const { success } = await ratelimit.limit(visitorId)
    log('Rate-limit result — allowed:', success)

    let views = 0

    if (success) {
      views = await redis.incr(VIEWS_KEY)
      log('Incremented portfolio:views to:', views)
    } else {
      const current = await redis.get(VIEWS_KEY)
      views = typeof current === 'number' ? current : 0
      log('Rate-limited — returning current count:', views)
    }

    return new Response(JSON.stringify({ views }), { status: 200, headers })
  } catch (err) {
    logError('Redis operation FAILED:', err.message)
    return new Response(
      JSON.stringify({ views: 0, error: `Redis operation failed: ${err.message}` }),
      { status: 503, headers }
    )
  }
}

// ─── OPTIONS handler (CORS preflight) ────────────────────────────────────────

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
