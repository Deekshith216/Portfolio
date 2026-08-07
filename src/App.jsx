import Nav from './components/layout/Nav.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Marquee from './components/sections/Marquee.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import CaseStudies from './components/sections/CaseStudies.jsx'
import OtherWork from './components/sections/OtherWork.jsx'
import Journey from './components/sections/Journey.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <CaseStudies />
        <OtherWork />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
