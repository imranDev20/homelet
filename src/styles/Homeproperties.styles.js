import tw, { styled } from "twin.macro"

export const Wrapper = styled.section`
  ${tw`w-full mt-8`}
`
export const Container = styled.div`
  ${tw`container mx-auto px-8`}
  .ais-Hits-list {
    ${tw`grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2   gap-10`}
  }
`
export const NoResults = styled.div`
  img {
    ${tw`mx-auto w-96`}
  }
`
