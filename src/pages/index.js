import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Hero/Hero.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
