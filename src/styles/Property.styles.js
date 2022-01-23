import tw, { styled } from "twin.macro"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.div`
  ${tw` rounded overflow-hidden `}
`

export const Type = tw.h5`text-sm text-primary mt-4 font-normal`

export const Title = tw.h4`font-medium text-gray-700 mt-2 text-lg hover:text-primary-dark transition-colors`

export const StyledImg = styled(GatsbyImage)`
  ${tw`rounded-lg w-full`}

  img {
    ${tw`w-full object-cover`}
  }
`

export const PlaceholderImg = styled(GatsbyImage)`
  img {
    ${tw`rounded-lg overflow-hidden border border-gray-200`}
  }
`

export const InfoRow = styled.div`
  ${tw`flex justify-between mt-3 `}
`

export const Price = styled.div`
  ${tw`font-normal text-lg mt-5 text-gray-700`}
`
