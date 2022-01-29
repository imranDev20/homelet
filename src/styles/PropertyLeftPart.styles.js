import tw, { styled } from "twin.macro"

export const LeftPart = styled.div`
  ${tw``}
  flex: 3;
`
export const Overview = styled.div`
  h4 {
    ${tw`font-semibold text-xl`}
  }
`

export const OverviewContainer = styled.div`
  ${tw`grid grid-cols-2 lg:grid-cols-3 mt-5`}
`

export const Block = styled.div`
  ${tw`flex items-center my-2`}
`

export const BlockIcon = styled.div`
  ${tw`p-2 border mr-4 rounded border-gray-200 shadow-sm`}
  svg {
    ${tw`text-2xl  text-primary`}
  }
`

export const BlockHead = styled.div`
  ${tw`text-gray-700 text-base font-medium mb-1`}
`

export const BlockValue = styled.div`
  ${tw`text-gray-500 text-sm font-light`}
`

export const AboutProperty = styled.div`
  h4 {
    ${tw`font-semibold text-xl mt-12 mb-5`}
  }
  div {
    ${tw` leading-loose text-gray-500`}
  }
`

export const PropertyVideo = styled.div`
  h4 {
    ${tw`font-semibold text-xl mt-12 mb-5`}
  }
  ${tw`mt-12`}
`
