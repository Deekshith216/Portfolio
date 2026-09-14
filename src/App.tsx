import BackgroundFX from './components/layout/BackgroundFX.tsx'
import Nav from './components/layout/Nav.tsx'
import Footer from './components/layout/Footer.tsx'
import Hero from './components/sections/Hero.tsx'
import About from './components/sections/About.tsx'
import Skills from './components/sections/Skills.tsx'
import Experience from './components/sections/Experience.tsx'
import Projects from './components/sections/Projects.tsx'
import Highlights from './components/sections/Highlights.tsx'
import WhatIBuild from './components/sections/WhatIBuild.tsx'
import EngineeringApproach from './components/sections/EngineeringApproach.tsx'
import Contact from './components/sections/Contact.tsx'

export default function App() {
  return (
    <>
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <WhatIBuild />
        <EngineeringApproach />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
