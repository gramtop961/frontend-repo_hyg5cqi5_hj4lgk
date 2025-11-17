import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

// Mask-reveal wrapper for cinematic section entrances
export default function Reveal({ children, delay = 0, duration = 1.1, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({
        clipPath: 'inset(0% 0% 0% 0%)',
        opacity: 1,
        transition: { duration, ease: [0.2, 0.8, 0.2, 1], delay },
      })
    }
  }, [inView, controls, delay, duration])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 }}
      animate={controls}
      style={{ willChange: 'clip-path, opacity' }}
    >
      {children}
    </motion.div>
  )
}
