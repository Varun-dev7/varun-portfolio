import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ExternalLink, Globe, Smartphone, X } from 'lucide-react'
import { GithubIcon } from '../components/common/Icons'
import { getProjectById } from '../data/projects'

function ProjectDetails() {
  const { id } = useParams()
  const project = getProjectById(id)
  const [lightboxImage, setLightboxImage] = useState(null)

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

  const hasCaseStudy = !!project.overview
  const projectImages = project.images || (project.image ? [project.image] : [])

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt="Project screenshot"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)]">
        <div className="container">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-4">
              {project.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-6">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl">
              {project.description}
            </p>

            {/* Period */}
            <p className="text-sm text-[var(--color-text-subtle)] mb-6">
              {project.period}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-md bg-[var(--color-surface)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-bg)] font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                  <Globe size={16} />
                  Visit {project.title}
                </a>
              )}
              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border)] text-[var(--color-text)] font-medium rounded-full hover:bg-[var(--color-surface-hover)] transition-colors"
                >
                  <Smartphone size={16} />
                  View on Google Play
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border)] text-[var(--color-text)] font-medium rounded-full hover:bg-[var(--color-surface-hover)] transition-colors"
                >
                  <GithubIcon size={16} />
                  View on GitHub
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {projectImages.length > 0 && (
        <section className="pb-12 md:pb-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video max-w-5xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"
            >
              <img
                src={projectImages[0]}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Case Study Content */}
      {hasCaseStudy && (
        <>
          {/* Overview */}
          <section className="py-12 md:py-16 border-t border-[var(--color-border)]">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
                  Overview
                </h2>
                <p className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed">
                  {project.overview}
                </p>
              </motion.div>
            </div>
          </section>

          {/* The Problem */}
          <section className="py-12 md:py-16 border-t border-[var(--color-border)]">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
                  The Problem
                </h2>
                <p className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed">
                  {project.problem}
                </p>
              </motion.div>
            </div>
          </section>

          {/* The Solution */}
          <section className="py-12 md:py-16 border-t border-[var(--color-border)]">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
                  The Solution
                </h2>
                <p className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="py-12 md:py-16 border-t border-[var(--color-border)]">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-8">
                    Key Features
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {project.keyFeatures.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="p-5 md:p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] transition-colors"
                      >
                        <h3 className="text-base md:text-lg font-semibold text-[var(--color-text)] mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Technical Implementation */}
          {project.technicalImplementation && (
            <section className="py-12 md:py-16 border-t border-[var(--color-border)]">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-8">
                    Technical Implementation
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {Object.entries(project.technicalImplementation).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center gap-3 p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]"
                      >
                        <span className="text-sm text-[var(--color-text-subtle)] capitalize w-24">
                          {key}:
                        </span>
                        <span className="text-sm font-medium text-[var(--color-text)]">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Real-Time Architecture */}
          {project.realtimeArchitecture && (
            <section className="py-12 md:py-16 border-t border-[var(--color-border)]">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
                    Real-Time Architecture
                  </h2>
                  <p className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed">
                    {project.realtimeArchitecture}
                  </p>
                </motion.div>
              </div>
            </section>
          )}

          {/* Platform */}
          {project.platforms && (
            <section className="py-12 md:py-16 border-t border-[var(--color-border)]">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-8">
                    Platform
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-4 py-2 text-sm font-medium text-[var(--color-text)] border border-[var(--color-border)] rounded-full bg-[var(--color-surface)]"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  {project.playStore && (
                    <p className="mt-4 text-sm text-[var(--color-text-subtle)]">
                      The Android application is published on Google Play Store.
                    </p>
                  )}
                </motion.div>
              </div>
            </section>
          )}

          {/* Image Gallery */}
          {projectImages.length > 1 && (
            <section className="py-12 md:py-16 border-t border-[var(--color-border)]">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-8">
                    Project Gallery
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {projectImages.map((img, index) => (
                      <motion.button
                        key={img}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setLightboxImage(img)}
                        className="relative aspect-video overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] cursor-pointer"
                      >
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Bottom Navigation */}
      <section className="py-12 md:py-16 border-t border-[var(--color-border)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
            <div className="flex items-center gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-bg)] font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={16} />
                  Visit {project.title}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetails
