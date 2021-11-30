import { useStaticQuery, graphql } from "gatsby"

const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                label
                title
                url
                id
              }
            }
          }
        }
      }
    }
  `)
  return data
}

export default useMenuQuery
