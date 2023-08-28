import recipe from '../assets/recipe-blog.png'
import '../styles/blog-card.css'

function BlogOne(){
  return(
    <div class="blog-card-one">
      <img src={ recipe } alt="recipe blog" />
      <div class="blog-info">
        <div class="description">
          <div class="tags">
            <p class="paragraph-3">#HTML</p>
            <p class="paragraph-3">#CSS</p>
            <p class="paragraph-3">#responsive</p>
          </div>
          <h2 class="title-2">Recipe Blog</h2>
          <p class="paragraph-2">In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
        </div>
        <div class="buttons">
          <button class="button-1">Demo</button>
          <button class="button-2">Code</button>
        </div>
      </div>
    </div>
  )
}

function BlogTwo(){
  return(
    <div class="blog-card-two">
      <img src={ recipe } alt="recipe blog" />
        <div class="tags">
          <p class="paragraph-3">#HTML</p>
          <p class="paragraph-3">#CSS</p>
          <p class="paragraph-3">#responsive</p>
        </div>
        <h2 class="title-2">Recipe Blog</h2>
        <p class="paragraph-2">In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
        <div class="buttons">
          <button class="button-1">Demo</button>
          <button class="button-2">Code</button>
        </div>
    </div>
  )
}

export default BlogOne