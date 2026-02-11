import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useRef } from "react";
function App() {
  
  const skillsRef = useRef<HTMLElement | null >(null)
  const projectsRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  return (
    <>
      <NavBar
        onSkills={() => skillsRef.current?.scrollIntoView({ block:"center",  behavior: "smooth" })}
        onProjects={() => projectsRef.current?.scrollIntoView({  behavior: "smooth" })}
        onContact={() => contactRef.current?.scrollIntoView({ block:"center",  behavior: "smooth" })}
      />
    <About/>
    <Skills ref= {skillsRef} />
    <Projects ref= {projectsRef}/>
    <Contact ref = {contactRef} />
    </>
  )
}

export default App
