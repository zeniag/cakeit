import React from "react"
import { Wrapper } from "./LatesBlogPost.styles.js"
import { useLatestBlogPost } from "../../hooks/useLatestBlogPost.js"
import { Link } from "gatsby"

const LastestBlogPost = () => {
  const { blogPost } = useLatestBlogPost()
  const latestPost = blogPost.edges[0].node
  return (
    <Wrapper>
      <h1>Latest Blog Post</h1>
      <h4>{latestPost.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: latestPost.excerpt }} />
      <Link to={`/blog${latestPost.uri}`}>Read More</Link>
    </Wrapper>
  )
}

export default LastestBlogPost
