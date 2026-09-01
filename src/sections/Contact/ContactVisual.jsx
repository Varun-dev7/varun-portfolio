import { motion } from 'framer-motion'
import { profile } from '../../data/profile'

/**
 * ContactVisual - Minimal terminal aesthetic
 * Static visual with entrance animation only
 */
function ContactVisual() {
  return (
    <div className="relative aspect-square lg:aspect-[4/3] max-w-lg mx-auto">
      {/* Main container */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)] rounded-3xl border border-[var(--color-border)] overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-[var(--color-border)]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
          <span className="ml-3 text-xs text-[var(--color-text-subtle)] font-mono">contact@terminal</span>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm">
          {/* Status line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-[var(--color-accent)]">{'>'}</span>
            <span className="text-[var(--color-text-subtle)]">SYSTEM STATUS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="space-y-2 mb-8"
          >
            <TerminalLine text="READY TO BUILD" color="#10b981" delay={0.6} />
            <TerminalLine text="CONNECTION AVAILABLE" color="#10b981" delay={0.7} />
            <TerminalLine text={`USER: ${profile.name.toUpperCase()}`} color="var(--color-accent)" delay={0.8} />
            <TerminalLine text="AWAITING INPUT..." color="#f59e0b" delay={0.9} />
          </motion.div>

          {/* Static cursor - no animation */}
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-text-subtle)]">{'>'}</span>
            <span className="w-2 h-4 bg-[var(--color-accent)]" />
          </div>
        </div>

        {/* Background grid - static */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(245,242,234,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(245,242,234,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Static decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full blur-2xl" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-2xl" />

      {/* Static accent */}
      <div className="absolute -top-2 -left-2 w-8 h-8 border border-[var(--color-accent)]/20 rounded-lg" />
    </div>
  )
}

function TerminalLine({ text, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center gap-2"
    >
      <span className="text-[var(--color-accent)]">›</span>
      <span style={{ color }}>{text}</span>
    </motion.div>
  )
}

export default ContactVisual
