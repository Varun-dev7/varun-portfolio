import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { profile } from '../../data/profile'
import HeroVisual from './HeroVisual'

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#08090B] scroll-mt-20">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Main background */}
        <div className="absolute inset-0 bg-[#08090B]" />

        {/* Deep blue atmospheric glow */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_90%_80%_at_75%_45%,rgba(30,35,65,0.22),transparent_70%)]
          "
        />

        {/* Warm orb atmosphere */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_55%_70%_at_78%_55%,rgba(212,149,106,0.08),transparent_70%)]
          "
        />

        {/* Purple atmosphere */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_70%_50%_at_20%_80%,rgba(70,55,110,0.10),transparent_70%)]
          "
        />

        {/* =====================================================
            SUBTLE GRID
        ===================================================== */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(245,242,234,0.35) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(245,242,234,0.35) 1px,
                transparent 1px
              )
            `,
            backgroundSize: '52px 52px',
            maskImage:
              'linear-gradient(to bottom, black 0%, transparent 85%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, transparent 85%)',
          }}
        />

        {/* =====================================================
            CONSTELLATION
        ===================================================== */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          viewBox="0 0 1708 921"
          preserveAspectRatio="none"
        >
          <g fill="none">
            <line x1="50" y1="120" x2="230" y2="180" stroke="#8E83B7" strokeWidth="0.5" />
            <line x1="230" y1="180" x2="390" y2="105" stroke="#8E83B7" strokeWidth="0.5" />
            <line x1="390" y1="105" x2="520" y2="170" stroke="#8E83B7" strokeWidth="0.5" />
            <line x1="90" y1="390" x2="280" y2="330" stroke="#D4956A" strokeWidth="0.4" />
            <line x1="280" y1="330" x2="430" y2="400" stroke="#D4956A" strokeWidth="0.4" />
            <line x1="590" y1="160" x2="760" y2="220" stroke="#8E83B7" strokeWidth="0.4" />
            <line x1="720" y1="680" x2="900" y2="620" stroke="#D4956A" strokeWidth="0.4" />
            <line x1="1000" y1="760" x2="1160" y2="700" stroke="#8E83B7" strokeWidth="0.4" />
            <line x1="1300" y1="720" x2="1500" y2="780" stroke="#D4956A" strokeWidth="0.4" />
          </g>

          <g fill="#D4956A">
            <circle cx="230" cy="180" r="1.5" />
            <circle cx="390" cy="105" r="1" />
            <circle cx="520" cy="170" r="1.2" />
            <circle cx="760" cy="220" r="1" />
            <circle cx="900" cy="620" r="1.2" />
            <circle cx="1160" cy="700" r="1" />
            <circle cx="1500" cy="780" r="1.2" />
          </g>
        </svg>

        {/* =====================================================
            AMBIENT PARTICLES
        ===================================================== */}
        <div className="absolute inset-0 overflow-hidden">
          <AmbientParticle className="left-[8%] top-[15%]" size="2px" delay="0s" />
          <AmbientParticle className="left-[18%] top-[31%]" size="1px" delay="2s" />
          <AmbientParticle className="left-[30%] top-[12%]" size="2px" delay="4s" />
          <AmbientParticle className="left-[42%] top-[25%]" size="1px" delay="1s" />
          <AmbientParticle className="left-[52%] top-[15%]" size="2px" delay="3s" />
          <AmbientParticle className="left-[64%] top-[30%]" size="1px" delay="5s" />
          <AmbientParticle className="left-[73%] top-[18%]" size="2px" delay="2s" />
          <AmbientParticle className="left-[88%] top-[12%]" size="1px" delay="4s" />
          <AmbientParticle className="left-[10%] top-[60%]" size="1px" delay="3s" />
          <AmbientParticle className="left-[27%] top-[70%]" size="2px" delay="1s" />
          <AmbientParticle className="left-[45%] top-[58%]" size="1px" delay="5s" />
          <AmbientParticle className="left-[58%] top-[72%]" size="2px" delay="2s" />
          <AmbientParticle className="left-[82%] top-[65%]" size="1px" delay="4s" />
          <AmbientParticle className="left-[94%] top-[52%]" size="2px" delay="1s" />
        </div>

        {/* =====================================================
            BOTTOM DIGITAL TERRAIN
        ===================================================== */}
        <div className="absolute bottom-0 left-0 right-0 h-[180px] opacity-[0.12]">
          <svg className="w-full h-full" viewBox="0 0 1708 180" preserveAspectRatio="none">
            {Array.from({ length: 18 }).map((_, index) => {
              const x = index * 105
              return (
                <line
                  key={`terrain-v-${index}`}
                  x1={x}
                  y1="180"
                  x2={854 + (index - 9) * 35}
                  y2="0"
                  stroke="#D4956A"
                  strokeWidth="0.45"
                  opacity="0.35"
                />
              )
            })}
            {[25, 50, 75, 100, 125, 150].map((y) => (
              <line
                key={`terrain-h-${y}`}
                x1="0"
                y1={y}
                x2="1708"
                y2={y}
                stroke="#A8A5A0"
                strokeWidth="0.3"
                opacity="0.25"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="container relative z-10 pt-0 pb-0">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)]
            gap-8
            xl:gap-2
            items-center
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="pl-[4%] xl:pl-[5.5%] max-w-[650px] mx-auto lg:mx-0 text-center lg:text-left items-center lg:items-start">

            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-9 justify-center lg:justify-start"
            >
              <span
                className="
                  inline-flex
                  items-center
                  px-4
                  py-1.5
                  text-[11px]
                  font-medium
                  tracking-[0.15em]
                  text-[#D4956A]
                  border
                  border-[rgba(212,149,106,0.4)]
                  rounded-full
                  bg-[rgba(212,149,106,0.06)]
                "
              >
                AVAILABLE FOR WORK
              </span>

              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                className="text-[#D4956A] opacity-70"
              >
                <circle cx="3" cy="7" r="2" fill="currentColor" />
                <circle cx="10" cy="3" r="1.4" fill="currentColor" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                <circle cx="10" cy="11" r="1.2" fill="currentColor" />
                <line x1="5" y1="6" x2="8" y2="4" stroke="currentColor" strokeWidth="0.6" />
                <line x1="12" y1="4" x2="15" y2="6" stroke="currentColor" strokeWidth="0.6" />
                <line x1="12" y1="10" x2="15" y2="8" stroke="currentColor" strokeWidth="0.6" />
              </svg>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(2.5rem,6vw,5.55rem)] font-bold leading-[0.98] tracking-[-0.045em] mb-7"
            >
              <span className="text-[#F5F2EA]">Building digital</span>
              <br />
              <span className="text-[#F5F2EA]">experiences that</span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #F5E7D5 0%, #E8B58E 48%, #D4956A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                feel different.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-[17px] sm:text-[18px] text-[#A8A5A1] leading-[1.65] mb-9 max-w-[570px] mx-auto lg:mx-0"
            >
              Hi, I'm{' '}
              <span className="text-[#F5F2EA] font-semibold">{profile.name}</span>.
              I build modern web applications, AI-powered experiences, and intelligent digital products.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start"
            >
              <a
                href="/#projects"
                className="
                  group inline-flex items-center justify-center gap-2 px-8 py-3 min-w-[168px]
                  bg-[#F5F2EA] text-[#0B0C0F] text-sm font-medium rounded-full
                  hover:bg-[#E8E5E0] hover:-translate-y-0.5 transition-all duration-300
                "
              >
                View My Work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="/#contact"
                className="
                  group inline-flex items-center justify-center gap-2 px-8 py-3 min-w-[185px]
                  border border-[rgba(245,242,234,0.2)] text-[#F5F2EA] text-sm font-medium
                  rounded-full hover:bg-[rgba(245,242,234,0.05)]
                  hover:border-[rgba(245,242,234,0.35)] hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                Let's Work Together
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="mt-12 h-px bg-[rgba(255,255,255,0.08)] max-w-[500px] mx-auto lg:mx-0"
            />
          </div>

          {/* =====================================================
              RIGHT — ORBITAL VISUAL
              NO hidden class. Visible on all screen sizes.
              Height scales responsively: 300px mobile → 620px desktop.
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[280px] sm:h-[360px] md:h-[480px] lg:h-[620px]"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border border-[rgba(245,242,234,0.14)] rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1 h-2 bg-[#D4956A] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

/* =============================================================
   AMBIENT PARTICLE
============================================================= */

function AmbientParticle({ className = '', size = '2px', delay = '0s' }) {
  return (
    <motion.span
      className={`absolute rounded-full bg-[#D4956A] ${className}`}
      style={{
        width: size,
        height: size,
        boxShadow: '0 0 8px rgba(212,149,106,0.5)',
      }}
      animate={{ opacity: [0.15, 0.65, 0.15], y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

export default Hero
