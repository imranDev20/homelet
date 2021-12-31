import tw, { styled } from "twin.macro"

export const Wrapper = styled.section`
  ${tw`w-full mt-8`}
`
export const Container = styled.div`
  ${tw`container mx-auto px-8`}
  .ais-Hits-list {
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); */
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
export const NoResults = styled.div`
  img {
    ${tw`mx-auto w-96`}
  }
`
