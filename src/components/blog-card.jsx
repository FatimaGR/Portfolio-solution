import '../styles/blog-card.css'
import blog from '../assets/blog.jpeg'

function BlogCardOne() {
  return(
    <div className='blog-card-one'>
      <div className='blog-information'>
        <p className='paragraph-5'>Blog</p>
        <h2 className='title-2 blog-title'>How to organize your CSS</h2>
        <p className='paragraph-2'>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>  
        <p className='paragraph-2'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
        <br />
        <a href="/">dev.to</a>
      </div>
      <img src={blog} alt="blog" />
    </div>
  )
}

function BlogCardTwo() {
  return(
    <div className='blog-card-two'>
      <div className='blog-information'>
        <div>
          <p className='paragraph-5'>Blog</p>
          <br />
          <h2 className='title-2 blog-title'>How to organize your CSS</h2>
        </div>
        <img src={blog} alt="blog" />
      </div>
        <p className='paragraph-2'>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>  
        <p className='paragraph-2'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
        <br />
        <a href="/">dev.to</a>
    </div>
  )
}

export default BlogCardOne