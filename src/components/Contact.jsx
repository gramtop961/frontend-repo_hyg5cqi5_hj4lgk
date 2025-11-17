import { useState } from 'react'
import Reveal from './Reveal'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form)
    try {
      setStatus('Sending...')
      // Placeholder - no backend requirement specified. In a later iteration we can wire this.
      await new Promise(r => setTimeout(r, 600))
      setStatus('Thanks — we will reach out soon.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong, please try again.')
    }
  }

  return (
    <section id="contact" className="relative bg-black px-6 py-24 text-white">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold sm:text-4xl">Start a Project</h2>
        <p className="mt-2 text-white/70">Tell us about your vision. We’ll get back within 1–2 business days.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-violet-500" />
            <input type="email" name="email" required placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-violet-500" />
          </div>
          <input name="subject" placeholder="Subject" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-violet-500" />
          <textarea name="message" required rows="5" placeholder="Message" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-violet-500" />
          <button className="rounded-full bg-white px-6 py-3 font-semibold text-black hover:bg-white/90">Send</button>
          {status && <p className="text-sm text-white/60">{status}</p>}
        </form>
      </Reveal>
    </section>
  )
}
