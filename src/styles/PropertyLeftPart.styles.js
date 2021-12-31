import tw, { styled } from "twin.macro"

export const LeftPart = styled.div`
  ${tw``}
`
export const Overview = styled.div`
  ${tw``}
  h4 {
    ${tw`font-semibold text-xl`}
  }
`

export const OverviewContainer = styled.div`
  ${tw`grid grid-cols-4 mt-5`}
  &>div {
    ${tw`flex items-center mt-3`}

    svg {
      ${tw`text-primary mr-2 text-lg`}
    }
  }
`
export const AboutProperty = styled.div`
  h4 {
    ${tw`font-semibold text-xl mt-12`}
  }
  div {
    ${tw`mt-5 leading-loose`}
  }
`

export const PropertyVideo = styled.div`
  ${tw`mt-12`}
`
