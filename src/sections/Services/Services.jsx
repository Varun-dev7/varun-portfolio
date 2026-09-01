import { motion } from 'framer-motion'
import { services } from '../../data/services'

function Services() {
  return (
    <section id="services" className="relative py-[var(--section-padding)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--color-accent)]/3 rounded-full blur-[120px]" />
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
            <span className="text-xs font-medium tracking-widest text-[var(--color-accent)]">05 — SERVICES</span>
            <div className="h-px w-12 bg-[var(--color-accent)]/30" />
          </div>

          {/* Heading */}
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight mb-4">
            <span className="text-[var(--color-text)]">SOLUTIONS I</span>
            <br />
            <span className="text-[var(--color-text)]">CAN HELP</span>{" "}
            <span className="gradient-text">WITH.</span>
          </h2>

          {/* Description */}
          <p className="text-sm text-[var(--color-text-muted)] max-w-xl">
            From full-stack web applications to AI integration and technical consultation —
            focused on delivering solutions that actually work.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  return (
    <div className="group relative h-full bg-[var(--color-bg-secondary)] rounded-2xl border border-[var(--color-border)] p-6 hover:border-[var(--color-border-hover)] transition-all duration-300">
      {/* Number */}
      <span className="absolute top-5 right-5 text-4xl font-bold text-[var(--color-text)]/3">
        {service.number}
      </span>

      {/* Icon */}
      <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-muted)] flex items-center justify-center mb-5">
        <ServiceIcon icon={service.icon} />
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-[var(--color-text)] mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-1.5">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-[var(--color-text-muted)]">
            <span className="text-[var(--color-accent)] mt-0.5">›</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/0 to-transparent group-hover:via-[var(--color-accent)]/30 transition-all duration-500" />
    </div>
  )
}

function ServiceIcon({ icon }) {
  const iconColor = 'var(--color-accent)'
  const icons = {
    web: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    ai: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
        <circle cx="7.5" cy="14.5" r="1.5" />
        <circle cx="16.5" cy="14.5" r="1.5" />
      </svg>
    ),
    server: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    consultation: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  }

  return icons[icon] || icons.web
}

export default Services
