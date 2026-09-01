import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GithubIcon } from '../../components/common/Icons'
import ProjectVisual from './ProjectVisual'

function ProjectCard({ project }) {
  // Build links array from available data
  const availableLinks = []
  if (project.github) {
    availableLinks.push({ label: 'GitHub', href: project.github, icon: 'github' })
  }
  if (project.live) {
    availableLinks.push({ label: 'Live Demo', href: project.live, icon: 'external' })
  }
  if (project.playStore) {
    availableLinks.push({ label: 'Play Store', href: project.playStore, icon: 'play' })
  }

  // Show 4-5 tech tags max
  const displayTechs = project.technologies.slice(0, 5)

  return (
    <article className="group/card">
      {/* Card Container */}
      <div className="bg-[var(--color-bg-secondary)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {/* Image Container - 16/10 aspect ratio */}
        <Link
          to={`/projects/${project.id}`}
          className="block relative overflow-hidden aspect-[16/10]"
          tabIndex={-1}
        >
          {/* Image with hover scale - no clip-path to avoid IntersectionObserver conflicts */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <ProjectVisual project={project} />
          </motion.div>

          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
        </Link>

        {/* Details Container */}
        <div className="p-5 md:p-6">
          {/* Number + Category Row */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-[var(--color-text-subtle)] tracking-wider">
              {project.number}
            </span>
            <span className="px-2.5 py-0.5 text-[10px] font-medium tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/25 rounded-full bg-[var(--color-accent-muted)]">
              {project.category?.toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-[var(--color-text)] tracking-tight mb-2 group-hover/card:text-[var(--color-text-secondary)] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {displayTechs.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="px-2 py-0.5 text-[11px] text-[var(--color-text-muted)] border border-[var(--color-border)] rounded bg-[var(--color-surface)]"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links Row */}
          <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-secondary)] group-hover/card:text-[var(--color-text)] transition-colors duration-300"
            >
              <span>View Case Study</span>
              <ArrowRight size={12} className="transition-transform duration-300 group-hover/card:translate-x-1" />
            </Link>

            {/* External Links */}
            {availableLinks.length > 0 && (
              <div className="flex items-center gap-1">
                {availableLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                    aria-label={`${link.label} for ${project.title}`}
                  >
                    {link.icon === 'github' && <GithubIcon size={14} />}
                    {link.icon === 'external' && <ExternalLink size={14} />}
                    {link.icon === 'play' && <Play size={14} />}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
