import React from "react"

import { FiHome } from "react-icons/fi"
import { Link } from "gatsby"
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi"

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
              <a href="tel:073 XXXX XXXX">073 XXXX XXXX</a>
            </ContactInfo>
          </Contact>
          <Contact>
            <ContactIcon>
              <FiMail size={16} />
            </ContactIcon>
            <ContactInfo>
              <a href="mailto:contact@homelet-inn.co.uk">
                contact@homelet-inn.co.uk
              </a>
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
