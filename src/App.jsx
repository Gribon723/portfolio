import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import EpiLens from './components/EpiLens'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EpiLens />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
