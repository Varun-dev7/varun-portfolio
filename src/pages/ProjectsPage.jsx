import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from '../sections/Projects/ProjectCard'

function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-[var(--section-padding)]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium tracking-widest text-[#8b5cf6]">02 — SELECTED WORK</span>
            <div className="h-px w-12 bg-[#8b5cf6]/30" />
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-white">ALL</span>{" "}
            <span className="gradient-text">PROJECTS</span>
          </h1>

          <p className="text-gray-500 max-w-xl">
            A collection of projects showcasing modern web development, AI integration,
            and thoughtful design solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-8">
              Featured
            </h2>
            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} variant="featured" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h2 className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-8">
              More Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} variant="grid" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
          >
            <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsPage
