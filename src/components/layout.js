import React from "react"

import { GlobalStyles } from "twin.macro"
import { Main } from "../styles/Layout.styles"

import Footer from "./Footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
