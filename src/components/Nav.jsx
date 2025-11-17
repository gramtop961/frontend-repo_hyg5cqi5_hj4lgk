import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'backdrop-blur bg-black/40 ring-1 ring-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="text-sm font-semibold tracking-widest text-white/90">CHASING THE LIGHT</a>
        <nav className="hidden gap-8 md:flex">
          <a href="#work" className="text-white/80 hover:text-white">Work</a>
          <a href="#about" className="text-white/80 hover:text-white">About</a>
          <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
        </nav>
        <button onClick={() => setOpen(v => !v)} className="md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black/80 px-6 py-4 text-white md:hidden">
          <a href="#work" className="block py-2">Work</a>
          <a href="#about" className="block py-2">About</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </header>
  )
}
