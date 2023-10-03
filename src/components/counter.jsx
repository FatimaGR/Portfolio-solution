import { useState } from 'react'
import recipe from '../assets/recipe-blog.png'
import '../styles/counter.css'

const projects = [
  {
    id: 0,
    tags: ['HTML', 'CSS', 'responsive'],
    title: 'Recipe Blog',
    description: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    image : recipe,
  },{
    id: 1,
    tags: ['CSS', 'responsive'],
    title: 'Recipe Blog',
    description: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    image : recipe,
  }
]

const filters = ['HTML', 'CSS', 'responsive']

function ProjectCounter(){
  return(
    <div className='project-counter'>
      <h2 className='title-4'>Project ({projects.length}) </h2>
    </div>
  )
}

function ProjectCounterFilter(){
  const [filteredProjects, setFilteredProjects] = useState(projects)
  
  return (
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
              <label className="sub-title-1 label-radio-btn" htmlFor="filter"> {filter}
                <input 
                className="radio-btn" 
                type="radio" 
                id={filter} 
                name="filter" 
                onChange={handleFilter}
                />
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectCounterFilter