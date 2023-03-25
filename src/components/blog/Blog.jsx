import React from "react"
import BlogCard from "./BlogCard"
import "./blog.css"

export const Blog = () => {
  return (
    <>
      <section className='blog padding'>
      <div class="heading_bottom">
              <h2>My blogs </h2>
            </div>
        <div className='container grid2'>
          
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
