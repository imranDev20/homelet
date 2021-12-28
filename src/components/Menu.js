import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

import { useMenuQuery } from "../hooks/useMenuQuery"

const Menu = () => {
  const { menu } = useMenuQuery()
  console.log(menu)
  return (
    <Wrapper>
      {menu.nodes[0].menuItems.nodes.map(item => (
        <div key={item.id}>
          <Link to={item.path}>{item.label}</Link>
        </div>
      ))}
    </Wrapper>
  )
}

export default Menu

const Wrapper = styled.div`
  ${tw`flex flex-row ml-auto `}
  div {
    ${tw`mx-4 text-gray-700 font-normal hover:text-primary-dark hover:cursor-pointer transition-colors`};
  }
`
