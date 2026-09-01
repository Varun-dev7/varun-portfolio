import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * MagneticButton - Subtle magnetic hover effect
 * Follows pointer gently and returns smoothly
 */
function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  onClick,
  href,
  disabled = false,
  ...props
}) {
  const buttonRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    const handler = (e) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (disabled || isReducedMotion) return

    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = (e.clientX - centerX) * strength
      const y = (e.clientY - centerY) * strength
      setPosition({ x, y })
    }

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
      button.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [strength, disabled, isReducedMotion])

  const motionProps = isReducedMotion
    ? {}
    : {
        x: position.x,
        y: position.y,
      }

  const content = (
    <motion.div
      ref={buttonRef}
      className={`magnetic-button ${className}`}
      animate={motionProps}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </motion.div>
  )

  if (href && !disabled) {
    return (
      <a href={href} className="magnetic-button-wrapper">
        {content}
      </a>
    )
  }

  return content
}

export default MagneticButton
