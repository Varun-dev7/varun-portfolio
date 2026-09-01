import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'

// Code-split non-critical routes
const Home = lazy(() => import('./pages/Home'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Minimal fallback — no animation to keep it light
function PageFallback() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg)',
        color: 'var(--color-text)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <span style={{ opacity: 0.4, fontSize: '0.875rem' }}>Loading…</span>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageFallback />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={<PageFallback />}>
                <ProjectsPage />
              </Suspense>
            }
          />
          <Route
            path="projects/:id"
            element={
              <Suspense fallback={<PageFallback />}>
                <ProjectDetails />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageFallback />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
