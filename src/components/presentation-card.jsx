import profile from '../assets/profile.jpeg'
import '../styles/presentation-card.css'

function PresentationOne() {
  return(
    <div className="presentation-card-one">
      <img src={ profile } alt="profile" />
      <div>
        <div className="general-info">
          <div className="general-content">
            <h2 className="title-1">Fatima C. Gallardo Ramirez</h2>
            <p className="paragraph-1">Front-end developer</p>
          </div>
          <div className="general-content">
            <div className="contact-info">
              <span className="material-symbols-outlined">
                mail
              </span>
              <p className="paragraph-4">fawicoma@gmail.com</p>
            </div>
            <div className="contact-info">
              <span className="material-symbols-outlined">
                call
              </span>
              <p className="paragraph-4">(+51) 974 287 519</p>
            </div>
          </div>
        </div>
        <p className="paragraph-1">I am a Full Stack Web Developer from Lima, Peru.</p> 
        <p className="paragraph-1">I consider myself creative but realistic person, and for that reason I say "Always with one eye open and the other dreaming".</p> 
        <br />
        <p className="paragraph-1">I am constantly learning about programming, and looking for new professional challenges to put my skills and knowledge into practice.</p>
        <p className="paragraph-1">My goal is to progress professionally and personally, learn about the theory and the practice, and finally be a better developer and a better person.</p>
        <br />
      </div>
    </div>
  )
}

function PresentationTwo() {
  return(
    <div className="presentation-card-two">
      <img src={profile} alt="" />
          <div className="general-content">
            <h2 className="title-1">Fátima Corina Gallardo Ramírez</h2>
            <p className="paragraph-1">Front-end developer</p>
          </div>
          <div className="general-content">
            <div className="contact-info">
              <span className="material-symbols-outlined">
                mail
              </span>
              <p className="paragraph-4">fawicoma@gmail.com</p>
            </div>
            <div className="contact-info">
              <span className="material-symbols-outlined">
                call
              </span>
              <p className="paragraph-4">(+51) 974 287 519</p>
            </div>
          </div>
        <p className="paragraph-1">Self-motivated developer, who is willing to learn and create outstanding UI applications.</p> 
    </div>
  )
}

export default PresentationOne