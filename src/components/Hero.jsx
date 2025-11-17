import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0"> 
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{background:'radial-gradient(600px 300px at 80% 10%, rgba(120, 119, 198, 0.25), transparent)'}} />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 sm:pt-32 md:pt-40">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest text-white/80 backdrop-blur"
        >
          CHASING THE LIGHT • CREATIVE STUDIO
        </motion.span>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-4xl font-[800] leading-[1.1] sm:text-6xl md:text-7xl"
        >
          Cinematic stories
          <br className="hidden sm:block" />
          in motion & light.
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-6 max-w-xl text-white/80"
        >
          We craft immersive visuals for brands, music, and tech — blending practical cinematography with realtime 3D to chase the feeling.
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href="#work" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 opacity-70 blur transition group-hover:opacity-100" />
            <span className="relative z-10 rounded-full bg-black px-6 py-3 text-white ring-1 ring-white/10">View Work</span>
          </a>
          <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10">Start a Project</a>
        </motion.div>
      </div>

      {/* Bottom vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />
    </section>
  )
}
