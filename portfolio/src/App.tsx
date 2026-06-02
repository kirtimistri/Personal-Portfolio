
import Hero from './components/Hero'
import About from './components/About'
import PersonalProjects from './components/PersonalProjects'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Activities from './components/Activities'
import { Activity } from 'react'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SpaceBackground from './components/SpaceBackground'

function App() {
  return (
    <>
      <Hero />
      <Activities/>
      <Navbar />
      <Projects />
      <About />
      <PersonalProjects />
      <SpaceBackground />
     
      <Journey />
      <Contact />
    </>
  )
}

export default App
