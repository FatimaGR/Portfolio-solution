import '../styles/project-card.css'

function ProjectOne({project}){
  return(
    <div key={project?.id} className="project-card-one">
      <img src={ project?.image } alt={project?.title} />
      <div className="project-info">
        <div className="description">
          <div className="tags">
            { project?.tags.map((tag) => <p key={tag} className="paragraph-3">#{tag}</p>) }
          </div>
          <h2 className="title-2">{project?.title}</h2>
          <p className="paragraph-2">{project?.description}</p>
        </div>
        <div className="buttons">
          <button className="button-1">Demo</button>
          <button className="button-2">Code</button>
        </div>
      </div>
    </div>
  )
}

function ProjectTwo({project}){
  return(
    <div key={project?.id} className="project-card-two">
      <img src={ project?.image } alt={project?.title} />
        <div className="tags">
          { project?.tags.map((tag) => <p key={tag} className="paragraph-3">#{tag}</p>) }
        </div>
        <h2 className="title-2">{project?.title}</h2>
        <p className="paragraph-2">{project?.description}</p>
        <div className="buttons">
          <button className="button-1"><a href={project.demo}>Demo</a></button>
          <button className="button-2"><a href={project.code}>Code</a></button>
        </div>
    </div>
  )
}

export default ProjectTwo