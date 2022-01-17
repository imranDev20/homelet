import tw, { styled } from "twin.macro"

export const Wrapper = tw.header`h-full shadow font-primary`

export const Container = styled.div`
  ${tw`container mx-auto h-20 flex items-center px-5`}
`

export const Logo = styled.div`
  ${tw`flex items-center`}
  width: 12rem;
  img {
    ${tw`w-full object-contain`}
  }
`
