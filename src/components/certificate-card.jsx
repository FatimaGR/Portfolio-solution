import drawing from '../assets/drawing.jpeg'
import '../styles/certificate-card.css'

const certificates = [
  {
    id: 0,
    title: 'Gaming',
    description: 'Quisque feugiat malesuada molestie.',
    image : drawing,
  },{
    id: 1,
    title: 'Cooking',
    description: 'Quisque feugiat malesuada molestie.',
    image : drawing,
  },{
    id: 2,
    title: 'Biking',
    description: 'Quisque feugiat malesuada molestie.',
    image : drawing,
  }
]

function CertificateCardOne() {
  return(
    <div className='certificate-container-one'>
      <h2 className='title-4'>Hobbies</h2>
      <br />
      <div className='certificate-content'>
        {certificates.map((certificate) =>
          <div key={certificate.id} className='certificate-card'>
            <img src={certificate.image} alt={certificate.name}/>
            <p className='sub-title-3'>{certificate.title}</p>
            <p className='paragraph-2'>{certificate.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

function CertificateCardTwo() {
  return(
    <div className='certificate-container-two'>
      <h2 className='title-4'>Hobbies</h2>
      <br />
      <div className='certificate-content'>
        {certificates.map((certificate) =>
          <div key={certificate.id} className='certificate-card'>
            <img src={certificate.image} alt={certificate.name}/>
            <p className='sub-title-3'>{certificate.title}</p>
            <p className='paragraph-2'>{certificate.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CertificateCardOne