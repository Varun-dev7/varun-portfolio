import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { profile } from '../../data/profile'
import AboutVisual from './AboutVisual'

function About() {
  return (
    <section id="about" className="relative py-[var(--section-padding)] overflow-hidden scroll-mt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg-secondary)] to-[var(--color-bg)]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Heading & Content */}
          <div className="order-2 lg:order-1">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="text-xs font-medium tracking-widest text-[var(--color-accent)]">01 — ABOUT</span>
              <div className="h-px w-12 bg-[var(--color-accent)]/30" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight mb-6"
            >
              <span className="text-[var(--color-text)]">I BUILD DIGITAL</span>
              <br />
              <span className="text-[var(--color-text)]">PRODUCTS WITH</span>{" "}
              <span className="gradient-text">CODE & INTELLIGENCE.</span>
            </motion.h2>

            {/* Personal Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Hi, I'm <span className="text-[var(--color-text)] font-medium">{profile.name}</span> — a Full Stack Developer specializing in React.js, ASP.NET Core, C#, and AI-powered solutions. I build scalable web applications and intelligent systems.
              </p>

              <p className="text-sm text-[var(--color-text-subtle)] leading-relaxed">
                I work with modern frameworks to create responsive interfaces, AI-powered automation, and practical digital solutions. I care about writing clean code and building things that actually solve real problems.
              </p>
            </motion.div>

            {/* Location Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 mt-6"
            >
              <MapPin size={14} className="text-[var(--color-text-subtle)]" />
              <span className="text-xs text-[var(--color-text-subtle)]">{profile.location}</span>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <AboutVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
