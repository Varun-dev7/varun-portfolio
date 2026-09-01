import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/navigation'

// All section IDs for IntersectionObserver
const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact']

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // IntersectionObserver for active section
  useEffect(() => {
    const observers = []
    const offset = 100 // Offset for navbar height

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        {
          rootMargin: `-${offset}px 0px -50% 0px`,
          threshold: 0,
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  // Close mobile menu on navigation
  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  // Handle hash link scroll
  const handleHashLink = useCallback(
    (e, href) => {
      e.preventDefault()
      const hash = href.split('#')[1]
      const element = document.getElementById(hash)
      if (element) {
        const offset = 80 // scroll-margin-top value
        const top = element.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
        // Update URL without triggering navigation
        window.history.pushState(null, '', href)
      }
      handleNavClick()
    },
    [handleNavClick]
  )

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="/#home"
            onClick={(e) => handleHashLink(e, '/#home')}
            className="relative z-50"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold tracking-tight text-[var(--color-text)]"
            >
              VARUN
            </motion.span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                name={item.name}
                href={item.href}
                isActive={activeSection === item.href.split('#')[1]}
                onNavClick={handleHashLink}
              />
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              onClick={(e) => handleHashLink(e, '/#contact')}
              className="px-5 py-2.5 text-sm font-medium text-[var(--color-text)] border border-[var(--color-border)] rounded-full hover:bg-[var(--color-surface-hover)] transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-[var(--color-text)]"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)] md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleHashLink(e, item.href)}
                    className="text-3xl font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <a
                  href="/#contact"
                  onClick={(e) => handleHashLink(e, '/#contact')}
                  className="px-8 py-3 text-lg font-medium text-[var(--color-text)] border border-[var(--color-border)] rounded-full hover:bg-[var(--color-surface-hover)] transition-all duration-300 mt-4"
                >
                  Let's Talk
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ name, href, isActive, onNavClick }) {
  return (
    <a
      href={href}
      onClick={(e) => onNavClick(e, href)}
      className={`text-sm transition-colors duration-300 relative group ${
        isActive
          ? 'text-[var(--color-text)]'
          : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
      }`}
    >
      {name}
      <span
        className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
          isActive
            ? 'w-full bg-[var(--color-accent)]'
            : 'w-0 h-px bg-[var(--color-text)] group-hover:w-full'
        }`}
      />
    </a>
  )
}

export default Navbar
