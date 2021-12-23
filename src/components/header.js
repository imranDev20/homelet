import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { FiHome } from "react-icons/fi"

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

const Wrapper = tw.header`h-full shadow font-primary`

const Container = styled.div`
  ${tw`container mx-auto h-20 flex items-center px-5`}
`

const Logo = styled.div`
  ${tw`flex items-center`}
  svg {
    ${tw`text-primary mr-1 text-3xl`}
  }
  h1 {
    ${tw`text-2xl text-gray-700 font-medium`}
  }
`
