import { useState, useEffect } from 'react'

/**
 * ProjectVisual - Project card media renderer
 * Handles image, video, or CSS-based visualization
 */
function ProjectVisual({ project }) {
  const [imageError, setImageError] = useState(false)

  const hasImage = project.image !== null && !imageError
  const hasVideo = project.video !== null

  // Reset state when project changes
  useEffect(() => {
    setImageError(false)
  }, [project.id])

  return (
    <div className="relative w-full h-full bg-[var(--color-bg-secondary)]">
      {/* Real Image - always show image directly */}
      {hasImage && (
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setImageError(true)}
          loading="eager"
          decoding="async"
        />
      )}

      {/* CSS Placeholder - shows when no image */}
      {!hasImage && !hasVideo && (
        <PlaceholderVisual project={project} />
      )}
    </div>
  )
}

/**
 * CSS-based project placeholder - clean, minimal
 */
function PlaceholderVisual({ project }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(245,242,234,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(245,242,234,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Center Content */}
      <div className="relative z-10 text-center">
        {/* Project Number */}
        <span className="text-[120px] md:text-[180px] font-bold text-[var(--color-text)]/[0.03] leading-none">
          {project.number}
        </span>

        {/* Category Label */}
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-16">
          <span className="px-4 py-2 text-xs font-medium tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/20 rounded-full bg-[var(--color-accent-muted)]">
            {project.category}
          </span>
        </div>
      </div>

      {/* Subtle Corner Accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[var(--color-accent)]/10" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-[var(--color-accent)]/10" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-[var(--color-accent)]/10" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[var(--color-accent)]/10" />
    </div>
  )
}

export default ProjectVisual
