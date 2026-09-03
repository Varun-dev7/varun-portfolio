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

// ─── Redis & Rate-limiter (gracefully handle missing credentials) ─────────────

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null

// One increment per IP per 10 minutes (sliding window)
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
  // CORS headers for cross-origin requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, max-age=0',
  }

  // Return 0 gracefully if Redis is not configured
  if (!redis || !ratelimit) {
    return new Response(JSON.stringify({ views: 0, error: 'Redis not configured' }), {
      status: 200,
      headers,
    })
  }

  try {
    const visitorId = getVisitorId(request)

    // Check rate limit — determines if this visitor gets counted
    const { success } = await ratelimit.limit(visitorId)

    let views = 0

    if (success) {
      // Increment the global counter
      views = await redis.incr(VIEWS_KEY)
    } else {
      // Still return current count, just don't increment
      const current = await redis.get(VIEWS_KEY)
      views = typeof current === 'number' ? current : 0
    }

    return new Response(JSON.stringify({ views }), { status: 200, headers })
  } catch (err) {
    console.error('[api/views] Redis error:', err)
    // Fail gracefully — don't crash the page
    return new Response(JSON.stringify({ views: 0, error: 'Service temporarily unavailable' }), {
      status: 200,
      headers,
    })
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
