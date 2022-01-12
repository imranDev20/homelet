import React from "react"
import { SearchBox } from "react-instantsearch-dom"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import tw, { styled } from "twin.macro"

// Styles
import { Wrapper, Holder, HeroText, Search } from "../styles/Hero.styles"

// Queries
import { useHeroQuery } from "../hooks/useHeroQuery"

const Hero = () => {
  const { hero } = useHeroQuery()

  const image = getImage(hero.customHomeFields.heroImage.localFile)
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
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
    </BackgroundImage>
  )
}

export default Hero
