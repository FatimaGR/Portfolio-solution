import ctc from '../assets/ctc.jpeg'
import '../styles/experience-card.css'

const experiences = [
  {
    id: 0,
    date: 'Sept - Current',
    title: 'Programming teacher',
    description: 'Teaching programming to teenagers, utilizing dynamic platforms like NClab to practice logic, and languages like Python that are suitable for their level of knowledge.',
    image : ctc,
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

export default ExperienceCardTwo