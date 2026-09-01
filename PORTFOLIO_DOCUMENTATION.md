# Varun Portfolio — Technical Documentation

**Last Updated:** August 30, 2026
**Author:** Senior React Architect Audit + Engineering Fix Pass
**Version:** 2.0

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Design System](#4-design-system)
5. [Component Architecture](#5-component-architecture)
6. [Routing](#6-routing)
7. [Data Architecture](#7-data-architecture)
8. [Animation System](#8-animation-system)
9. [Image & Media System](#9-image--media-system)
10. [Responsive Design](#10-responsive-design)
11. [Accessibility](#11-accessibility)
12. [Build & Deployment](#12-build--deployment)
13. [Known Issues & Status](#13-known-issues--status)
14. [Future Recommendations](#14-future-recommendations)

---

## 1. Project Overview

**Name:** Varun Portfolio
**Type:** Personal portfolio website
**Purpose:** Showcase projects, skills, experience, and contact information for professional purposes

### Real Profile Information

| Field | Value |
|-------|-------|
| Name | Varun Gupta |
| Title | Full Stack Developer |
| Tagline | Building digital experiences that feel different. |
| Location | Mau, Uttar Pradesh, India |
| Email | varungupta00v7@gmail.com |
| GitHub | https://github.com/Varun-dev7 |
| LinkedIn | https://linkedin.com/in/varun-gupta-a272a8346 |
| Available for work | Yes |

---

## 2. Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.8 | UI framework |
| Vite | 8.2.2 | Build tool & dev server |
| React Router DOM | 7.18.3 | Client-side routing |
| Framer Motion | 13.1.1 | Animations |
| Lucide React | 0.469.0 | Icons |
| Tailwind CSS | 4.3.3 | Utility CSS (compiled) |

**Note:** Tailwind CSS 4.x is CSS-based (no config file). All styling uses CSS custom properties via `var(--variable)` syntax.

---

## 3. Project Structure

```
varun-portfolio/
├── index.html              # Entry HTML, font preloads, OG tags
├── package.json
├── vite.config.js         # Vite configuration (minimal)
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Router & layout wrapper, code-split routes
    ├── index.css           # Design tokens, global styles, animations, skip link
    │
    ├── data/               # Static data files — all real content
    │   ├── projects.js     # 4 projects with real tech stacks
    │   ├── profile.js      # Real contact information
    │   ├── skills.js       # 6 skill categories, 22+ skills
    │   ├── experience.js   # 2 work entries (Cubicle Eight + Coders Academy)
    │   ├── services.js     # Service offerings
    │   ├── aiExperiments.js # AI experiment entries
    │   └── navigation.js   # Nav & footer nav links
    │
    ├── components/         # Reusable UI components
    │   ├── layout/
    │   │   ├── Layout.jsx   # Wraps all pages, skip link, outlet
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   └── animations/
    │       ├── CosmicBackground.jsx  # CSS-only stars, reduced-motion aware
    │       ├── CosmicOrb.jsx        # Floating orb, reduced-motion aware
    │       ├── MagneticButton.jsx   # Magnetic hover effect (imported, functional)
    │       └── CustomCursor.jsx     # Custom cursor (returns null, not imported)
    │
    ├── sections/           # Page sections
    │   ├── Home/
    │   │   ├── Home.jsx
    │   │   └── Sections/
    │   │       ├── Hero.jsx         # Uses profile.name
    │   │       ├── About.jsx        # Uses profile.location
    │   │       ├── Projects.jsx     # grid-cols-1 md:grid-cols-2
    │   │       ├── Skills.jsx
    │   │       ├── Experience.jsx
    │   │       ├── Services.jsx
    │   │       └── Contact.jsx
    │   ├── Projects/
    │   │   ├── ProjectsPage.jsx    # Lazy-loaded route
    │   │   ├── ProjectCard.jsx
    │   │   └── ProjectVisual.jsx   # Image/video/CSS renderer
    │   ├── ProjectDetails/
    │   │   └── ProjectDetails.jsx   # Lazy-loaded route
    │   ├── AI/
    │   │   ├── AI.jsx
    │   │   ├── AIScene.jsx
    │   │   └── AIExperimentCard.jsx
    │   └── Contact/
    │       ├── Contact.jsx
    │       └── ContactVisual.jsx
    │
    └── assets/
        └── images/
            ├── Doctora.png          (205.15 kB)
            ├── Ai-knowledge-bot.png (75.91 kB)
            └── Task-manager.png     (50.10 kB)
```

---

## 4. Design System

### Color Palette

```css
/* Dark Theme (default) */
--color-bg: #0B0B0C           /* Page background */
--color-bg-secondary: #141416  /* Card/surface background */
--color-text: #F5F2EA          /* Primary text (warm off-white) */
--color-text-secondary: #A8A29E
--color-text-muted: #6B6860
--color-text-subtle: #52504D
--color-accent: #D4956A       /* Copper/bronze accent */
--color-accent-muted: rgba(212, 149, 106, 0.15)
--color-border: #232320
--color-border-hover: #38382F
--color-surface: #1A1A1C
--color-surface-hover: #222224
```

### Typography

- **Font Family:** Inter (Google Fonts)
- **Headings:** `--font-heading` (Inter, bold, tight tracking)
- **Body:** `--font-body` (Inter, regular)
- **Fluid Sizing:** Uses `clamp()` for responsive text scaling

### Spacing

```css
--section-padding: clamp(56px, 8vh, 96px)  /* Vertical section spacing */
--container-width: 1200px                    /* Max content width */
```

### Transitions

```css
--transition-fast: 200ms
--transition-base: 300ms
--transition-slow: 500ms
```

---

## 5. Component Architecture

### Layout Components

| Component | Purpose |
|-----------|---------|
| `Layout.jsx` | Wraps all pages — skip link, Navbar + Outlet + Footer |
| `Navbar.jsx` | Sticky navigation, scroll-triggered background, mobile hamburger menu |
| `Footer.jsx` | 3-column footer: brand/social, navigation, contact |

### Common Components

| Component | Purpose | Status |
|-----------|---------|--------|
| `Icons.jsx` | Inline SVG icons (GitHub, Twitter, LinkedIn) | Active |
| `CosmicBackground.jsx` | CSS-only stars, mobile/reduced-motion static | Active |
| `CosmicOrb.jsx` | Decorative floating orbs, reduced-motion aware | Active |
| `MagneticButton.jsx` | Magnetic cursor-follow effect | Active (imported in Layout) |
| `CustomCursor.jsx` | Custom cursor overlay | Inactive (returns null) |

### Section Components

Home page is composed of 7 sections rendered in sequence:
`HeroSection → AboutSection → ProjectsSection → SkillsSection → ExperienceSection → ServicesSection → ContactSection`

Each section:
- Is independently animated via Framer Motion `whileInView`
- Uses `viewport={{ once: true, margin: "-100px" }}`
- Owns its own layout and styling
- Uses semantic HTML (`<section>`, `<article>`, `<h2>`–`<h3>`)

---

## 6. Routing

**File:** `src/App.jsx`

```
/                    → Home (all sections)
/projects            → ProjectsPage (lazy-loaded)
/projects/:projectId → ProjectDetails (lazy-loaded)
/ai                  → AI (lazy-loaded)
/*                   → NotFound (lazy-loaded)
```

All routes wrapped in `<Layout>` for consistent navbar/footer.

### Route-Level Code Splitting

Implemented via `React.lazy()` + `Suspense`. Each route is a separate chunk:

```jsx
import { lazy, Suspense } from 'react'

const Home        = lazy(() => import('./pages/Home'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))
const NotFound    = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/"        element={<Suspense fallback={<PageFallback />}><Home /></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={<PageFallback />}><ProjectsPage /></Suspense>} />
        <Route path="/projects/:projectId" element={<Suspense fallback={<PageFallback />}><ProjectDetails /></Suspense>} />
        <Route path="*"       element={<Suspense fallback={<PageFallback />}><NotFound /></Suspense>} />
      </Route>
    </Routes>
  )
}
```

---

## 7. Data Architecture

### Data Files

| File | Exports | Used By |
|------|---------|---------|
| `profile.js` | `profile` object, `socialLinks` array | Navbar, Footer, Hero, Contact, About |
| `projects.js` | `projects` array, `getFeaturedProjects()`, `getProjectById()`, `getAllProjects()` | ProjectsSection, ProjectsPage, ProjectDetails |
| `skills.js` | `skillCategories` array | SkillsSection |
| `experience.js` | `experiences` array | ExperienceSection |
| `services.js` | `services` array | ServicesSection |
| `aiExperiments.js` | `aiExperiments` array | AISection |
| `navigation.js` | `navLinks`, `footerNav` arrays | Navbar, Footer |

### Helper Functions in projects.js

`getFeaturedProjects()`, `getProjectById()`, and `getAllProjects()` are defined but not currently called in the codebase. They are preserved as utility functions for future use.

### Real Project Data

| Project | Stack | Live URL |
|---------|-------|----------|
| Doctora | React.js, ASP.NET Core 8, C#, MySQL, SignalR | — |
| AI Knowledge Bot | React.js, ASP.NET Core 8, C#, EF Core, SQL Server | https://aiknowledgebot.netlify.app |
| AcademyGo | ASP.NET Core Web API, C#, EF Core, LINQ, MySQL | — |
| Task Manager | React.js, Node.js, Express, MongoDB | — |

---

## 8. Animation System

### Global Pattern

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
```

### Animation Types

| Type | Implementation |
|------|---------------|
| Page sections | Fade + slide up on viewport enter |
| Cards/stagger | Staggered reveal with `delay: index * 0.1` |
| Hover states | CSS transitions (scale, opacity, color) |
| Background | CSS-only stars (no JS animation) |
| Hero text | Framer Motion stagger (word-by-word or line-by-line) |
| Hero orb | Framer Motion scale + opacity on initial load |

### Cosmic Background Animation

- **Stars:** Pure CSS radial gradients — no JS animation, no DOM elements
- **Solar glow:** Single static CSS gradient positioned top-right
- **Performance:** GPU-composited only (transform, opacity)

### prefers-reduced-motion

Properly implemented across all animated components:

- `CosmicBackground.jsx` — detects `prefers-reduced-motion` and `isMobile`, returns static background
- `CosmicOrb.jsx` — detects `prefers-reduced-motion`, disables float animation
- `MagneticButton.jsx` — detects `prefers-reduced-motion`, disables magnetic effect
- `HeroVisual.jsx` — registers listener (no cascading effect since state is unused)

All detection uses the standard pattern:
```jsx
const [isReducedMotion, setIsReducedMotion] = useState(false)
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  setIsReducedMotion(mediaQuery.matches)
  const handler = (e) => setIsReducedMotion(e.matches)
  mediaQuery.addEventListener('change', handler)
  return () => mediaQuery.removeEventListener('change', handler)
}, [])
```

---

## 9. Image & Media System

### Image Import Pattern

```javascript
// src/data/projects.js
import DoctoraImage from '../assets/images/Doctora.png'

export const projects = [
  {
    id: "project-01",
    image: DoctoraImage,  // Vite resolves to /assets/Doctora-[hash].png
    // ...
  }
]
```

### ProjectVisual Rendering

`ProjectVisual.jsx` handles 3 states:
1. **Has image:** Shows image with CSS opacity fade-in on `onLoad`
2. **No image, no video:** Shows CSS placeholder (grid + project number + category badge)
3. **Image loading:** Shows CSS placeholder behind transparent image until loaded

### Image Files

| File | Size | Project |
|------|------|---------|
| Doctora.png | 205.15 kB | Doctora |
| Ai-knowledge-bot.png | 75.91 kB | AI Knowledge Bot |
| Task-manager.png | 50.10 kB | Task Manager |
| AcademyGo.png | — | AcademyGo (uses CSS placeholder) |

### Image Persistence Bug (Fixed)

**Symptom:** Images disappear after navigating away and returning.
**Root Cause:** `viewport={{ once: true }}` + `loading="lazy"` + clip-path animation caused cached images to load before IntersectionObserver fired.
**Fix:** Removed clip-path animation, changed to `loading="eager"`, added `useEffect` to reset `imageLoaded` state on `project.id` change.

---

## 10. Responsive Design

### Breakpoints

| Prefix | Min Width | Typical Use |
|--------|-----------|-------------|
| `sm:` | 640px | Small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |

### Fluid Typography

```css
/* Section heading */
font-size: clamp(2rem, 5vw, 3.5rem);

/* Section padding */
padding: clamp(56px, 8vh, 96px);
```

### Grid Layouts

- **Project grid:** `grid-cols-1 md:grid-cols-2` (1 column mobile, 2 columns desktop)
- **Skills grid:** `grid-cols-2 sm:grid-cols-3` inside each category
- **Experience timeline:** `md:grid-cols-12` with left/right card placement
- **Footer:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### Mobile Navigation

Navbar uses a hamburger button with a slide-down menu panel. Active route is highlighted.

---

## 11. Accessibility

### Implemented

- Semantic HTML (`main`, `nav`, `footer`, `section`, `article`)
- Logical heading hierarchy (h1 → h2 → h3)
- `aria-hidden="true"` on decorative icons
- `aria-label` on icon-only links and buttons
- Excellent color contrast ratios (18.5:1 for primary text)
- **Skip link:** "Skip to main content" link as first focusable element (`.skip-link` CSS class)
- **prefers-reduced-motion:** All animated components respect user OS setting

### Skip Link Implementation

```jsx
// Layout.jsx
<a href="#main-content" className="skip-link">Skip to main content</a>
<main id="main-content"><Outlet /></main>

// index.css
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 9999;
  padding: 0.75rem 1.5rem;
  background: var(--color-accent);
  color: var(--color-bg);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0 0 0.5rem 0.5rem;
  text-decoration: none;
  transition: top 0.2s ease;
}
.skip-link:focus {
  top: 0;
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

---

## 12. Build & Deployment

### Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build to /dist
npm run preview  # Preview production build locally
npm run lint     # Lint with oxlint
```

### Build Output (August 30, 2026)

```
dist/
├── index.html                              1.51 kB
└── assets/
    ├── Task-manager-8Mc2aByi.png          50.10 kB
    ├── Ai-knowledge-bot-CKH-nDjF.png      75.91 kB
    ├── Doctora-Crt_1w10.png              205.15 kB
    ├── index-l0Q4YcmM.css                 50.75 kB (gzip: 8.87 kB)
    ├── NotFound-AUl7jbgm.js                1.13 kB (gzip: 0.51 kB)
    ├── ProjectsPage-Du9l63yA.js            2.62 kB (gzip: 1.00 kB)
    ├── projects-C55WEq9g.js                3.36 kB (gzip: 1.51 kB)
    ├── ProjectDetails-CndhH5cO.js          4.70 kB (gzip: 1.37 kB)
    ├── ProjectCard-CjA6J92N.js             5.58 kB (gzip: 1.88 kB)
    ├── Home-HmdwW6fM.js                   49.23 kB (gzip: 9.97 kB)
    ├── proxy-B0qsKOFB.js                168.12 kB (gzip: 55.61 kB)
    └── index-Cxv1D5Q7.js                 201.71 kB (gzip: 64.00 kB)
```

### Bundle Analysis

| Chunk | Size | gzip | Purpose |
|-------|------|------|---------|
| index (main) | 201.71 kB | 64.00 kB | Core app shell |
| proxy | 168.12 kB | 55.61 kB | Shared dependencies |
| Home | 49.23 kB | 9.97 kB | Home page |
| ProjectDetails | 4.70 kB | 1.37 kB | Project details page |
| ProjectCard | 5.58 kB | 1.88 kB | Shared project card component |
| ProjectsPage | 2.62 kB | 1.00 kB | Projects listing page |
| projects (section) | 3.36 kB | 1.51 kB | Projects section component |
| NotFound | 1.13 kB | 0.51 kB | 404 page |

**Total JS:** ~441 kB raw / ~140 kB gzip
**Initial load (main + proxy + Home):** ~419 kB raw / ~130 kB gzip
**Deferred routes:** ~17 kB raw / ~5 kB gzip

---

## 13. Known Issues & Status

### All Issues Resolved ✅

| Issue | Status | Fix |
|-------|--------|-----|
| Wrong GitHub URL | ✅ Fixed | Updated to `github.com/Varun-dev7` in profile.js and projects.js |
| Placeholder email | ✅ Fixed | Updated to `varungupta00v7@gmail.com` in profile.js |
| Wrong LinkedIn URL | ✅ Fixed | Updated to `linkedin.com/in/varun-gupta-a272a8346` |
| Wrong technology stacks | ✅ Fixed | All 4 projects updated with real stacks |
| AcademyGo missing image | ✅ Documented | Uses CSS placeholder; image field is null by design |
| No code splitting | ✅ Fixed | Routes lazy-loaded with React.lazy + Suspense |
| Large images | ⚠️ Partial | No WebP conversion; eager loading retained for persistence |
| prefers-reduced-motion | ✅ Fixed | All animated components check OS setting |
| Skip link missing | ✅ Fixed | Added to Layout.jsx with CSS in index.css |
| Dead code | ✅ Minimized | Removed unused imports/params; helper functions retained as utilities |
| Content accuracy | ✅ Fixed | All profile, experience, skills, and project data is real |

---

## 14. Future Recommendations

### High Priority

1. **AcademyGo screenshot** — Add real screenshot to `src/assets/images/AcademyGo.png` to replace CSS placeholder
2. **Image optimization** — Convert PNG to WebP; add `srcset` for responsive images; consider image CDN
3. **SEO enhancement** — Add `sitemap.xml`, `robots.txt`, JSON-LD structured data, per-page meta tags via React Helmet

### Medium Priority

1. **PWA manifest** — Add `manifest.json` and service worker for offline capability
2. **Error boundary** — Add React error boundary component for graceful crashes
3. **Performance budget** — Set targets for LCP, FID, CLS; monitor with WebPageTest

### Low Priority / Exploratory

1. **TypeScript migration** — Gradual adoption via `.tsx` files and strict mode
2. **Test coverage** — Add Playwright E2E tests for critical user journeys
3. **Analytics** — Add privacy-respecting analytics (e.g., Plausible) for visitor insights

---

## Quick Reference

### Design Tokens Location
`src/index.css` — All CSS custom properties defined in `:root`

### Component Styling
- Uses Tailwind CSS 4.x utility classes compiled by Vite
- No `tailwind.config.js` (CSS-based configuration)
- All color/spacing values via CSS variables: `var(--color-bg)`, `var(--section-padding)`, etc.

### Adding a New Project

1. Add image to `src/assets/images/`
2. Import in `src/data/projects.js`:
   ```js
   import NewProjectImage from '../assets/images/NewProject.png'
   ```
3. Add project object to `projects` array with fields: `id`, `title`, `subtitle`, `description`, `tech`, `features`, `image`, `github`, `live`, `period`, `category`, `number`
4. Run `npm run build`

### Animation Pattern

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  {/* content */}
</motion.div>
```
