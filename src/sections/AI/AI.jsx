import { motion } from 'framer-motion'
import { aiExperiments, getFeaturedExperiment } from '../../data/aiExperiments'
import AIScene from './AIScene'
import AIExperimentCard from './AIExperimentCard'

function AI() {
  const featuredExperiment = getFeaturedExperiment()
  const otherExperiments = aiExperiments.filter((exp) => !exp.featured)

  return (
    <section id="ai" className="relative py-[var(--section-padding)] overflow-hidden">
      {/* Background - Single subtle glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[var(--color-accent)]/4 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-10 md:mb-14"
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-medium tracking-widest text-[var(--color-accent)]">06 — AI / EXPERIMENTS</span>
            <div className="h-px w-12 bg-[var(--color-accent)]/30" />
          </div>

          {/* Heading */}
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight mb-4">
            <span className="text-[var(--color-text)]">CURIOUS ABOUT</span>
            <br />
            <span className="text-[var(--color-text)]">WHAT'S</span>{" "}
            <span className="gradient-text">NEXT.</span>
          </h2>

          {/* Description */}
          <p className="text-sm text-[var(--color-text-muted)] max-w-xl">
            Exploring the intersection of intelligence and interfaces — experiments with AI,
            automation, and emerging technology.
          </p>
        </motion.div>

        {/* Featured Experiment */}
        {featuredExperiment && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="mb-8 md:mb-12"
          >
            <FeaturedExperiment experiment={featuredExperiment} />
          </motion.div>
        )}

        {/* Other Experiments Grid */}
        {otherExperiments.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherExperiments.map((experiment, index) => (
              <motion.div
                key={experiment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <AIExperimentCard experiment={experiment} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function FeaturedExperiment({ experiment }) {
  return (
    <article className="group relative">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-0">
        {/* Visual */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] rounded-2xl overflow-hidden bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
          <AIScene experiment={experiment} />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-6 lg:p-8">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-bold text-[var(--color-text)]/5">{experiment.number}</span>
            <span className="px-2.5 py-0.5 text-[10px] font-medium tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/30 rounded-full bg-[var(--color-accent-muted)]">
              {experiment.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] mb-3">
            {experiment.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[var(--color-text-muted)] mb-4 max-w-md leading-relaxed">
            {experiment.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {experiment.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] rounded bg-[var(--color-surface)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
            <span className="text-[11px] font-medium tracking-wider text-[var(--color-text-muted)] uppercase">
              {experiment.status}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default AI
