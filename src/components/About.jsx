import Reveal from './Reveal'

export default function About() {
  return (
    <section className="relative bg-black px-6 py-24 text-white">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">About Chasing the Light</h2>
            <p className="mt-4 text-white/70">
              We are a design-driven film and realtime team exploring the edges of motion, light, and story. From concept to delivery, we blend cinematic craft with procedural tools to produce impactful visuals and purposeful experiences.
            </p>
          </div>
          <div className="space-y-6">
            {[
              ['Direction', 'Narrative, visual language, and rhythm that move people.'],
              ['Cinematography', 'Practical lighting + modern optics for textured images.'],
              ['Realtime 3D', 'Interactive scenes, generative motion, and virtual production.'],
            ].map(([title, desc], i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
