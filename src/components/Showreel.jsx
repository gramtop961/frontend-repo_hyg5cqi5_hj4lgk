import { motion } from 'framer-motion'
import Reveal from './Reveal'

const shots = [
  { title: 'Neon Drift', tag: 'Automotive', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Astral Echoes', tag: 'Music Video', img: 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Carbon Silk', tag: 'Product', img: 'https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?q=80&w=1600&auto=format&fit=crop' },
]

export default function Showreel() {
  return (
    <section id="work" className="relative bg-black px-6 py-24 text-white">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Selected Work</h2>
            <p className="mt-2 max-w-xl text-white/60">A few frames from recent projects across brands, music, and product.
            </p>
          </div>
          <motion.a whileHover={{ x: 4 }} href="#contact" className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur md:inline-block">Get the full reel →</motion.a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img src={s.img} alt={s.title} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-xs uppercase tracking-widest text-white/60">{s.tag}</span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
