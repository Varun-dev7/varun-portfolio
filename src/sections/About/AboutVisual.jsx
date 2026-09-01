import { motion } from 'framer-motion'
import Detailvideo from '../../assets/videos/Detailvideo.mp4'

/**
 * AboutVisual
 * Portfolio visual with cinematic background video.
 */
function AboutVisual() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          bg-black
          border
          border-[var(--color-border)]
          shadow-2xl
        "
      >

        {/* VIDEO */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">

          <video
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
            src={Detailvideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />

          {/* Dark Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-black/15
              pointer-events-none
            "
          />

          {/* Cinematic Gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-transparent
              to-black/10
              pointer-events-none
            "
          />

        </div>

        {/* PROFILE INFO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative p-6 bg-black"
        >

          {/* Name */}
          <h3
            className="
              text-2xl
              font-bold
              text-white
              tracking-tight
            "
          >
            Varun Gupta
          </h3>

          {/* Role */}
          <p
            className="
              mt-1
              text-sm
              text-white/60
            "
          >
            Full Stack Developer
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">

            {[
              'React.js',
              'ASP.NET Core',
              'C#',
              'AI / RAG',
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-3
                  py-1.5
                  text-xs
                  text-white/80
                  bg-white/5
                  backdrop-blur-md
                  border
                  border-white/10
                  rounded-full
                "
              >
                {tech}
              </span>
            ))}

          </div>

        </motion.div>

        {/* Top Accent */}
        <div
          className="
            absolute
            top-0
            left-0
            right-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[var(--color-accent)]
            to-transparent
            z-20
          "
        />

        {/* Bottom Accent */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[var(--color-accent)]
            to-transparent
            z-20
          "
        />

      </motion.div>

      {/* Decorative Square */}
      <motion.div
        initial={{ opacity: 0, rotate: -8 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="
          absolute
          -bottom-6
          -right-6
          w-24
          h-24
          border
          border-[var(--color-accent)]/20
          rounded-2xl
          -z-10
        "
      />

      {/* Decorative Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="
          absolute
          -top-6
          -left-6
          w-16
          h-16
          border
          border-[var(--color-border)]
          rounded-full
          -z-10
        "
      />

    </div>
  )
}

export default AboutVisual