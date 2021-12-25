import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { FiHome } from "react-icons/fi"
import { Link } from "gatsby"
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi"

import { useMenuQuery } from "../hooks/useMenuQuery"

const Footer = () => {
  const { menu } = useMenuQuery()

  return (
    <Wrapper>
      <Container>
        <Cols>
          <Link to="/">
            <Logo>
              <FiHome />
              <h1>Homelet</h1>
            </Logo>
          </Link>
          <About>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium error consectetur.
          </About>
        </Cols>
        <Cols>
          <ColTItle>Quick Links</ColTItle>
          <Links>
            {menu.nodes[0].menuItems.nodes.map(item => (
              <div>
                <Link to={item.path}>{item.label}</Link>
              </div>
            ))}
            <div>
              <Link to="#">Privacy Policy</Link>
            </div>
            <div>
              <Link to="#">Terms & Conditions</Link>
            </div>
          </Links>
        </Cols>
        <Cols>
          <ColTItle>Get In Touch</ColTItle>
          <Contact>
            <ContactIcon>
              <FiPhone size={16} />
            </ContactIcon>
            <ContactInfo>
              <a href="#">073 XXXX XXXX</a>
            </ContactInfo>
          </Contact>
          <Contact>
            <ContactIcon>
              <FiMail size={16} />
            </ContactIcon>
            <ContactInfo>
              <a href="#">contact@homelet-inn.co.uk</a>
            </ContactInfo>
          </Contact>
          <Contact>
            <ContactIcon>
              <FiMapPin size={16} />
            </ContactIcon>
            <ContactInfo>
              Unit 46D, Micro Business Park, 46-50 Greatorex Street, London, E1
              5NP
            </ContactInfo>
          </Contact>
        </Cols>

        <Cols>
          <ColTItle>Our Newsletter</ColTItle>
          <Newsletter>
            <p>
              Subscribe to our newsletter and we will inform you about newest
              directory and promotions
            </p>
            <NewsletterInput>
              <input type="text" placeholder="Email Address" />
              <button>
                <FiSend />
              </button>
            </NewsletterInput>
          </Newsletter>
        </Cols>
      </Container>

      <Copyright>Copyright © 2021 by Homelet Inn.</Copyright>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  ${tw`w-full px-6 bg-gray-100 mt-20`}
`
const Container = styled.div`
  ${tw`container mx-auto py-20`}
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`
const Logo = styled.div`
  ${tw`flex items-center`}
  svg {
    ${tw`mr-1 text-primary text-3xl`}
  }
  h1 {
    ${tw`text-2xl text-gray-700 font-medium`}
  }
`
const Cols = tw.div`px-6`

const About = tw.p`mt-5 text-gray-500 font-light text-sm leading-loose`

const ColTItle = tw.h3`font-semibold mb-5 text-gray-700`

const Links = styled.div`
  ${tw`text-gray-500`}
  div {
    ${tw`my-2 text-sm font-light `}
    a {
      ${tw`hover:text-primary-dark transition-colors`}
    }
  }
`
const Contact = tw.div`flex items-center my-2`

const ContactIcon = tw.div`mr-2 text-primary hover:text-primary-dark transition-colors`

const ContactInfo = styled.div`
  ${tw`text-gray-500 font-light text-sm leading-loose`}
  a {
    ${tw`hover:text-primary-dark transition-colors`}
  }
`
const Newsletter = styled.div`
  p {
    ${tw`text-gray-500 text-sm font-light leading-loose`}
  }
`

const NewsletterInput = styled.div`
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

const Copyright = tw.p`text-center text-sm pb-10 text-gray-500 font-light`
