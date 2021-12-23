import React from "react"
import tw, { styled } from "twin.macro"

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div></div>
      </Container>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  ${tw`w-full`}
`
const Container = styled.div`
  ${tw`container mx-auto`}
`
