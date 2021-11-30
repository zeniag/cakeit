import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Hero/Hero.js"
import CTAArea from "../components/CTAArea/CTAArea.js"
import LastestBlogPost from "../components/LatestBlogPost/LatestBlogPost.js"
import Quote from "../components/Quote/Quote"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <CTAArea />
    <LastestBlogPost />
    <Quote />
  </Layout>
)

export default IndexPage
