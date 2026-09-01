# Varun Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS 4.

## Quick Start

```bash
npm install
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── data/          # Static portfolio data (projects, skills, experience, etc.)
├── components/    # Reusable UI components
│   ├── layout/    # Layout, Navbar, Footer
│   └── common/    # Icons, CosmicBackground, CosmicOrb
├── sections/      # Page sections (Hero, About, Projects, etc.)
└── assets/        # Images
```

## Tech Stack

- **React 19** + Vite 8
- **Tailwind CSS 4** (CSS-based, no config file)
- **Framer Motion 13** for animations
- **React Router 7** for routing
- **Lucide React** for icons

## Key Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build in `/dist` |
| `npm run preview` | Preview production build locally |

## Design System

All design tokens are in `src/index.css` as CSS custom properties:

```css
--color-bg          /* Page background */
--color-accent     /* Primary accent (copper) */
--color-text       /* Primary text */
--section-padding  /* Fluid vertical spacing */
```

## Adding Content

**New project:**
1. Add image to `src/assets/images/`
2. Import and add to `src/data/projects.js`

**Update profile:**
Edit `src/data/profile.js`

**Update skills/experience:**
Edit `src/data/skills.js` and `src/data/experience.js`

## Documentation

Full technical documentation: [PORTFOLIO_DOCUMENTATION.md](./PORTFOLIO_DOCUMENTATION.md)

## Build Output

```
dist/assets/
├── Doctora.png           205 kB
├── Ai-knowledge-bot.png   76 kB
├── Task-manager.png      50 kB
└── index.js             434 kB  (gzip: 130 kB)
```
