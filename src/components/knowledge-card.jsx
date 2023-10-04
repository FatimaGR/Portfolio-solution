import '../styles/knowledge-card.css'

const items = [
  { name: 'javascript', width: '60%' },
  { name: 'react', width: '50%' },
  { name: 'HTML', width: '70%' },
  { name: 'CSS', width: '70%' },
  { name: 'vue', width: '20%' },
]

function KnowledgeOne() {
  return(
    <div className="knoledge-card-one">
      <h2 className="title-3">Front end</h2>
      <br />
      <ul>
        { items.map((item) => 
          <li key={item.name} className='item-container'>
            <p className="paragraph-3 capitalized">{item.name}</p>
            <div className='container-level'>
              <div className='item-level' style={{maxWidth: item.width}}></div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

function KnowledgeTwo() {
  return(
    <div className="knoledge-card-two">
      <h2 className="title-3">Front end</h2>
      <br />
      <ul>
        { items.map((item) => 
          <li key={item.name} className='item-container'>
            <p className="paragraph-3 capitalized">{item.name}</p>
            <div className='container-level'>
              <div className='item-level' style={{maxWidth: item.width}}></div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default KnowledgeTwo