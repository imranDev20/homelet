import React from "react"
import { GlobalStyles } from "twin.macro"
import tw from "twin.macro"

import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Layout

const Main = tw.main`font-primary`
