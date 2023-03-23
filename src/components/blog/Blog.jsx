import React from "react"
import BlogCard from "./BlogCard"
import "./blog.css"

export const Blog = () => {
  return (
    <>
      <section className='blog padding'>
      <div class="heading center">
      
      <h1><span>My Blogs </span></h1>
  </div>
        <div className='container grid2'>
          
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
