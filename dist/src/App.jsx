import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import SkillsSection from './components/Skills/Skill'
import Project from './components/Projects/Project'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Preloader from './components/Preloader'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Preloader />
      <Header />
      <Home />
      <About />
      <SkillsSection />
      <Project />
      <Contact />
      
    </BrowserRouter>
    </>
  )
}

export default App


