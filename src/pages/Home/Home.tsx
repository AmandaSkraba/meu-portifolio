import { Box } from "@mui/material"
import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Skills from "./sections/Skills/Skills"
import Projects from "./sections/Projects/Projects"
import Footer from "../../components/Footer/Footer"

const Home = () => {

  return (
    <>
      <NavBar />
      <Box id="hero">
        <Hero />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="skills">
        <Skills />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Footer />
    </>
  )
}

export default Home
