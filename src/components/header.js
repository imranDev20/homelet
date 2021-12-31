import React from "react"
import { Link } from "gatsby"

import { FiHome } from "react-icons/fi"

import { Wrapper, Container, Logo } from "../styles/Header.styles"

import Menu from "./Menu"

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Logo>
            <FiHome />
            <h1>Homelet</h1>
          </Logo>
        </Link>
        <Menu />
      </Container>
    </Wrapper>
  )
}

export default Header
