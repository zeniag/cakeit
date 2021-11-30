import { useStaticQuery, graphql } from "gatsby"

export const useLatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPostQuery {
      blogPost: allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            excerpt
            uri
          }
        }
      }
    }
  `)
  return data
}
