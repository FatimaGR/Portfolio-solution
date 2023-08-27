import profile from '../assets/profile.jpeg'
import '../styles/presentation-card.css'

function PresentationOne() {
  return(
    <div class="card-one">
      <img src={profile} alt="" />
      <div>
        <div class="general-info">
          <div class="general-content">
            <h2 class="title-1">Billy Pearson</h2>
            <p class="paragraph-1">Front-end developer</p>
          </div>
          <div class="general-content">
            <div class="contact-info">
              <span class="material-symbols-outlined">
                mail
              </span>
              <p class="paragraph-4">billy@example.com</p>
            </div>
            <div class="contact-info">
              <span class="material-symbols-outlined">
                call
              </span>
              <p class="paragraph-4">(+603) 546 624 342</p>
            </div>
          </div>
        </div>
        <p class="paragraph-1">Self-motivated developer, who is willing to learn and create outstanding UI applications.</p> 
        <br />
        <p class="paragraph-1">Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
      </div>
    </div>
  )
}

function PresentationTwo() {
  return(
    <div class="card-two">
      <img src={profile} alt="" />
          <div class="general-content">
            <h2 class="title-1">Billy Pearson</h2>
            <p class="paragraph-1">Front-end developer</p>
          </div>
          <div class="general-content">
            <div class="contact-info">
              <span class="material-symbols-outlined">
                mail
              </span>
              <p class="paragraph-4">billy@example.com</p>
            </div>
            <div class="contact-info">
              <span class="material-symbols-outlined">
                call
              </span>
              <p class="paragraph-4">(+603) 546 624 342</p>
            </div>
          </div>
        <p class="paragraph-1">Self-motivated developer, who is willing to learn and create outstanding UI applications.</p> 
    </div>
  )
}

export default PresentationOne