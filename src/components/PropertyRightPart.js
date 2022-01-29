import React from "react"
import tw, { styled } from "twin.macro"
import { FaPhoneAlt } from "react-icons/fa"

const PropertyRightPart = () => {
  return (
    <Wrapper>
      <TopWrapper>
        <CallArea>
          <a href="tel:07708921000">
            <FaPhoneAlt /> Call Us
          </a>
        </CallArea>
        <p>
          <span>or</span>
        </p>
        <MessageArea>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="3"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Email Us" />
        </MessageArea>
      </TopWrapper>
    </Wrapper>
  )
}

export default PropertyRightPart

const Wrapper = styled.div`
  ${tw`relative mb-10`}
  flex: 1;
  p {
    ${tw`text-center text-gray-700 my-3 overflow-hidden`}
  }
  span {
    position: relative;
    display: inline-block;
  }
  span::before,
  span::after {
    content: "";
    position: absolute;
    top: 50%;
    ${tw` border-primary border`}
    width: 100vw;
    margin: 0 20px;
  }
  span::before {
    right: 100%;
  }
  span::after {
    left: 100%;
  }
`

const TopWrapper = styled.div`
  ${tw`rounded shadow-md py-10 px-5 sticky top-0 left-0`}
`

const CallArea = styled.div`
  a {
    ${tw`flex items-center justify-center rounded bg-primary text-white py-3`}
  }
  svg {
    ${tw`mr-2`}
  }
`

const MessageArea = styled.div`
  input {
    ${tw`w-full border border-gray-200 my-2 rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary`}
  }
  textarea {
    ${tw`w-full border my-2 rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary`}
  }
  ${tw``}
`
