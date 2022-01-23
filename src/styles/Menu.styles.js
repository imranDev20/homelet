import tw, { styled } from "twin.macro"

export const Wrapper = styled.div`
  ${tw`md:flex flex-row ml-auto hidden`}
  div {
    ${tw`mx-4 text-gray-700 font-normal hover:text-primary-dark hover:cursor-pointer transition-colors`};
  }
`
