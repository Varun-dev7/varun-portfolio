import { motion } from 'framer-motion'
import AIScene from './AIScene'

function AIExperimentCard({ experiment }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="bg-[var(--color-bg-secondary)] rounded-2xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-border-hover)] transition-all duration-300">
        {/* Visual */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <AIScene experiment={experiment} />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category & Number */}
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 text-[10px] font-medium tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/25 rounded-full bg-[var(--color-accent-muted)]">
              {experiment.category?.toUpperCase()}
            </span>
            <span className="text-xs text-[var(--color-text-subtle)]">
              {experiment.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-[var(--color-text)] mb-1.5 group-hover:text-[var(--color-text-secondary)] transition-colors duration-300">
            {experiment.title}
          </h3>

          {/* Description */}
          <p className="text-[13px] text-[var(--color-text-muted)] line-clamp-2 leading-relaxed mb-3">
            {experiment.description}
          </p>

          {/* Status */}
          <div className="flex items-center gap-2 pt-2 border-t border-[var(--color-border)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            <span className="text-[11px] text-[var(--color-text-subtle)] uppercase tracking-wider">
              {experiment.status}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default AIExperimentCard
