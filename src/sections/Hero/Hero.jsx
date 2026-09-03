import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { profile } from '../../data/profile'
import HeroVisual from './HeroVisual'
import VisitorCounter from '../../components/ui/VisitorCounter'

function Hero() {
  const reducedMotion = useReducedMotion()

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  })

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#06070A] scroll-mt-20"
    >
      {/* ============================= BACKGROUND ============================= */}
       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Multi-tone cinematic atmosphere */}
        <div className="absolute -right-[18%] top-[8%] h-[75vw] max-h-[900px] w-[75vw] max-w-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,166,92,0.14)_0%,rgba(255,113,82,0.055)_30%,transparent_70%)] blur-3xl" />
        <div className="absolute -left-[20%] bottom-[-20%] h-[70vw] max-h-[800px] w-[70vw] max-w-[800px] rounded-full bg-[radial-gradient(circle,rgba(105,85,255,0.12)_0%,rgba(67,130,255,0.04)_42%,transparent_72%)] blur-3xl" />
        <div className="absolute left-[38%] top-[-30%] h-[55vw] max-h-[700px] w-[55vw] max-w-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.045),transparent_68%)] blur-3xl" />

        {/* Fine technical grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.28) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.28) 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 85% 75% at 65% 50%, black 0%, transparent 78%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 85% 75% at 65% 50%, black 0%, transparent 78%)',
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.48)_100%)]" />

        {/* Animated scan line */}
        {!reducedMotion && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        )}

        {/* Constellation / circuit traces */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.13]"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g fill="none" stroke="rgba(255,170,105,0.38)" strokeWidth="0.7">
            <path d="M20 160H190L245 105H420" />
            <path d="M90 610H250L315 545H500" />
            <path d="M1110 110H1280L1340 170H1580" />
            <path d="M1160 700H1320L1390 630H1580" />
            <path d="M720 40V120L780 180V280" />
          </g>
          <g fill="rgba(255,185,125,0.8)">
            <circle cx="190" cy="160" r="2" />
            <circle cx="315" cy="545" r="2" />
            <circle cx="1340" cy="170" r="2" />
            <circle cx="1390" cy="630" r="2" />
            <circle cx="780" cy="180" r="2" />
          </g>
        </svg>

        {/* Ambient particles */}
        <div className="absolute inset-0">
          {[
            ['left-[8%] top-[16%]', '2px', 0],
            ['left-[19%] top-[34%]', '1px', 1.5],
            ['left-[34%] top-[12%]', '2px', 3],
            ['left-[47%] top-[25%]', '1px', 0.7],
            ['left-[61%] top-[12%]', '2px', 2.4],
            ['left-[75%] top-[28%]', '1px', 4],
            ['left-[91%] top-[16%]', '2px', 1.2],
            ['left-[12%] top-[68%]', '1px', 3.4],
            ['left-[31%] top-[78%]', '2px', 0.8],
            ['left-[54%] top-[70%]', '1px', 2.7],
            ['left-[82%] top-[74%]', '2px', 1.8],
            ['left-[95%] top-[54%]', '1px', 3.8],
          ].map(([position, size, delay], i) => (
            <motion.span
              key={i}
              className={`absolute rounded-full bg-[#FFB37A] ${position}`}
              style={{
                width: size,
                height: size,
                boxShadow: '0 0 12px rgba(255,179,122,0.55)',
              }}
              animate={
                reducedMotion
                  ? undefined
                  : { opacity: [0.1, 0.75, 0.1], y: [0, -9, 0], scale: [1, 1.4, 1] }
              }
              transition={{
                duration: 5 + (i % 3),
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
              }}
            />
          ))}
        </div>

        {/* Bottom perspective floor */}
        <div className="absolute inset-x-0 bottom-0 h-[24vh] min-h-[150px] opacity-[0.12] [mask-image:linear-gradient(to_top,black,transparent)]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,179,122,.55) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,179,122,.55) 1px, transparent 1px)
              `,
              backgroundSize: '80px 28px, 80px 28px',
              transform: 'perspective(500px) rotateX(62deg) scale(1.45)',
              transformOrigin: 'bottom center',
            }}
          />
        </div>
      </div>

      {/* ============================= CONTENT ============================= */}
      <div className="container relative z-10 w-full py-24 sm:py-28 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:gap-0">
          {/* LEFT */}
          <div className="mx-auto w-full max-w-[680px] text-center lg:mx-0 lg:pl-[3%] lg:text-left xl:pl-[5%]">
            <motion.div
              {...reveal(0)}
              className="mb-7 flex items-center justify-center gap-3 sm:mb-9 lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FFB37A]/30 bg-[#FFB37A]/[0.055] px-4 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-[#FFBE8A] shadow-[0_0_30px_rgba(255,163,101,0.08)] sm:text-[11px]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFB37A] opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FFB37A]" />
                </span>
                AVAILABLE FOR WORK
              </span>
              <Sparkles size={15} className="text-[#FFB37A]/60" />
            </motion.div>

            <motion.h1
              {...reveal(0.1)}
              className="mb-7 text-[clamp(2.25rem,5vw,4.6rem)] font-bold leading-[0.96] tracking-[-0.05em] text-[#F7F4EE] sm:mb-8"
            >
              <span className="block">Building digital</span>
              <span className="block">experiences that</span>
              <span className="block bg-gradient-to-r from-[#FFF1DF] via-[#FFC08C] to-[#FF8F61] bg-clip-text text-transparent">
                feel different.
              </span>
            </motion.h1>

            <motion.p
              {...reveal(0.22)}
              className="mx-auto mb-9 max-w-[590px] text-[16px] leading-[1.7] text-[#AAA8A4] sm:text-[18px] lg:mx-0"
            >
              Hi, I'm{' '}
              <span className="font-semibold text-[#F7F4EE]">{profile.name}</span>.
              I build modern web applications, AI-powered experiences, and intelligent digital products.
            </motion.p>

            <motion.div
              {...reveal(0.32)}
              className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
            >
              <a
                href="/#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 text-sm font-semibold text-[var(--color-bg)] shadow-[0_12px_45px_rgba(212,149,106,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(212,149,106,0.25)]"
              >
                View My Work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="/#contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.03] px-7 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/[0.08]"
              >
                Let's Work Together
              </a>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.9, delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
              className="mx-auto mt-11 h-px max-w-[520px] bg-gradient-to-r from-white/10 via-white/5 to-transparent lg:mx-0"
            />

            {/* Visitor Counter — below the divider, aligned left */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.65 }}
              className="mt-8 lg:mt-9"
            >
              <VisitorCounter />
            </motion.div>
          </div>

          {/* RIGHT — VISUAL */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 1.15, delay: 0.18, ease: [0.16, 1, 0.3, 1] }
            }
            className="relative mx-auto h-[330px] w-full max-w-[700px] sm:h-[430px] md:h-[520px] lg:h-[620px]"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reducedMotion ? 0 : 1.25, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex items-center gap-2 text-[9px] font-medium tracking-[0.2em] text-white/25">
          <span>SCROLL</span>
          <div className="flex h-9 w-5 justify-center rounded-full border border-white/15 pt-2">
            <motion.span
              animate={reducedMotion ? undefined : { y: [0, 9, 0], opacity: [0.35, 1, 0.35] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="h-1.5 w-0.5 rounded-full bg-[#FFB37A]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
