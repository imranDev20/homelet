import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <Wrapper>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/about">Listings</Link>
      </div>
      <div>
        <Link to="/about">Contact</Link>
      </div>
    </Wrapper>
  )
}

export default Menu

const Wrapper = styled.div`
  ${tw`flex flex-row ml-auto `}
  div {
    ${tw`mx-4 text-gray-700 font-normal hover:text-primary hover:cursor-pointer transition-colors`};
  }
`
