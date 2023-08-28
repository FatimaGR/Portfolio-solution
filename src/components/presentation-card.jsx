import profile from '../assets/profile.jpeg'
import '../styles/presentation-card.css'

function PresentationOne() {
  return(
    <div className="presentation-card-one">
      <img src={ profile } alt="profile" />
      <div>
        <div className="general-info">
          <div className="general-content">
            <h2 className="title-1">Billy Pearson</h2>
            <p className="paragraph-1">Front-end developer</p>
          </div>
          <div className="general-content">
            <div className="contact-info">
              <span className="material-symbols-outlined">
                mail
              </span>
              <p className="paragraph-4">billy@example.com</p>
            </div>
            <div className="contact-info">
              <span className="material-symbols-outlined">
                call
              </span>
              <p className="paragraph-4">(+603) 546 624 342</p>
            </div>
          </div>
        </div>
        <p className="paragraph-1">Self-motivated developer, who is willing to learn and create outstanding UI applications.</p> 
        <br />
        <p className="paragraph-1">Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
      </div>
    </div>
  )
}

function PresentationTwo() {
  return(
    <div className="presentation-card-two">
      <img src={profile} alt="" />
          <div className="general-content">
            <h2 className="title-1">Billy Pearson</h2>
            <p className="paragraph-1">Front-end developer</p>
          </div>
          <div className="general-content">
            <div className="contact-info">
              <span className="material-symbols-outlined">
                mail
              </span>
              <p className="paragraph-4">billy@example.com</p>
            </div>
            <div className="contact-info">
              <span className="material-symbols-outlined">
                call
              </span>
              <p className="paragraph-4">(+603) 546 624 342</p>
            </div>
          </div>
        <p className="paragraph-1">Self-motivated developer, who is willing to learn and create outstanding UI applications.</p> 
    </div>
  )
}

export default PresentationOne