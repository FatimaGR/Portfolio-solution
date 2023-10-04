import Presentation from './components/presentation-card.jsx'
import Knowledge from './components/knowledge-card.jsx'
import Blog from './components/blog-card.jsx'
import Experience from './components/experience-card.jsx'
import Certificate from './components/certificate-card.jsx'
import Projects from './components/projects.jsx'
import './styles/containers.css'
import './App.css'

function App() {
  return (
    <div className='portfolio-container'>
      <div className='portfolio-content'>
        <Presentation/>
        <br /><br />
        <div className='two-columns'>
          <div className='column-one'>
            <Knowledge/>
            <br /><br />
            <Certificate/>
            <br /><br />
          </div>
          <div className='column-two'>
            <Blog/>
            <br /><br />
            <Experience/>
            <br /><br />
          </div>
        </div>
        <Projects/>
        <br /><br />
      </div>
    </div>
  )
}

export default App