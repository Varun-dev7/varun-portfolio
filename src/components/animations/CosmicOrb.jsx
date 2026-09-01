import { useEffect, useState } from 'react'

/**
 * CosmicOrb - Simplified 3D CSS orb
 * Static appearance with subtle hover effect - no continuous animation
 */
function CosmicOrb({
  size = 300,
  color = 'warm',
  interactive = false,
  className = '',
}) {
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)

    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)

    const handleResize = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Disable interactive on mobile/reduced motion
  const isInteractive = interactive && !isReducedMotion && !isMobile

  const colorSchemes = {
    warm: {
      primary: 'var(--color-accent)',
      secondary: 'var(--color-accent-light)',
      glow: 'var(--color-accent-glow)',
    },
    cool: {
      primary: '#6A8FD4',
      secondary: '#85B5E6',
      glow: 'rgba(106, 143, 212, 0.4)',
    },
    neutral: {
      primary: '#A8A5A0',
      secondary: '#E8E5E0',
      glow: 'rgba(168, 165, 160, 0.4)',
    },
  }

  const colors = colorSchemes[color] || colorSchemes.warm

  return (
    <div
      className={`cosmic-orb-wrapper ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Main orb container */}
      <div
        className="cosmic-orb"
        style={{
          width: size,
          height: size,
          transform: 'perspective(800px) rotateX(-15deg) rotateY(15deg)',
          transition: isInteractive ? 'transform 0.3s ease-out' : 'none',
        }}
      >
        {/* Core sphere */}
        <div
          className="orb-core"
          style={{
            background: `
              radial-gradient(circle at 35% 35%,
                ${colors.secondary} 0%,
                ${colors.primary} 40%,
                #1a1a1a 100%
              )
            `,
          }}
        />

        {/* Inner atmosphere ring */}
        <div
          className="orb-atmosphere"
          style={{
            border: `1px solid ${colors.primary}25`,
          }}
        />

        {/* Single orbit ring - horizontal */}
        <div
          className="orb-ring"
          style={{
            border: `1px solid ${colors.primary}20`,
            transform: 'translateZ(calc(var(--size, 300px) * 0.25)) rotateX(75deg)',
          }}
        />

        {/* Glow effect behind */}
        <div
          className="orb-glow"
          style={{
            background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
          }}
        />
      </div>

      <style>{`
        .cosmic-orb-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cosmic-orb {
          position: relative;
          border-radius: 50%;
          transform-style: preserve-3d;
        }

        .orb-core {
          position: absolute;
          inset: 15%;
          border-radius: 50%;
          box-shadow:
            inset -20px -20px 40px rgba(0,0,0,0.8),
            inset 8px 8px 20px rgba(255,255,255,0.08),
            0 0 60px var(--color-accent-glow);
        }

        .orb-atmosphere {
          position: absolute;
          inset: 0;
          border-radius: 50%;
        }

        .orb-ring {
          position: absolute;
          inset: -10%;
          border-radius: 50%;
          transform-style: preserve-3d;
        }

        .orb-glow {
          position: absolute;
          inset: -40%;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.3;
        }
      `}</style>
    </div>
  )
}

export default CosmicOrb
