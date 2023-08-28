import recipe from '../assets/recipe-blog.png'
import '../styles/project-card.css'

const projects = [
  {
    id: 0,
    tags: ['HTML', 'CSS', 'responsive'],
    title: 'Recipe Blog',
    description: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    image : recipe,
  }
]

function ProjectOne(){
  return(
    <>
      {projects.map((project) => 
        <div key={project.id} className="project-card-one">
          <img src={ project.image } alt={project.title} />
          <div className="project-info">
            <div className="description">
              <div className="tags">
                { project.tags.map((tag) => <p key={tag} className="paragraph-3">#{tag}</p>) }
              </div>
              <h2 className="title-2">{project.title}</h2>
              <p className="paragraph-2">{project.description}</p>
            </div>
            <div className="buttons">
              <button className="button-1">Demo</button>
              <button className="button-2">Code</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ProjectTwo(){
  return(
    <>
      {projects.map((project) => 
        <div key={project.id} className="project-card-two">
          <img src={ project.image } alt={project.title} />
            <div className="tags">
              { project.tags.map((tag) => <p key={tag} className="paragraph-3">#{tag}</p>) }
            </div>
            <h2 className="title-2">{project.title}</h2>
            <p className="paragraph-2">{project.description}</p>
            <div className="buttons">
              <button className="button-1">Demo</button>
              <button className="button-2">Code</button>
            </div>
        </div>
      )}
    </>
  )
}

export default ProjectOne