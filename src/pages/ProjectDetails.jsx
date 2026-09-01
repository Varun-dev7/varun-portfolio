import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/common/Icons'
import { getProjectById } from '../data/projects'

function ProjectDetails() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-[var(--color-text)] mb-4"
          >
            Project Not Found
          </motion.h1>
          <p className="text-[var(--color-text-muted)] mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-text)] text-[var(--color-bg)] font-medium rounded-full hover:bg-[var(--color-text-secondary)] transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)]">
        <div className="container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Category & Number */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 text-xs font-medium tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/30 rounded-full bg-[var(--color-accent-muted)]">
                {project.category}
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">{project.number}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-6">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-md bg-[var(--color-surface)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-text)] text-[var(--color-bg)] font-medium rounded-full hover:bg-[var(--color-text-secondary)] transition-colors"
                >
                  <GithubIcon size={18} />
                  View on GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border)] text-[var(--color-text)] font-medium rounded-full hover:bg-[var(--color-surface-hover)] transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video max-w-4xl mx-auto bg-[var(--color-bg-secondary)] rounded-3xl border border-[var(--color-border)] flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-6xl font-bold text-[var(--color-text)]/5 mb-4">{project.number}</p>
              <p className="text-[var(--color-text-subtle)]">Project visuals coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Placeholder Case Study */}
      <section className="py-16 border-t border-[var(--color-border)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Case Study</h2>
            <p className="text-[var(--color-text-muted)] mb-6">
              Full case study content will be added here. This includes the problem statement,
              solution approach, technical implementation details, and project outcomes.
            </p>
            <p className="text-sm text-[var(--color-text-subtle)]">
              Update <code className="text-[var(--color-accent)]">src/data/projects.js</code> to add real project details.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetails
