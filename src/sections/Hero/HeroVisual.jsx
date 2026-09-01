import { motion, useReducedMotion } from 'framer-motion'

const techNodes = [
  { name: 'Python', short: 'Py', color: '#5AA7FF', position: 'left-1/2 top-[1%] -translate-x-1/2' },
  { name: 'AI / LLM', short: 'AI', color: '#A995FF', position: 'left-[1%] top-1/2 -translate-y-1/2' },
  { name: 'React', short: 'Re', color: '#61DAFB', position: 'right-[1%] top-1/2 -translate-y-1/2' },
  { name: 'Node.js', short: 'N', color: '#6BD36B', position: 'bottom-[1%] left-1/2 -translate-x-1/2' },
]

const panels = [
  { label: 'ANALYSING', value: 'Patterns...', color: '#A995FF', position: 'left-[5%] top-[16%]' },
  { label: 'SYSTEM', value: 'Active', color: '#FFB37A', position: 'left-[4%] bottom-[16%]' },
  { label: 'PERFORMANCE', value: 'Optimizing', color: '#5AA7FF', position: 'right-[4%] top-[13%]' },
  { label: 'DATA FLOW', value: '847/s', color: '#6BD36B', position: 'right-[3%] bottom-[13%]' },
]

function HeroVisual() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="relative h-full w-full overflow-visible [perspective:1200px]">
      {/* Main scalable system */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-[min(94%,620px)] -translate-x-1/2 -translate-y-1/2">
        {/* Orbital rotation layer */}
        <motion.div
          animate={reducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[2%] rounded-full"
        >
          <div className="absolute inset-0 rounded-full border border-[#FFB37A]/20" style={{ transform: 'rotateX(68deg)' }} />
          <div className="absolute inset-[10%] rounded-full border border-[#A995FF]/20" style={{ transform: 'rotateX(68deg)' }} />
          <div className="absolute inset-[21%] rounded-full border border-[#5AA7FF]/20" style={{ transform: 'rotateX(68deg)' }} />
          <div className="absolute inset-[33%] rounded-full border border-[#FFB37A]/25" style={{ transform: 'rotateX(68deg)' }} />
        </motion.div>

        {/* Counter-rotating orbit */}
        <motion.div
          animate={reducedMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[8%] rounded-full border border-dashed border-white/10"
          style={{ transform: 'rotateX(68deg)' }}
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB37A] shadow-[0_0_18px_#FFB37A]" />
        </motion.div>

        {/* Energy arcs */}
        <motion.div
          animate={reducedMotion ? undefined : { rotate: [0, 8, 0, -8, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-[12%] rounded-full border border-[#FFB37A]/20"
          style={{
            transform: 'rotateX(68deg) rotateZ(-12deg)',
            boxShadow: '0 0 60px rgba(255,179,122,0.05)',
          }}
        />

        {/* Outer aura */}
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  scale: [1, 1.06, 1],
                  opacity: [0.35, 0.55, 0.35],
                }
          }
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,160,92,0.22),rgba(255,106,75,0.07)_42%,transparent_72%)] blur-2xl"
        />

        {/* Solar orb */}
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  scale: [1, 1.018, 1],
                  boxShadow: [
                    '0 0 45px rgba(255,150,91,.20), 0 0 110px rgba(255,150,91,.08)',
                    '0 0 75px rgba(255,170,105,.34), 0 0 165px rgba(255,120,80,.12)',
                    '0 0 45px rgba(255,150,91,.20), 0 0 110px rgba(255,150,91,.08)',
                  ],
                }
          }
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 aspect-square w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFB37A]/35 bg-[radial-gradient(circle_at_33%_28%,rgba(255,249,237,.55)_0%,rgba(255,202,153,.34)_16%,rgba(255,139,83,.22)_43%,rgba(111,49,28,.12)_70%,rgba(15,11,10,.16)_100%)]"
        >
          {/* Moving solar surface */}
          <motion.div
            animate={reducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[8%] rounded-full opacity-80"
            style={{
              background: `
                conic-gradient(
                  from 20deg,
                  transparent 0deg 18deg,
                  rgba(255,239,214,.12) 28deg 42deg,
                  transparent 55deg 95deg,
                  rgba(255,139,83,.14) 110deg 128deg,
                  transparent 140deg 205deg,
                  rgba(255,238,213,.1) 220deg 250deg,
                  transparent 265deg 360deg
                )
              `,
              filter: 'blur(4px)',
            }}
          />

          <div className="absolute left-[11%] top-[10%] h-[54%] w-[54%] rounded-full bg-[radial-gradient(circle,rgba(255,249,237,.5),rgba(255,235,215,.12)_35%,transparent_72%)] blur-sm" />

          <motion.div
            animate={reducedMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-1/2 h-[12%] w-[12%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFF4DF] shadow-[0_0_25px_rgba(255,244,223,.65),0_0_70px_rgba(255,168,102,.28)]"
          />
        </motion.div>

        {/* Floating tech nodes */}
        {techNodes.map((node, i) => (
          <motion.div
            key={node.name}
            animate={
              reducedMotion
                ? undefined
                : {
                    y: i % 2 === 0 ? [0, -7, 0] : [0, 7, 0],
                    x: i === 1 ? [0, -4, 0] : i === 2 ? [0, 4, 0] : 0,
                  }
            }
            transition={{
              duration: 4.5 + i * 0.45,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.35,
            }}
            className={`absolute ${node.position} z-20 flex flex-col items-center`}
          >
            <TechNodeIcon {...node} reducedMotion={reducedMotion} />
            <span className="mt-1 text-[8px] font-semibold tracking-wide text-white/45 sm:text-[9px]">
              {node.name}
            </span>
          </motion.div>
        ))}

        {/* Data panels */}
        {panels.map((panel, i) => (
          <DataPanel
            key={panel.label}
            {...panel}
            index={i}
            reducedMotion={reducedMotion}
          />
        ))}

        {/* Small orbiting satellites */}
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={reducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 12 + i * 5, repeat: Infinity, ease: 'linear', delay: i }}
            className="absolute inset-[15%] rounded-full"
            style={{ transform: `rotateX(${64 + i * 3}deg) rotateZ(${i * 35}deg)` }}
          >
            <span
              className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
              style={{
                background: i === 1 ? '#A995FF' : '#FFB37A',
                boxShadow: `0 0 12px ${i === 1 ? '#A995FF' : '#FFB37A'}`,
              }}
            />
          </motion.span>
        ))}
      </div>
    </div>
  )
}

