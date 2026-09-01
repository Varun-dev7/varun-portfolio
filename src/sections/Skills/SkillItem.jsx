import { motion } from 'framer-motion'

function SkillItem({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="group relative flex items-center gap-2 p-2.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)] transition-all duration-300"
    >
      {/* Skill Icon/Initial */}
      <div className="w-6 h-6 rounded bg-[var(--color-bg-elevated)] flex items-center justify-center text-[10px] font-bold text-[var(--color-accent)]">
        {skill.name.substring(0, 2).toUpperCase()}
      </div>

      {/* Skill Name */}
      <span className="text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors duration-300 truncate">
        {skill.name}
      </span>

      {/* Level indicator - subtle */}
      {skill.level && (
        <div className="ml-auto flex gap-px">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                level <= skill.level
                  ? 'bg-[var(--color-accent)]'
                  : 'bg-[var(--color-border)]'
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default SkillItem
