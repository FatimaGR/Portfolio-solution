import { useState } from 'react'
import recipe from '../assets/recipe-blog.png'
import gallery from '../assets/gallery.png'
import checkout from '../assets/checkout.png'
import '../styles/projects.css'
import ProjectCard from './project-card.jsx'

let projects = [
  {
    id: 0,
    tags: ['HTML', 'CSS', 'responsive'],
    title: 'Recipe Blog',
    description: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io.',
    image : recipe,
    demo: 'https://recipe-page-fatimagr.vercel.app',
    code: 'https://github.com/FatimaGR/Recipe-page-solution',
  },{
    id: 1,
    tags: ['HTML', 'CSS', 'grid'],
    title: 'My Gallery',
    description: 'In this project, I work with HTML, CSS and Grid to create a static page . The design is from devchallenge.io.',
    image : gallery,
    demo: 'https://my-gallery-solution-fatimagr.vercel.app',
    code: 'https://github.com/FatimaGR/My-gallery-solution',
  },{
    id: 2,
    tags: ['HTML', 'CSS', 'javascript', 'responsive'],
    title: 'Checkout',
    description: 'In this project, I work with HTML, CSS and JavaScript to create a responsive page . The design is from devchallenge.io.',
    image : checkout,
    demo: 'https://checkout-page-solution-fatimagr.vercel.app',
    code: 'https://github.com/FatimaGR/Checkout-page-solution',
  }
]
const filters = ['HTML', 'CSS', 'responsive', 'grid', 'javascript']

function ProjectCounterFilter(){
  const [filteredProjects, setFilteredProjects] = useState(projects)
  
  return (
    <>
    <div className='project-counter'>
      <h2 className='title-4'>Project ({projects.length}) </h2>
      <div className='filters'>
        { filters.map((filter) => {

          let projectsFilter = projects.filter(project => project.tags.includes(filter) == true)
          function handleFilter() {
            setFilteredProjects(projectsFilter)
          }

          return(
            <div key={filter}>
              <label className="sub-title-1 label-radio-btn" htmlFor={filter}> {filter}
                <input className="radio-btn" type="radio" id={filter} name="filter" onChange={handleFilter}/>
              </label>
            </div>
          )
        })}
      </div>
    </div>
    <br />
    <div className='projects-container'>
      {filteredProjects.map((project) => {
        return(
          <ProjectCard key={project.id} project={project}/>
        )
      })}
    </div>
    </>
  )
}

export default ProjectCounterFilter