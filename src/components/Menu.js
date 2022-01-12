import React from "react"
import { Link } from "gatsby"

import { Wrapper } from "../styles/Menu.styles"

import { useMenuQuery } from "../hooks/useMenuQuery"

const Menu = () => {
  const { menu } = useMenuQuery()

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
