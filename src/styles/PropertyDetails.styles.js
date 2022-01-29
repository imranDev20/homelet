import tw, { styled } from "twin.macro"

export const DetailsContainer = styled.div`
  ${tw`container mx-auto px-8 mt-10 flex flex-col-reverse lg:flex-row`}
  grid-template-columns: 3fr 1fr;
  column-gap: 2rem;
`
