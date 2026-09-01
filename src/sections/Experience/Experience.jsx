import { motion } from 'framer-motion'
import { experiences } from '../../data/experience'
import ExperienceItem from './ExperienceItem'
import backgroundVideo from '../../assets/videos/background.mp4'

function Experience() {
  return (
    <section id="experience" className="relative py-[var(--section-padding)] overflow-hidden scroll-mt-20">
      {/* ============================= BACKGROUND ============================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Animated background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-[var(--color-bg)]/25" />

        {/* Accent atmosphere */}
        <div
          className="
      absolute
      left-1/2
      top-0
      h-[500px]
      w-[700px]
      -translate-x-1/2
      rounded-full
      bg-[var(--color-accent)]/[0.06]
      blur-[140px]
    "
        />

        {/* Bottom fade */}
        <div
          className="
      absolute
      inset-x-0
      bottom-0
      h-40
      bg-gradient-to-t
      from-[var(--color-bg)]
      to-transparent
    "
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-medium tracking-widest text-[var(--color-accent)]">04 — EXPERIENCE</span>
            <div className="h-px w-12 bg-[var(--color-accent)]/30" />
          </div>

          {/* Heading */}
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight mb-4">
            <span className="text-[var(--color-text)]">THE JOURNEY</span>
            <br />
            <span className="text-[var(--color-text)]">BEHIND THE</span>{" "}
            <span className="gradient-text">WORK.</span>
          </h2>

          {/* Description */}
          <p className="text-sm text-[var(--color-text-muted)] max-w-xl">
            A timeline of the development journey — the roles, projects, and growth
            that have shaped the approach to building digital products.
          </p>
        </motion.div>

        {/* Timeline Container - Desktop: 3-column grid */}
        <div className="relative mx-auto max-w-[1280px] px-6">
          {/* Desktop Layout: alternating left/right with centered timeline */}
          <div className="hidden lg:block">
            {/* Center Timeline Column */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] -translate-x-1/2" />

            {/* Grid: Left Content | Timeline | Right Content */}
            <div className="grid grid-cols-[1fr_64px_1fr] gap-0 items-start">
              {/* Left Side Items (index 0, 2, 4...) */}
              <div className="space-y-10 pr-8">
                {experiences
                  .filter((_, i) => i % 2 === 0)
                  .map((experience, i) => {
                    const originalIndex = experiences.findIndex(e => e.id === experience.id)
                    return (
                      <ExperienceItem
                        key={experience.id}
                        experience={experience}
                        index={originalIndex}
                        isLeft={true}
                        isLast={originalIndex === experiences.length - 1}
                        layout="desktop"
                      />
                    )
                  })}
              </div>

              {/* Center Column - Timeline dots placed here */}
              <div className="relative">
                {experiences.map((experience, i) => (
                  <div
                    key={`dot-${experience.id}`}
                    className="relative h-[120px] flex items-center justify-center"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.3, duration: 0.4 }}
                      className={`w-2.5 h-2.5 rounded-full border-2 z-10 ${experience.current
                          ? 'bg-[var(--color-accent)] border-[var(--color-accent)]'
                          : 'bg-[var(--color-bg-secondary)] border-[var(--color-border)]'
                        }`}
                    />
                  </div>
                ))}
              </div>

              {/* Right Side Items (index 1, 3, 5...) */}
              <div className="space-y-10 pl-8">
                {experiences
                  .filter((_, i) => i % 2 === 1)
                  .map((experience, i) => {
                    const originalIndex = experiences.findIndex(e => e.id === experience.id)
                    return (
                      <ExperienceItem
                        key={experience.id}
                        experience={experience}
                        index={originalIndex}
                        isLeft={false}
                        isLast={originalIndex === experiences.length - 1}
                        layout="desktop"
                      />
                    )
                  })}
              </div>
            </div>
          </div>

          {/* Tablet Layout: timeline on left, cards stacked on right */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-[32px_1fr] gap-0">
              {/* Timeline line */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--color-border)] -translate-x-1/2" />
              </div>

              {/* Cards */}
              <div className="space-y-8 pl-6">
                {experiences.map((experience, index) => (
                  <ExperienceItem
                    key={experience.id}
                    experience={experience}
                    index={index}
                    isLeft={true}
                    isLast={index === experiences.length - 1}
                    layout="tablet"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout: single column with left timeline */}
          <div className="md:hidden">
            <div className="grid grid-cols-[28px_1fr] gap-0">
              {/* Timeline line */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--color-border)] -translate-x-1/2" />
              </div>

              {/* Cards */}
              <div className="space-y-6 pl-5">
                {experiences.map((experience, index) => (
                  <ExperienceItem
                    key={experience.id}
                    experience={experience}
                    index={index}
                    isLeft={true}
                    isLast={index === experiences.length - 1}
                    layout="mobile"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
