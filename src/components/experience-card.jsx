import adidas from '../assets/adidas.jpeg'
import '../styles/experience-card.css'

const experiences = [
  {
    id: 0,
    date: 'Feb 2017 - Current',
    title: 'Front-end developer',
    description: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    image : adidas,
  },{
    id: 1,
    date: 'Aug 2016 - Feb 2018',
    title: 'Full-stack developer',
    description: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    image : adidas,
  },{
    id: 2,
    date: 'June 2015 - Aug 2016',
    title: 'Full-stack developer',
    description: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    image : adidas,
  }
]

function ExperienceCardOne() {
  return(
    <div className='experience-container-one'>
      <h2 className='title-4'>Experiences</h2>
      <br />
      <div className='experience-content'>
        {experiences.map((experience) => 
          <div key={experience.id} className='experience-card'>
            <img src={experience.image} alt={experience.title}/>
            <div className='experience-information'>
              <p className='sub-title-4'>{experience.date}</p>
              <h2 className='sub-title-2'>{experience.title}</h2>
              <p className='paragraph-2'>{experience.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ExperienceCardTwo() {
  return(
    <div className='experience-container-two'>
      <h2 className='title-4'>Experiences</h2>
      <br />
      <br />
      <div className='experience-content'>
        {experiences.map((experience) => 
          <div key={experience.id} className='experience-card'>
            <img src={experience.image} alt={experience.title}/>
            <div className='experience-information'>
              <p className='sub-title-4'>{experience.date}</p>
              <h2 className='sub-title-2'>{experience.title}</h2>
              <p className='paragraph-2'>{experience.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceCardOne