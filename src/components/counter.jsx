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
    tags: ['HTML', 'CSS', 'responsive'],
    title: 'Recipe Blog',
    description: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    image : recipe,
  }
]

function ProjectCounter(){
  return(
    <div className='project-counter'>
      <h2 className='title-4'>Project ({projects.length}) </h2>
    </div>
  )
}

function ProjectCounterFilter(){
  return (
    <div>

    </div>
  )
}

export default ProjectCounter