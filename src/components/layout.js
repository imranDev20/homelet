import React from "react"
import { GlobalStyles } from "twin.macro"
import tw from "twin.macro"
import Footer from "./Footer"

import Header from "./Header"

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

const Main = tw.main`font-primary text-gray-700`
