import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"

import {
  ContentWrapper,
  Wrapper,
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
} from "./archive.styles"

const archiveTemplate = () => {
  return <Layout>Archive</Layout>
}

export default archiveTemplate
