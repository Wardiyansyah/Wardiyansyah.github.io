import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Academic from './sections/Academic'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import HMSE from './sections/HMSE'
import Journey from './sections/Journey'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <HMSE />
        <Journey />
        <Academic />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
