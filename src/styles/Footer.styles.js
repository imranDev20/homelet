import tw, { styled } from "twin.macro"

export const Wrapper = styled.footer`
  ${tw`w-full px-6 bg-gray-100 mt-20`}
`
export const Container = styled.div`
  ${tw`container mx-auto py-20`}
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`
export const Logo = styled.div`
  ${tw`flex items-center`}
  width: 12rem;
`
export const Cols = tw.div`px-6`

export const About = tw.p`mt-5 text-gray-500 font-light text-sm leading-loose`

export const ColTItle = tw.h3`font-semibold mb-5 text-gray-700`

export const Links = styled.div`
  ${tw`text-gray-500`}
  div {
    ${tw`my-2 text-sm font-light `}
    a {
      ${tw`hover:text-primary-dark transition-colors`}
    }
  }
`
export const Contact = tw.div`flex items-center my-2`

export const ContactIcon = tw.div`mr-2 text-primary hover:text-primary-dark transition-colors`

export const ContactInfo = styled.div`
  ${tw`text-gray-500 font-light text-sm leading-loose`}
  a {
    ${tw`hover:text-primary-dark transition-colors`}
  }
`
export const Newsletter = styled.div`
  p {
    ${tw`text-gray-500 text-sm font-light leading-loose`}
  }
`

export const NewsletterInput = styled.div`
  ${tw`relative mt-5`}
  input {
    ${tw`rounded w-full  p-3 outline-none focus:ring-1 ring-primary ring-opacity-50 shadow-sm placeholder:font-light`}
  }
  button {
    ${tw`hover:bg-primary-dark h-full w-12 absolute right-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center rounded`}
    svg {
      ${tw`text-gray-500`}
    }
    &:hover {
      svg {
        color: white;
      }
    }
  }
`

export const Copyright = tw.p`text-center text-sm pb-10 text-gray-500 font-light`
