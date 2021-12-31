import tw, { styled } from "twin.macro"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = tw.div`flex flex-col p-4 rounded overflow-hidden`

export const Type = tw.h5`text-sm text-primary mt-4 font-normal`

export const Title = tw.h4`font-medium text-gray-700 mt-2 text-lg`

export const StyledImg = styled(GatsbyImage)`
  img {
    ${tw`rounded-lg overflow-hidden`}
  }
`

export const PlaceholderImg = styled(GatsbyImage)`
  img {
    ${tw`rounded-lg overflow-hidden border border-gray-200`}
  }
`

export const Info = styled.div`
  ${tw`flex justify-between mt-3`}
  div {
    ${tw`flex items-center text-gray-700 font-light text-sm`}
    svg {
      ${tw`text-primary mr-1`}
    }
  }
`

export const Price = styled.div`
  ${tw`font-normal text-lg mt-5 text-gray-700`}
`
