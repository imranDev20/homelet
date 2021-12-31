import tw, { styled } from "twin.macro"

export const Wrapper = tw.header`h-full shadow font-primary`

export const Container = styled.div`
  ${tw`container mx-auto h-20 flex items-center px-5`}
`

export const Logo = styled.div`
  ${tw`flex items-center`}
  svg {
    ${tw`text-primary mr-1 text-3xl`}
  }
  h1 {
    ${tw`text-2xl text-gray-700 font-medium`}
  }
`
