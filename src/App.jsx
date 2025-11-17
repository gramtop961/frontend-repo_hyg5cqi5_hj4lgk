import Nav from './components/Nav'
import Hero from './components/Hero'
import Showreel from './components/Showreel'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />
      <Hero />
      <div id="about"><About /></div>
      <Showreel />
      <Contact />
      <footer className="bg-black/90 px-6 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Chasing the Light. All rights reserved.
      </footer>
    </div>
  )
}

export default App
