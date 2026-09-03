/**
 * VisitorCounter — Global portfolio view counter
 *
 * Fetches the live visitor count from /api/views.
 * Animates the number using Framer Motion.
 * Handles loading, error, and reduced-motion gracefully.
 *
 * Architecture:
 *   - On mount, fires GET /api/views (increments count via server)
 *   - Stores the returned count in component state
 *   - Animates number change with Framer Motion
 *   - Respects prefers-reduced-motion
 *   - Does NOT poll or refresh repeatedly
 */

import { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import StatCard from './StatCard'

// ─── Number formatter ────────────────────────────────────────────────────────
const formatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 })

function formatNumber(n) {
  if (typeof n !== 'number' || !isFinite(n) || isNaN(n)) return null
  return formatter.format(Math.max(0, Math.round(n)))
}

// ─── Animated number ─────────────────────────────────────────────────────────
function AnimatedNumber({ value, loading, reducedMotion }) {
  const display = formatNumber(value)
  const prevRef = useRef(null)
  const [displayValue, setDisplayValue] = useState(display)

  useEffect(() => {
    if (loading || display === null) return
    if (reducedMotion) {
      setDisplayValue(display)
      return
    }

    const prev = prevRef.current
    if (prev === null || prev === display) {
      setDisplayValue(display)
      prevRef.current = display
      return
    }

    // Animate from previous integer to current integer
    const from = typeof prev === 'number' ? prev : 0
    const to = typeof display === 'number' ? display : 0
    const duration = Math.min(1.2, Math.max(0.4, Math.abs(to - from) * 0.003))
    const steps = Math.ceil(duration * 60)
    let step = 0

    const timer = setInterval(() => {
      step++
      const t = step / steps
      const eased = 1 - Math.pow(1 - t, 4)
      setDisplayValue(Math.round(from + (to - from) * eased))
      if (step >= steps) {
        clearInterval(timer)
        setDisplayValue(display)
        prevRef.current = display
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [display, loading, reducedMotion])

  if (loading) return <StatCard loading value="" label="" />
  if (display === null) return <StatCard value="—" label="Portfolio Views" />

  return <StatCard value={displayValue} label="Portfolio Views" />
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function VisitorCounter() {
  const [count, setCount] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const reducedMotion = useReducedMotion()
  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true

    async function fetchCount() {
      try {
        const res = await fetch('/api/views', { cache: 'no-store' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()

        if (!mountedRef.current) return

        if (typeof data.views === 'number') {
          setCount(data.views)
        } else {
          setError(true)
        }
      } catch {
        if (!mountedRef.current) return
        setError(true)
      } finally {
        if (mountedRef.current) setLoading(false)
      }
    }

    fetchCount()

    return () => {
      mountedRef.current = false
    }
  }, [])

  // Don't render anything on error — graceful silent fallback
  if (error) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <AnimatedNumber
        value={count}
        loading={loading}
        reducedMotion={reducedMotion}
      />
    </motion.div>
  )
}
