import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

function Home() {
  return (
    <>
     <Header/> 
     <Skills/> 
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home