function TechNodeIcon({ name, short, color, reducedMotion }) {
  return (
    <motion.div
      whileHover={reducedMotion ? undefined : { scale: 1.16, rotate: 4 }}
      className="group relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border backdrop-blur-md sm:h-10 sm:w-10"
      style={{
        borderColor: `${color}55`,
        background: `radial-gradient(circle at 35% 30%, ${color}35, ${color}08 70%)`,
        boxShadow: `0 0 22px ${color}22, inset 0 0 15px ${color}10`,
      }}
      title={name}
    >
      <span className="text-[10px] font-bold" style={{ color }}>
        {short}
      </span>
      <span
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 0 28px ${color}66` }}
      />
    </motion.div>
  )
}

function DataPanel({ label, value, color, position, index, reducedMotion }) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 0.65 + index * 0.12,
        duration: reducedMotion ? 0 : 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`absolute ${position} z-10 hidden min-w-[104px] flex-col gap-1 rounded-xl border bg-[#08090B]/70 p-2.5 shadow-[0_15px_45px_rgba(0,0,0,.25)] backdrop-blur-md md:flex lg:min-w-[118px]`}
      style={{ borderColor: `${color}2D` }}
    >
      <span className="text-[7px] font-semibold tracking-[0.16em]" style={{ color: `${color}CC` }}>
        {label}
      </span>
      <span className="text-[9px] font-semibold text-white/80">{value}</span>

      {label === 'PERFORMANCE' && (
        <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/[0.07]">
          <motion.div
            animate={reducedMotion ? undefined : { width: ['35%', '82%', '58%', '91%', '35%'] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full rounded-full"
            style={{ background: color }}
          />
        </div>
      )}

      {label === 'DATA FLOW' && (
        <div className="mt-1 flex h-3 items-end gap-[2px]">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              animate={reducedMotion ? undefined : { height: [3, 10, 5, 12, 4] }}
              transition={{ duration: 1.35, repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
              className="w-1 rounded-[1px]"
              style={{ background: `${color}99` }}
            />
          ))}
        </div>
      )}

      {label === 'SYSTEM' && (
        <div className="mt-0.5 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: color }} />
          <span className="text-[7px] text-white/35">Real-time</span>
        </div>
      )}

      {label === 'ANALYSING' && (
        <div className="mt-0.5 flex h-3 items-end gap-[2px]">
          {[4, 7, 10, 6, 9].map((height, i) => (
            <motion.span
              key={i}
              animate={reducedMotion ? undefined : { height: [height, height + 4, height] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.15 }}
              className="w-1 rounded-[1px]"
              style={{ height, background: `${color}70` }}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default HeroVisual
