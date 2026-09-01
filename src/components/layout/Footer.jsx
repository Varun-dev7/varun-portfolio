import { motion } from 'framer-motion'
import { ArrowUp, Mail } from 'lucide-react'
import { profile, socialLinks } from '../../data/profile'
import { footerNav } from '../../data/navigation'
import { GithubIcon, LinkedInIcon } from '../common/Icons'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleHashLink = (e, href) => {
    e.preventDefault()
    const hash = href.split('#')[1]
    const element = document.getElementById(hash)
    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <footer className="relative bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold text-[var(--color-text)] tracking-tight mb-2"
            >
              {profile.name}
            </motion.h3>
            <p className="text-sm text-[var(--color-text-muted)]">{profile.title}</p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon === 'github' && <GithubIcon size={18} />}
                  {link.icon === 'linkedin' && <LinkedInIcon size={18} />}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="p-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-[10px] font-medium tracking-widest text-[var(--color-text-subtle)] uppercase mb-4">
              Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerNav.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleHashLink(e, item.href)}
                  className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[10px] font-medium tracking-widest text-[var(--color-text-subtle)] uppercase mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${profile.email}`}
                className="block text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
              >
                {profile.email}
              </a>
              <p className="text-xs text-[var(--color-text-subtle)]">{profile.location}</p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 mt-5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
              aria-label="Back to top"
            >
              <ArrowUp
                size={14}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
              Back to top
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-border)]">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-[var(--color-text-subtle)]">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-[11px] text-[var(--color-text-subtle)]">
            Built with React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
