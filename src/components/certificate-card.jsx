import codeable from '../assets/codeable.png'
import cet from '../assets/cet.png'
import '../styles/certificate-card.css'

const certificates = [
  {
    id: 0,
    title: 'Jr. Full Stack Developer',
    description: 'Intensive full-stack web development education program (full-time, 6 months)',
    image : codeable,
  },{
    id: 1,
    title: 'Protagonistas del Futuro',
    description: 'A program where participants developed a mobile application with social impact, created by Chicas en Tecnologia with the support of Disney.',
    image : cet,
  }
]

function CertificateCardOne() {
  return(
    <div className='certificate-container-one'>
      <h2 className='title-4'>Certificates</h2>
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
      <h2 className='title-4'>Certificates</h2>
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

export default CertificateCardTwo