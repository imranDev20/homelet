import tw, { styled } from "twin.macro"

export const Wrapper = styled.section`
  height: calc(70vh - 80px);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  ${tw`w-full relative`};
`

export const Holder = styled.div`
  width: 600px;
  ${tw` flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
`

export const HeroText = styled.div`
  ${tw`text-center text-white`}
  h5 {
    ${tw`font-cursive text-3xl mb-5`}
  }
  h2 {
    ${tw`font-extrabold text-4xl mb-10`}
  }
`

export const Search = styled.div`
  .ais-SearchBox-form {
    ${tw`relative text-gray-700`}

    .ais-SearchBox-input {
      ${tw`w-full rounded outline-none pl-9 py-3 text-gray-700`}
      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
      }
    }
    .ais-SearchBox-submit {
      ${tw`absolute top-1/2 left-3 transform -translate-y-1/2 `}
      svg {
        ${tw`w-4 h-4 fill-current text-gray-700`}
      }
    }
    .ais-SearchBox-reset {
      ${tw`absolute top-1/2 right-3 transform -translate-y-1/2`}
      svg {
        ${tw`w-2.5 h-2.5 fill-current text-gray-700`}
      }
    }
  }
`
