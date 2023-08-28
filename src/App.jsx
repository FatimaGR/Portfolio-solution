import { useState } from 'react'
import Presentation from './components/presentation-card.jsx'
import Projects from './components/project-card.jsx'
import Knowledge from './components/knowledge-card.jsx'
import './App.css'

function App() {

  return (
    <>
      <Presentation/>
      <br />
      <Projects/>
      <br />
      <Knowledge/>
    </>
  )
}

export default App
