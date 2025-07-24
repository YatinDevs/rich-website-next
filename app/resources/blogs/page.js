import Blogs from '@/includes/Blog'
import Breadcrumb from '@/includes/Breadscrumb'
import React from 'react'

const Blog = () => {
 
  return (
    <>
    <Breadcrumb page={"Blogs"}/>
    <Blogs/>
    </>
  )
}

export default Blog