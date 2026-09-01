import { motion } from 'framer-motion'

function HeroVisual() {
  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* ============================================================
          RESPONSIVE ORBITAL SYSTEM
          Everything inside this container scales together.
          Desktop: up to 620px
          Tablet: scales automatically
          Mobile: remains visible and centered
      ============================================================ */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[min(94%,620px)]
          aspect-square
        "
      >

        {/* ==========================================================
            ORBITAL RINGS
        ========================================================== */}

        {/* Ring 1 — outermost */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-full
            h-[62.4%]
            rounded-full
            border
            border-[rgba(212,149,106,0.14)]
          "
          style={{
            transform:
              'translate(-50%, -50%) rotateX(68deg)',
          }}
        />

        {/* Ring 2 */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[84.2%]
            h-[52.6%]
            rounded-full
            border
            border-[rgba(212,149,106,0.18)]
          "
          style={{
            transform:
              'translate(-50%, -50%) rotateX(68deg)',
          }}
        />

        {/* Ring 3 */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[68.4%]
            h-[42.8%]
            rounded-full
            border
            border-[rgba(212,149,106,0.22)]
          "
          style={{
            transform:
              'translate(-50%, -50%) rotateX(68deg)',
          }}
        />

        {/* Ring 4 */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[52.6%]
            h-[33.2%]
            rounded-full
            border
            border-[rgba(212,149,106,0.26)]
          "
          style={{
            transform:
              'translate(-50%, -50%) rotateX(68deg)',
          }}
        />

        {/* Ring 5 — innermost */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[37.6%]
            h-[23.4%]
            rounded-full
            border
            border-[rgba(212,149,106,0.32)]
          "
          style={{
            transform:
              'translate(-50%, -50%) rotateX(68deg)',
          }}
        />

        {/* ==========================================================
            OUTER ATMOSPHERIC GLOW
        ========================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[84%]
            aspect-square
            rounded-full
            bg-[radial-gradient(circle,rgba(212,149,106,0.28)_0%,transparent_70%)]
          "
          style={{
            filter: 'blur(8px)',
          }}
        />

        {/* ==========================================================
            MID GLOW RING
        ========================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[80.6%]
            aspect-square
            rounded-full
            border
            border-[rgba(212,149,106,0.22)]
          "
        />

        {/* ==========================================================
            MAIN SOLAR ORB
        ========================================================== */}

        <motion.div
          animate={{
            boxShadow: [
              `
                0 0 50px rgba(212,149,106,0.28),
                0 0 100px rgba(212,149,106,0.10),
                inset 0 0 60px rgba(212,149,106,0.06)
              `,
              `
                0 0 70px rgba(212,149,106,0.38),
                0 0 140px rgba(212,149,106,0.14),
                inset 0 0 80px rgba(212,149,106,0.09)
              `,
              `
                0 0 50px rgba(212,149,106,0.28),
                0 0 100px rgba(212,149,106,0.10),
                inset 0 0 60px rgba(212,149,106,0.06)
              `,
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[57.1%]
            aspect-square
            rounded-full
            bg-[radial-gradient(circle_at_35%_35%,rgba(245,231,213,0.30),rgba(212,149,106,0.18)_42%,rgba(139,89,43,0.12)_75%,rgba(40,25,15,0.08)_100%)]
            border
            border-[rgba(212,149,106,0.32)]
          "
        >

          {/* Inner bright atmosphere */}
          <div
            className="
              absolute
              rounded-full
              w-[55%]
              h-[55%]
              top-[10%]
              left-[10%]
              bg-[radial-gradient(circle,rgba(245,231,213,0.48)_0%,rgba(245,231,213,0.12)_35%,transparent_72%)]
              blur-[2px]
            "
          />

          {/* Bright center */}
          <div
            className="
              absolute
              rounded-full
              w-[14%]
              aspect-square
              left-[43%]
              top-[43%]
              bg-[rgba(245,231,213,0.72)]
              shadow-[0_0_20px_rgba(245,231,213,0.35)]
            "
          />

        </motion.div>

        {/* ==========================================================
            TECH NODES
        ========================================================== */}

        {/* Python — top */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            left-1/2
            top-[2%]
            -translate-x-1/2
            flex
            flex-col
            items-center
          "
        >
          <TechNodeIcon name="Python" color="#3776AB" />

          <span
            className="
              text-[9px]
              sm:text-[10px]
              text-[rgba(245,242,234,0.55)]
              mt-1
              font-medium
              tracking-wide
            "
          >
            Python
          </span>
        </motion.div>

        {/* AI / LLM — left */}
        <motion.div
          animate={{ x: [0, -4, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="
            absolute
            left-[2%]
            top-1/2
            -translate-y-1/2
            flex
            flex-col
            items-center
          "
        >
          <TechNodeIcon name="AI" color="#8E83B7" />

          <span
            className="
              text-[8px]
              sm:text-[9px]
              text-[rgba(245,242,234,0.55)]
              mt-1
              font-medium
              tracking-wide
            "
          >
            AI / LLM
          </span>
        </motion.div>

        {/* React — right */}
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="
            absolute
            right-[2%]
            top-1/2
            -translate-y-1/2
            flex
            flex-col
            items-center
          "
        >
          <TechNodeIcon name="React" color="#61DAFB" />

          <span
            className="
              text-[8px]
              sm:text-[9px]
              text-[rgba(245,242,234,0.55)]
              mt-1
              font-medium
              tracking-wide
            "
          >
            React
          </span>
        </motion.div>

        {/* Node.js — bottom */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="
            absolute
            left-1/2
            bottom-[2%]
            -translate-x-1/2
            flex
            flex-col
            items-center
          "
        >
          <TechNodeIcon name="Node.js" color="#339933" />

          <span
            className="
              text-[8px]
              sm:text-[9px]
              text-[rgba(245,242,234,0.55)]
              mt-1
              font-medium
              tracking-wide
            "
          >
            Node.js
          </span>
        </motion.div>

        {/* ==========================================================
            DATA PANELS
            Decorative desktop elements.
        ========================================================== */}

        {/* Panel 1 — Analyzing */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
          className="
            absolute
            left-[10%]
            top-[18%]
            hidden
            md:flex
            flex-col
            gap-1
            p-2
            rounded-lg
            border
            border-[rgba(142,131,183,0.18)]
            bg-[rgba(8,9,11,0.65)]
            backdrop-blur-sm
            min-w-[100px]
            scale-[0.85]
            lg:scale-100
          "
        >
          <span
            className="
              text-[8px]
              text-[rgba(142,131,183,0.7)]
              font-medium
              tracking-widest
            "
          >
            ANALYSING
          </span>

          <span
            className="
              text-[9px]
              text-[rgba(245,242,234,0.85)]
              font-semibold
            "
          >
            Patterns...
          </span>

          <div className="flex gap-0.5 mt-0.5 items-end">
            {[0.3, 0.5, 0.7, 0.4].map((h, i) => (
              <div
                key={i}
                className="
                  w-1
                  bg-[rgba(142,131,183,0.4)]
                  rounded-sm
                "
                style={{
                  height: `${h * 12}px`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Panel 2 — System */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
            duration: 0.7,
          }}
          className="
            absolute
            left-[8%]
            bottom-[18%]
            hidden
            md:flex
            flex-col
            gap-1
            p-2
            rounded-lg
            border
            border-[rgba(212,149,106,0.18)]
            bg-[rgba(8,9,11,0.65)]
            backdrop-blur-sm
            min-w-[100px]
            scale-[0.85]
            lg:scale-100
          "
        >
          <span
            className="
              text-[8px]
              text-[rgba(212,149,106,0.6)]
              font-medium
              tracking-widest
            "
          >
            SYSTEM
          </span>

          <span
            className="
              text-[9px]
              text-[rgba(245,242,234,0.85)]
              font-semibold
            "
          >
            Active
          </span>

          <div className="flex items-center gap-1 mt-0.5">
            <div
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-[#D4956A]
                animate-pulse
              "
            />

            <span
              className="
                text-[7px]
                text-[rgba(212,149,106,0.5)]
              "
            >
              Real-time
            </span>
          </div>
        </motion.div>

        {/* Panel 3 — Performance */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.7,
          }}
          className="
            absolute
            right-[8%]
            top-[15%]
            hidden
            md:flex
            flex-col
            gap-1
            p-2
            rounded-lg
            border
            border-[rgba(55,118,171,0.2)]
            bg-[rgba(8,9,11,0.65)]
            backdrop-blur-sm
            min-w-[100px]
            scale-[0.85]
            lg:scale-100
          "
        >
          <span
            className="
              text-[8px]
              text-[rgba(55,118,171,0.7)]
              font-medium
              tracking-widest
            "
          >
            PERFORMANCE
          </span>

          <span
            className="
              text-[9px]
              text-[rgba(245,242,234,0.85)]
              font-semibold
            "
          >
            Optimizing
          </span>

          <div
            className="
              w-full
              h-1
              bg-[rgba(255,255,255,0.08)]
              rounded-full
              mt-0.5
              overflow-hidden
            "
          >
            <motion.div
              animate={{
                width: [
                  '40%',
                  '75%',
                  '55%',
                  '90%',
                  '40%',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                h-full
                bg-[rgba(55,118,171,0.6)]
                rounded-full
              "
            />
          </div>
        </motion.div>

        {/* Panel 4 — Data Flow */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.4,
            duration: 0.7,
          }}
          className="
            absolute
            right-[7%]
            bottom-[15%]
            hidden
            md:flex
            flex-col
            gap-1
            p-2
            rounded-lg
            border
            border-[rgba(71,162,72,0.18)]
            bg-[rgba(8,9,11,0.65)]
            backdrop-blur-sm
            min-w-[100px]
            scale-[0.85]
            lg:scale-100
          "
        >
          <span
            className="
              text-[8px]
              text-[rgba(71,162,72,0.6)]
              font-medium
              tracking-widest
            "
          >
            DATA FLOW
          </span>

          <span
            className="
              text-[9px]
              text-[rgba(245,242,234,0.85)]
              font-semibold
            "
          >
            847/s
          </span>

          <div className="flex gap-px mt-0.5 items-end h-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: [4, 10, 6, 12, 4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
                className="
                  w-1
                  bg-[rgba(71,162,72,0.5)]
                  rounded-[1px]
                "
              />
            ))}
          </div>
        </motion.div>

        {/* ==========================================================
            PARTICLES
        ========================================================== */}

        <AmbientParticle
          className="left-[12%] top-[25%]"
          size="2px"
          delay="0s"
        />

        <AmbientParticle
          className="left-[25%] top-[12%]"
          size="1px"
          delay="2s"
        />

        <AmbientParticle
          className="left-[40%] top-[30%]"
          size="2px"
          delay="4s"
        />

        <AmbientParticle
          className="left-[62%] top-[15%]"
          size="1px"
          delay="1s"
        />

        <AmbientParticle
          className="left-[78%] top-[28%]"
          size="2px"
          delay="3s"
        />

        <AmbientParticle
          className="left-[88%] top-[18%]"
          size="1px"
          delay="5s"
        />

        <AmbientParticle
          className="left-[18%] top-[65%]"
          size="1px"
          delay="3.5s"
        />

        <AmbientParticle
          className="left-[50%] top-[78%]"
          size="2px"
          delay="2.5s"
        />

        <AmbientParticle
          className="left-[72%] top-[70%]"
          size="1px"
          delay="4.5s"
        />

        <AmbientParticle
          className="left-[90%] top-[60%]"
          size="2px"
          delay="1.5s"
        />

      </div>
    </div>
  )
}

/* =============================================================
   TECH NODE ICON
============================================================= */

function TechNodeIcon({ name, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 20,
      }}
      className="
        group
        relative
        w-8
        h-8
        sm:w-9
        sm:h-9
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
      "
      style={{
        background: `radial-gradient(circle at 40% 40%, ${color}30, ${color}10)`,
        border: `1px solid ${color}50`,
        boxShadow: `0 0 10px ${color}30`,
      }}
    >
      <span
        className="
          text-[9px]
          sm:text-[10px]
          font-bold
        "
        style={{
          color,
        }}
      >
        {name === 'Node.js'
          ? 'N'
          : name.slice(0, 2)}
      </span>

      {/* Hover glow */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
        style={{
          boxShadow: `0 0 18px ${color}60`,
        }}
      />
    </motion.div>
  )
}

/* =============================================================
   AMBIENT PARTICLE
============================================================= */

function AmbientParticle({
  className = '',
  size = '2px',
  delay = '0s',
}) {
  return (
    <motion.span
      className={`
        absolute
        rounded-full
        bg-[#D4956A]
        ${className}
      `}
      style={{
        width: size,
        height: size,
        boxShadow:
          '0 0 8px rgba(212,149,106,0.5)',
      }}
      animate={{
        opacity: [0.15, 0.6, 0.15],
        y: [0, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  )
}

export default HeroVisual