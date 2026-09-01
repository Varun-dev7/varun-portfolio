import { useState } from 'react'

/**
 * AIScene - Visual representation for AI experiments
 * Optimized: minimal animation, CSS-based visualization
 */
function AIScene({ experiment }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const hasImage = experiment.image !== null
  const hasVideo = experiment.video !== null

  return (
    <div className="relative w-full h-full overflow-hidden bg-[var(--color-bg-secondary)]">
      {/* Background Grid - subtle */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(245,242,234,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(245,242,234,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Real Image */}
      {hasImage && (
        <img
          src={experiment.image}
          alt={experiment.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      )}

      {/* Real Video */}
      {hasVideo && (
        <video
          src={experiment.video}
          poster={experiment.poster || undefined}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}

      {/* CSS Placeholder Visual - Static, no continuous animation */}
      {!hasImage && !hasVideo && <PlaceholderScene experiment={experiment} />}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
    </div>
  )
}

/**
 * CSS-based AI visualization - Static, no animation loops
 */
function PlaceholderScene({ experiment }) {
  // Status colors based on experiment status
  const statusColors = {
    Building: { primary: "var(--color-accent)", secondary: "var(--color-accent-light)" },
    Exploring: { primary: "#06b6d4", secondary: "#22d3ee" },
    Prototype: { primary: "#f59e0b", secondary: "#fbbf24" },
    Experiment: { primary: "#10b981", secondary: "#34d399" },
  }
  const colors = statusColors[experiment.status] || statusColors.Exploring

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Ambient Glow - Static */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle, ${colors.primary}60 0%, transparent 70%)`
        }}
      />

      {/* Central Interface Element */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Status Indicator - Static */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: colors.primary }}
            />
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-subtle)]">
              {experiment.status}
            </span>
          </div>
        </div>

        {/* Main Visual Element - Static geometric */}
        <div className="relative">
          {/* Outer Ring - Static */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/[0.08]" />

          {/* Inner Ring - Static */}
          <div
            className="absolute inset-8 rounded-full border border-dashed"
            style={{ borderColor: `${colors.primary}30` }}
          />

          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center font-bold text-2xl md:text-3xl text-[var(--color-bg)]"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              }}
            >
              {experiment.number}
            </div>
          </div>
        </div>

        {/* Category Label */}
        <p className="mt-8 text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-text-subtle)]">
          {experiment.category}
        </p>
      </div>

      {/* Corner Elements */}
      <div className="absolute top-6 left-6">
        <p className="text-[10px] font-mono tracking-wider text-[var(--color-text-subtle)]">SYSTEM</p>
        <p className="text-[10px] font-mono tracking-wider" style={{ color: colors.primary }}>ACTIVE</p>
      </div>

      <div className="absolute bottom-6 right-6 text-right">
        <p className="text-[10px] font-mono tracking-wider text-[var(--color-text-subtle)]">EXPERIMENT</p>
        <p className="text-[10px] font-mono tracking-wider text-[var(--color-text-subtle)]">{experiment.number}</p>
      </div>

      {/* Decorative Grid Lines - Static */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      </div>
    </div>
  )
}

export default AIScene
