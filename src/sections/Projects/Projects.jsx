import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="relative py-[var(--section-padding)] bg-[var(--color-bg)] overflow-hidden scroll-mt-20">
      {/* Background - Single subtle glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--color-accent)]/3 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="text-xs font-medium tracking-widest text-[var(--color-accent)]">02 — SELECTED WORK</span>
            <div className="h-px w-12 bg-[var(--color-accent)]/30" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text)]"
          >
            SELECTED WORK
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-[var(--color-text-muted)] mt-3 max-w-xl"
          >
            A selection of projects showcasing modern web development, AI integration,
            and thoughtful design.
          </motion.p>
        </div>

        {/* Projects Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium rounded-full hover:bg-[var(--color-surface-hover)] transition-all duration-300"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
