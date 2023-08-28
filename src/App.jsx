import { useState } from 'react'
import Presentation from './components/presentation-card.jsx'
import Projects from './components/project-card.jsx'
import Knowledge from './components/knowledge-card.jsx'
import Blog from './components/blog-card.jsx'
import Experience from './components/experience-card.jsx'
import './App.css'

function App() {

  return (
    <>
      <Presentation/>
      <br />
      <Projects/>
      <br />
      <Knowledge/>
      <br />
      <Blog/>
      <br />
      <Experience/>
    </>
  )
}

export default App
