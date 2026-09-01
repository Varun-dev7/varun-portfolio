import { Outlet } from 'react-router-dom'
import Navbar from '../navigation/Navbar'
import Footer from './Footer'
import CosmicBackground from '../animations/CosmicBackground'
import CustomCursor from '../ui/CustomCursor'
import ThemePicker from '../ui/ThemePicker'

function Layout() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] grain">
      <CosmicBackground intensity="low" />
      <CustomCursor />
      <ThemePicker />

      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
