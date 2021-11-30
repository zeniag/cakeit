import React from "react"
import { AboutImage, AboutWrapper } from "./About.styles"
import { useAboutQuery } from "../../hooks/useAboutQuery"

const About = () => {
  const { about } = useAboutQuery()
  const aboutImage = about.featuredImage.node.localFile.publicURL
  const aboutText = about.content
  return (
    <AboutWrapper>
      <AboutImage image={aboutImage} />
      <div className="about-text">
        <div dangerouslySetInnerHTML={{ __html: aboutText }} />
      </div>
    </AboutWrapper>
  )
}

export default About
