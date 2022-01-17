import React from "react"
import { Link } from "gatsby"

import { FiHome } from "react-icons/fi"
import LogoPng from "../images/Logo_HLI.png"

import { Wrapper, Container, Logo } from "../styles/Header.styles"

import Menu from "./Menu"

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Logo>
            <img src={LogoPng} alt="" />
          </Logo>
        </Link>
        <Menu />
      </Container>
    </Wrapper>
  )
}

export default Header
