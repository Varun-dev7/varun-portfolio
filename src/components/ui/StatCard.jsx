/**
 * StatCard — Premium stat display block
 *
 * Matches the portfolio's dark cosmic aesthetic:
 * - Dark glass-morphism background
 * - Warm orange/peach accent border
 * - Inter font, tight tracking
 * - Responsive and mobile-safe
 */
import { motion } from 'framer-motion'

function StatCard({ value, label, loading = false, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`
        inline-flex flex-col items-center justify-center
        rounded-2xl border
        bg-[#0D0D10]/80
        backdrop-blur-md
        px-6 py-4
        min-w-[120px]
        sm:min-w-[148px]
        ${className}
      `}
      style={{
        borderColor: 'rgba(255,179,122,0.18)',
        boxShadow: '0 0 40px rgba(255,179,122,0.04), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      {/* Value */}
      <div
        className="text-[clamp(1.35rem,3vw,1.85rem)] font-bold leading-none tracking-tight text-[#FFF1DF]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {loading ? (
          <span className="inline-block h-6 w-16 animate-pulse rounded-md bg-white/[0.06]" />
        ) : (
          value
        )}
      </div>

      {/* Label */}
      <div
        className="mt-2 text-[9px] font-semibold tracking-[0.18em] uppercase text-[#FFB37A]/70 sm:text-[10px]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {loading ? (
          <span className="inline-block mt-0.5 h-3 w-20 animate-pulse rounded bg-white/[0.04]" />
        ) : (
          label
        )}
      </div>
    </motion.div>
  )
}

export default StatCard
