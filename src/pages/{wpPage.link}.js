import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
// Components
import Layout from "../components/Layout/Layout"
import PageHero from "../components/PageHero/PageHero"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import PageSidebar from "../components/PageSidebar/PageSidebar"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

const PageContent = styled.article`
  margin-top: 20px;
`

const PageTemplate = ({ data }) => {
  const dataContent = data.wpPage
  const featuredImage = dataContent.featuredImage
  const pageHero =
    dataContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData
  const parent = dataContent.wpParent
  const child = dataContent.wpChildren
  // console.log(parent)
  return (
    <Layout>
      {featuredImage && <PageHero img={pageHero} />}
      <Wrapper>
        <BreadCrumb parent={parent && parent.node} />
        <ContentWrapper>
          <PageSidebar
            parentChildren={parent && parent.node.wpChildren.nodes}
            currentPage={dataContent}
            parent={parent && parent.node.title}
          >
            {child}
          </PageSidebar>
          <PageContent>
            <h1 dangerouslySetInnerHTML={{ __html: dataContent.title }} />
            <div dangerouslySetInnerHTML={{ __html: dataContent.content }} />
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      status
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            uri
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  uri
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`
