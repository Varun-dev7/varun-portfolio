import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, X, Check } from 'lucide-react'

const themeColors = [
  { name: 'Solar Gold', accent: '#D4956A', accentLight: '#E6B585', accentDark: '#C98A4A', bg: '#0B0B0C' },
  { name: 'Ocean Blue', accent: '#6A9FD4', accentLight: '#85B5E6', accentDark: '#4A8AC9', bg: '#0B0D12' },
  { name: 'Emerald', accent: '#6AD495', accentLight: '#85E6B5', accentDark: '#4AC98A', bg: '#0B0F0C' },
  { name: 'Amethyst', accent: '#A86AD4', accentLight: '#B585E6', accentDark: '#8A4AC9', bg: '#0E0B0F' },
  { name: 'Rose', accent: '#D46A8A', accentLight: '#E6859E', accentDark: '#C94A6E', bg: '#0F0B0D' },
  { name: 'Cyan', accent: '#6AD4D4', accentLight: '#85E6E6', accentDark: '#4AC9C9', bg: '#0B0F0F' },
  { name: 'Coral', accent: '#FF7F50', accentLight: '#FF9F70', accentDark: '#FF5F30', bg: '#0F0A08' },
  { name: 'Violet', accent: '#9B6AD4', accentLight: '#B085E6', accentDark: '#7A4AC9', bg: '#0C0A0F' },
  { name: 'Mint', accent: '#50C878', accentLight: '#70D898', accentDark: '#30A858', bg: '#080F0A' },
  { name: 'Sunset', accent: '#FF6B6B', accentLight: '#FF8B8B', accentDark: '#FF4B4B', bg: '#0F0808' },
  { name: 'Teal', accent: '#008080', accentLight: '#00A0A0', accentDark: '#006060', bg: '#080F0F' },
  { name: 'Champagne', accent: '#F7E7CE', accentLight: '#FFF0DF', accentDark: '#E8D4B0', bg: '#0E0D0A' },
]

function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeColor, setActiveColor] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme-accent') || themeColors[0].accent
    }
    return themeColors[0].accent
  })

  useEffect(() => {
    document.documentElement.style.setProperty('--color-accent', activeColor)
    const selected = themeColors.find((c) => c.accent === activeColor)
    if (selected) {
      document.documentElement.style.setProperty('--color-accent-light', selected.accentLight)
      document.documentElement.style.setProperty('--color-accent-dark', selected.accentDark)
      document.documentElement.style.setProperty('--color-bg', selected.bg)
    }
    localStorage.setItem('theme-accent', activeColor)
  }, [activeColor])

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 shadow-lg"
        aria-label="Change theme color"
      >
        <Palette size={20} className="text-[var(--color-text)]" />
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-20 right-6 z-50 w-80 max-h-[70vh] overflow-y-auto rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-4 border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                <h3 className="text-sm font-semibold text-[var(--color-text)]">Theme Colors</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors"
                >
                  <X size={16} className="text-[var(--color-text-muted)]" />
                </button>
              </div>

              {/* Color Grid */}
              <div className="p-4 grid grid-cols-4 gap-3">
                {themeColors.map((color) => (
                  <button
                    key={color.accent}
                    onClick={() => setActiveColor(color.accent)}
                    className="group relative flex flex-col items-center gap-1.5"
                    aria-label={color.name}
                  >
                    <span
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                        activeColor === color.accent
                          ? 'border-[var(--color-text)] scale-110'
                          : 'border-transparent group-hover:border-[var(--color-border-hover)]'
                      }`}
                      style={{ backgroundColor: color.accent }}
                    >
                      {activeColor === color.accent && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <Check size={14} className="text-white drop-shadow-md" />
                        </span>
                      )}
                    </span>
                    <span className="text-[10px] text-[var(--color-text-muted)] text-center leading-tight">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default ThemePicker
