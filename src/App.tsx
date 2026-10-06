import { useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
// import Academic from './sections/Academic'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
// import HMSE from './sections/HMSE'
import Journey from './sections/Journey'
import Projects from './sections/Projects'
import Publications from './sections/Publications'
import Skills from './sections/Skills'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('section, footer')
    els.forEach((el) => el.classList.add('reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <HMSE /> */}
        <Journey />
        {/* <Academic /> */}
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
