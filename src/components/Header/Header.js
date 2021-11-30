import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.svg"
import useMenuQuery from "../../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"
import Navigation from "../Navigation/Navigation.js"

const Header = () => {
  const data = useMenuQuery()
  const siteData = data.site.siteMetadata
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={Logo} alt={siteData.title} />
        </Link>
        <Navigation />
      </Content>
    </Wrapper>
  )
}

export default Header
