import React from "react"
import { SearchBox } from "react-instantsearch-dom"

import { Wrapper, Holder, HeroText, Search } from "../styles/Hero.styles"

const Hero = () => {
  return (
    <Wrapper>
      <Holder>
        <HeroText>
          <h5>Explore</h5>
          <h2>Amazing Properties</h2>
        </HeroText>
        <Search>
          <SearchBox
            translations={{
              placeholder: "E.g. Flat with 5 beds London E213",
            }}
          />
        </Search>
      </Holder>
    </Wrapper>
  )
}

export default Hero
