import { Box } from "@mui/material"
import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Skills from "./sections/Skills/Skills"

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
    </>
  )
}

export default Home
