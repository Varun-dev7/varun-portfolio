import { motion } from 'framer-motion'

function ExperienceItem({ experience, index, isLeft, isLast, layout }) {
  // Desktop: left/right cards without dots (dots are in center column)
  if (layout === 'desktop') {
    return (
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative"
      >
        <ExperienceCard experience={experience} />
      </motion.div>
    )
  }

  // Tablet: timeline on left, cards on right
  if (layout === 'tablet') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative"
      >
        {/* Timeline Dot */}
        <div className="absolute -left-[16px] top-6 z-10">
          <div
            className={`w-2.5 h-2.5 rounded-full border-2 ${
              experience.current
                ? 'bg-[var(--color-accent)] border-[var(--color-accent)]'
                : 'bg-[var(--color-bg-secondary)] border-[var(--color-border)]'
            }`}
          />
        </div>

        {/* Card */}
        <div className="pl-6">
          <ExperienceCard experience={experience} />
        </div>
      </motion.div>
    )
  }

  // Mobile: single column with left timeline
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative"
    >
      {/* Timeline Dot + Connector */}
      <div className="absolute -left-[14px] top-3 z-10">
        {/* Connector line */}
        <div className="absolute top-1 left-4 w-5 h-px bg-[var(--color-border)]" />
        {/* Dot */}
        <div
          className={`w-2 h-2 rounded-full border-2 ${
            experience.current
              ? 'bg-[var(--color-accent)] border-[var(--color-accent)]'
              : 'bg-[var(--color-bg-secondary)] border-[var(--color-border)]'
          }`}
        />
      </div>

      {/* Card */}
      <div className="pl-6">
        <ExperienceCard experience={experience} />
      </div>
    </motion.div>
  )
}

function ExperienceCard({ experience }) {
  return (
    <div className="group relative bg-[var(--color-bg-secondary)] rounded-2xl border border-[var(--color-border)] p-5 md:p-6 hover:border-[var(--color-border-hover)] transition-colors duration-300">
      {/* Current Badge */}
      {experience.current && (
        <div className="absolute -top-3 right-5">
          <span className="px-2 py-0.5 text-[10px] font-medium tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/30 rounded-full bg-[var(--color-accent-muted)]">
            CURRENT
          </span>
        </div>
      )}

      {/* Period */}
      <time className="text-[11px] font-medium tracking-wider text-[var(--color-text-muted)] block mb-3">
        {experience.period}
      </time>

      {/* Role & Company */}
      <div className="mb-3">
        <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-0.5">
          {experience.role}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)]">
          {experience.company}
          {experience.location && (
            <span className="text-[var(--color-text-subtle)]"> · {experience.location}</span>
          )}
        </p>
      </div>

      {/* Description */}
      <p className="text-[13px] text-[var(--color-text-muted)] mb-4 leading-relaxed">
        {experience.description}
      </p>

      {/* Responsibilities */}
      {experience.responsibilities.length > 0 && (
        <ul className="space-y-1.5 mb-4">
          {experience.responsibilities.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--color-text-muted)]">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-accent)]/50 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] rounded bg-[var(--color-surface)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ExperienceItem
