import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import SkillCategory from './SkillCategory'

// Real brand icons from react-icons/si
import {
  SiJavascript,
  SiTypescript,
  SiSharp,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiSass,
  SiMui,
  SiIonic,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFirebase,
  SiPostman,
} from 'react-icons/si'

// Technology logos data with real brand icons
const technologies = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'C#', icon: SiSharp, color: '#512BD4' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'Sass', icon: SiSass, color: '#CC6699' },
  { name: 'Material UI', icon: SiMui, color: '#007FFF' },
  { name: 'Ionic', icon: SiIonic, color: '#3880FF' },
  { name: 'ASP.NET Core', icon: SiDotnet, color: '#512BD4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'SignalR', icon: 'signalr', color: '#512BD4' },
  { name: 'SQL Server', icon: 'sqlserver', color: '#CC2927' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  // { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
]

// SQL Server SVG logo
function SqlServerIcon({ size = 32, color = '#CC2927' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 4L8 8v4.5c0 4.5 2 8.5 8 11 6-2.5 8-6.5 8-11V8l-8-4z" fill={color} opacity="0.15"/>
      <path d="M16 4L8 8v4.5c0 4.5 2 8.5 8 11 6-2.5 8-6.5 8-11V8l-8-4z" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M16 11v9M12 15.5h8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="15.5" r="2" fill={color}/>
    </svg>
  )
}

// SignalR SVG logo
function SignalRIcon({ size = 32, color = '#512BD4' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" fill={color} opacity="0.12"/>
      <circle cx="16" cy="16" r="12" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M10 16a6 6 0 0 1 6-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M16 10a6 6 0 0 1 6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M16 10a3 3 0 0 1 3 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="16" cy="16" r="2" fill={color}/>
    </svg>
  )
}

// Single tech item with floating animation
function TechItem({ tech, index, isReducedMotion }) {
  const delay = (index % 4) * 0.5 + Math.floor(index / 4) * 0.3

  const isCustomIcon = tech.icon === 'signalr' || tech.icon === 'sqlserver'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative flex flex-col items-center gap-2 p-3 rounded-xl bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.07)] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 20px ${tech.color}20`,
        }}
      />

      {/* Icon */}
      <motion.div
        className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center"
        animate={isReducedMotion ? {} : {
          y: [0, -2, 0],
        }}
        transition={{
          duration: 4 + (index % 3),
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 0.5,
        }}
      >
        {isCustomIcon ? (
          tech.icon === 'signalr' ? (
            <SignalRIcon size={32} color={tech.color} />
          ) : (
            <SqlServerIcon size={32} color={tech.color} />
          )
        ) : (
          <tech.icon size={32} color={tech.color} />
        )}
      </motion.div>

      {/* Name */}
      <span className="text-[10px] md:text-[11px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors duration-300 text-center leading-tight">
        {tech.name}
      </span>
    </motion.div>
  )
}

// Orbital decoration background
function OrbitalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orbital rings */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <ellipse cx="50" cy="50" rx="40" ry="25" fill="none" stroke="rgba(212,149,106,0.3)" strokeWidth="0.3" />
        <ellipse cx="50" cy="50" rx="30" ry="18" fill="none" stroke="rgba(212,149,106,0.2)" strokeWidth="0.2" />
        <ellipse cx="50" cy="50" rx="20" ry="12" fill="none" stroke="rgba(212,149,106,0.15)" strokeWidth="0.2" />
        <ellipse cx="50" cy="50" rx="45" ry="28" fill="none" stroke="rgba(212,149,106,0.1)" strokeWidth="0.15" />
      </svg>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Floating dots */}
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-[rgba(212,149,106,0.3)]"
        style={{ left: '15%', top: '20%' }}
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(212,149,106,0.2)]"
        style={{ left: '75%', top: '35%' }}
        animate={{ y: [0, -8, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-[rgba(212,149,106,0.25)]"
        style={{ left: '45%', top: '70%' }}
        animate={{ y: [0, -12, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute w-0.5 h-0.5 rounded-full bg-[rgba(212,149,106,0.35)]"
        style={{ left: '85%', top: '60%' }}
        animate={{ y: [0, -6, 0], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-[rgba(212,149,106,0.2)]"
        style={{ left: '25%', top: '55%' }}
        animate={{ y: [0, -9, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="relative py-[var(--section-padding)] overflow-hidden scroll-mt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg-secondary)] to-[var(--color-bg)]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Header + Tech Constellation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-medium tracking-widest text-[var(--color-accent)]">03 — EXPERTISE</span>
              <div className="h-px w-12 bg-[var(--color-accent)]/30" />
            </div>

            {/* Heading */}
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight mb-4">
              <span className="text-[var(--color-text)]">TOOLS FOR TURNING</span>
              <br />
              <span className="text-[var(--color-text)]">IDEAS INTO</span>{' '}
              <span className="gradient-text">REAL PRODUCTS.</span>
            </h2>

            {/* Description */}
            <p className="text-sm text-[var(--color-text-muted)] max-w-md mb-8">
              A focused set of technologies and tools I use to build modern web applications,
              automate workflows, and create intelligent digital experiences.
            </p>

            {/* Technology Constellation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Orbital background decoration */}
              <OrbitalBackground />

              {/* Tech grid */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 gap-2 relative z-10">
                {technologies.map((tech, index) => (
                  <TechItem key={tech.name} tech={tech} index={index} isReducedMotion={false} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skill Categories */}
          <div className="lg:col-span-7 space-y-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <SkillCategory category={category} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
