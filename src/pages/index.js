import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Hero/Hero.js"
import CTAArea from "../components/CTAArea/CTAArea.js"
import LastestBlogPost from "../components/LatestBlogPost/LatestBlogPost.js"
import Quote from "../components/Quote/Quote"
import About from "../components/About/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["cakeit", "brand", "alliance"]} />
    <Hero />
    <CTAArea />
    <LastestBlogPost />
    <Quote />
    <About />
  </Layout>
)

export default IndexPage
