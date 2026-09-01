import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { profile, socialLinks } from '../../data/profile'
import { GithubIcon, LinkedInIcon } from '../../components/common/Icons'
import ContactVisual from './ContactVisual'

function Contact() {
  const emailHref = `mailto:${profile.email}`

  return (
    <section id="contact" className="relative py-[var(--section-padding)] overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[var(--color-accent)]/4 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="text-xs font-medium tracking-widest text-[var(--color-accent)]">06 — LET'S TALK</span>
              <div className="h-px w-12 bg-[var(--color-accent)]/30" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.0] tracking-tight mb-6"
            >
              <span className="text-[var(--color-text)]">LET'S BUILD</span>
              <br />
              <span className="text-[var(--color-text)]">SOMETHING</span>
              <br />
              <span className="gradient-text">WORTH REMEMBERING.</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm text-[var(--color-text-muted)] mb-8 max-w-md leading-relaxed"
            >
              Have a project, idea, or opportunity?
              <br />
              Let's talk about it.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a
                href={emailHref}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-text)] text-[var(--color-bg)] text-sm font-medium rounded-full hover:bg-[var(--color-text-secondary)] transition-all duration-300"
              >
                <Mail size={16} />
                Send an Email
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium rounded-full hover:bg-[var(--color-surface-hover)] transition-all duration-300"
                >
                  {link.icon === 'github' && <GithubIcon size={16} />}
                  {link.icon === 'linkedin' && <LinkedInIcon size={16} />}
                  {link.name}
                </a>
              ))}
            </motion.div>

            {/* Direct Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <Mail size={14} className="text-[var(--color-text-subtle)]" />
              <a
                href={emailHref}
                className="text-xs text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors"
              >
                {profile.email}
              </a>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <ContactVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
