import React, { useState } from "react"
import Footer from "../Footer/Footer.js"
import Hamburger from "../Hamburger/Hamburger"
import OverlayMenu from "../OverlayMenu/OverlayMenu.js"
import Header from "../Header/Header"
import { GlobalStyles, Primary } from "./Layout.styles"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleOverlayMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <GlobalStyles />
        <Hamburger handleOverlayMenu={handleOverlayMenu} />
        <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
        <Header />
        <Primary>{children}</Primary>
        <Footer />
      </div>
    </>
  )
}

export default Layout
