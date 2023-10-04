import { useState } from 'react'
import recipe from '../assets/recipe-blog.png'
import '../styles/projects.css'
import ProjectCard from './project-card.jsx'

let projects = [
  {
    id: 0,
    tags: ['HTML', 'CSS', 'responsive'],
    title: 'Recipe Blog',
    description: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    image : recipe,
    demo: 'https://recipe-page-fatimagr.vercel.app',
    code: 'https://github.com/FatimaGR/Recipe-page-solution',
  },{
    id: 1,
    tags: ['CSS'],
    title: 'My Gallery',
    description: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    image : recipe,
    demo: 'https://recipe-page-fatimagr.vercel.app',
    code: 'https://github.com/FatimaGR/Recipe-page-solution',
  },{
    id: 2,
    tags: ['CSS', 'responsive'],
    title: 'Checkout',
    description: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    image : recipe,
    demo: 'https://recipe-page-fatimagr.vercel.app',
    code: 'https://github.com/FatimaGR/Recipe-page-solution',
  }
]
const filters = ['HTML', 'CSS', 'responsive']

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