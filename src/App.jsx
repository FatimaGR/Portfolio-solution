import { useState } from 'react'
import Presentation from './components/presentation-card.jsx'
import Blog from './components/blog-card.jsx'
import Knowledge from './components/knowledge-card.jsx'
import './App.css'

function App() {

  return (
    <>
      <Presentation/>
      <br />
      <Blog/>
      <br />
      <Knowledge/>
    </>
  )
}

export default App
