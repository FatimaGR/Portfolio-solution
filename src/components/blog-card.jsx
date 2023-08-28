import recipe from '../assets/recipe-blog.png'
import '../styles/blog-card.css'

function BlogOne(){
  return(
    <div className="blog-card-one">
      <img src={ recipe } alt="recipe blog" />
      <div className="blog-info">
        <div className="description">
          <div className="tags">
            <p className="paragraph-3">#HTML</p>
            <p className="paragraph-3">#CSS</p>
            <p className="paragraph-3">#responsive</p>
          </div>
          <h2 className="title-2">Recipe Blog</h2>
          <p className="paragraph-2">In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
        </div>
        <div className="buttons">
          <button className="button-1">Demo</button>
          <button className="button-2">Code</button>
        </div>
      </div>
    </div>
  )
}

function BlogTwo(){
  return(
    <div className="blog-card-two">
      <img src={ recipe } alt="recipe blog" />
        <div className="tags">
          <p className="paragraph-3">#HTML</p>
          <p className="paragraph-3">#CSS</p>
          <p className="paragraph-3">#responsive</p>
        </div>
        <h2 className="title-2">Recipe Blog</h2>
        <p className="paragraph-2">In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
        <div className="buttons">
          <button className="button-1">Demo</button>
          <button className="button-2">Code</button>
        </div>
    </div>
  )
}

export default BlogOne