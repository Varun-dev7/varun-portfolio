import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if ('ontouchstart' in window) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let ringX = 0
    let ringY = 0
    let dotX = 0
    let dotY = 0
    let animFrameId
    let isVisible = false

    const getAccentColor = () => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue('--color-accent')
        .trim() || '#D4956A'
    }

    const onMouseMove = (e) => {
      dotX = e.clientX
      dotY = e.clientY

      if (!isVisible) {
        isVisible = true
        dot.style.opacity = '1'
        ring.style.opacity = '1'
      }
    }

    const onMouseLeave = () => {
      isVisible = false
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    const animateRing = () => {
      ringX += (dotX - ringX) * 0.1
      ringY += (dotY - ringY) * 0.1

      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      animFrameId = requestAnimationFrame(animateRing)
    }

    animFrameId = requestAnimationFrame(animateRing)

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)

    // Update colors when theme changes
    const updateColors = () => {
      const color = getAccentColor()
      dot.style.backgroundColor = color
      ring.style.borderColor = color
    }

    const cssObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'style') {
          updateColors()
        }
      })
    })

    cssObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(animFrameId)
      cssObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* Dot cursor */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#D4956A',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          willChange: 'transform',
        }}
      />
      {/* Ring cursor */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          border: '1.5px solid #D4956A',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          willChange: 'transform',
        }}
      />
    </>
  )
}
