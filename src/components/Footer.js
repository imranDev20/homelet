import React from "react"

import { FiHome } from "react-icons/fi"
import { Link } from "gatsby"
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi"
import LogoPng from "../images/Logo_HLI.png"

import {
  Wrapper,
  Container,
  Cols,
  Logo,
  About,
  ColTItle,
  Links,
  Contact,
  ContactIcon,
  ContactInfo,
  Newsletter,
  NewsletterInput,
  Copyright,
} from "../styles/Footer.styles"

import { useMenuQuery } from "../hooks/useMenuQuery"

const Footer = () => {
  const { menu } = useMenuQuery()

  return (
    <Wrapper>
      <Container>
        <Cols>
          <Link to="/">
            <Logo>
              <img src={LogoPng} alt="" />
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
              <div key={item.id}>
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
              <a href="tel:07708921000">077 0892 1000</a>
            </ContactInfo>
          </Contact>
          <Contact>
            <ContactIcon>
              <FiMail size={16} />
            </ContactIcon>
            <ContactInfo>
              <a href="mailto:hello@homelet-inn.co.uk">
                hello@homelet-inn.co.uk
              </a>
            </ContactInfo>
          </Contact>
          <Contact>
            <ContactIcon>
              <FiMapPin size={16} />
            </ContactIcon>
            <ContactInfo>
              1i, 736-740 Romford Road, Manor Park, London E12 6BT
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
