import tw, { styled } from "twin.macro"
import { GatsbyImage } from "gatsby-plugin-image"

export const PropertyHeader = styled.div`
  ${tw`relative`}
`
export const PropertyImage = styled(GatsbyImage)`
  height: 80vh;
  width: 100%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0) 100%
    );

    z-index: 2;
  }
  img {
    ${tw`w-full h-full`}
  }
`

export const HeaderContainer = styled.div`
  top: 65%;
  ${tw`absolute text-white z-10 container mx-auto px-8 flex justify-between items-center left-1/2 transform -translate-x-1/2`}
`
export const HeaderText = tw.div``

export const Title = styled.div`
  ${tw`flex items-center`}
  h2 {
    ${tw`text-4xl font-medium`}
  }
  span {
    ${tw`ml-8 bg-primary px-2 py-1 rounded text-sm`}
  }
`
export const HeaderInfo = styled.div`
  ${tw`flex`}
`

export const Location = styled.div`
  ${tw`flex items-center text-sm mt-3 mr-5 font-light`}
  svg {
    ${tw`mr-1`}
  }
`

export const TimeAgo = tw(Location)``

export const ViewsCount = tw(TimeAgo)``

export const Postal = tw(TimeAgo)``

export const HeaderPrice = tw.div``

export const PriceWrapper = styled.div`
  ${tw`text-4xl font-medium flex items-center `}
  div {
    ${tw`text-sm font-light`}
  }
`
export const BillsText = styled.div`
  ${tw`text-sm mt-3 font-light flex items-center`}
  svg {
    ${tw`mr-1`}
  }
`
