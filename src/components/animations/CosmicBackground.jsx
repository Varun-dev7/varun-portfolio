import { useEffect, useState } from 'react'

/**
 * CosmicBackground - Optimized layered atmospheric background
 * Uses CSS-only gradients, no animated DOM elements
 */
function CosmicBackground({ intensity: _intensity = 'medium', className = '' }) {
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)

    // Detect mobile
    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)

    const handleResize = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // On mobile or reduced motion, show minimal static background
  if (isMobile || isReducedMotion) {
    return (
      <div className={`cosmic-background-static ${className}`} aria-hidden="true">
        <style>{`
          .cosmic-background-static {
            position: fixed;
            inset: 0;
            z-index: -1;
            overflow: hidden;
            pointer-events: none;
            background: var(--color-bg);
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className={`cosmic-background ${className}`} aria-hidden="true">
      {/* Single static layered background */}
      <div className="cosmic-layer cosmic-base" />

      {/* Warm solar glow - subtle */}
      <div className="cosmic-layer cosmic-solar" />

      {/* Static stars layer - CSS only, no JS */}
      <div className="cosmic-layer cosmic-stars" />

      <style>{`
        .cosmic-background {
          position: fixed;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
        }

        .cosmic-layer {
          position: absolute;
          inset: 0;
        }

        /* Base gradient - single layered background */
        .cosmic-base {
          background:
            radial-gradient(ellipse 80% 50% at 50% 0%, var(--color-bg-secondary) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 100%, var(--color-bg-deep) 0%, transparent 50%),
            var(--color-bg);
        }

        /* Warm solar glow - static, positioned top-right */
        .cosmic-solar {
          background: radial-gradient(400px 300px at 85% 15%, rgba(212, 149, 106, 0.08) 0%, transparent 70%);
        }

        /* Stars - pure CSS, no JS elements */
        .cosmic-stars {
          background-image:
            radial-gradient(1px 1px at 20% 30%, rgba(245, 242, 234, 0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 70%, rgba(245, 242, 234, 0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 20%, rgba(245, 242, 234, 0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 50%, rgba(245, 242, 234, 0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 80%, rgba(245, 242, 234, 0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 80% 10%, rgba(245, 242, 234, 0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 40%, rgba(245, 242, 234, 0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 60%, rgba(245, 242, 234, 0.3) 0%, transparent 100%);
        }
      `}</style>
    </div>
  )
}

export default CosmicBackground
