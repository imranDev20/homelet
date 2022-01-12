import React from "react"
import { graphql } from "gatsby"
import tw, { styled } from "twin.macro"

// Components
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PropertyHeader from "../components/PropertyHeader"
import PropertyLeftPart from "../components/PropertyLeftPart"
import PropertyRightPart from "../components/PropertyRightPart"

// Styles
import { DetailsContainer } from "../styles/PropertyDetails.styles"

const PropertyDetails = ({ data }) => {
  console.log(data)

  const { title } = data.property

  return (
    <Layout>
      <Seo title={title} />
      <PropertyHeader data={data} />
      <DetailsContainer>
        <PropertyLeftPart data={data} />
        <PropertyRightPart />
      </DetailsContainer>
    </Layout>
  )
}

export const query = graphql`
  query PropertyDetailsQuery($link: String) {
    property: wpProperty(link: { eq: $link }) {
      id
      link
      title
      date(fromNow: true)
      content
      customPropertyFields {
        propertyVideo
        bathCount
        receptionCount
        bedCount
        epcRating
        floorNo
        furnished
        heating
        garden
        kitchen
        parking
        placeName
        postalCode
        price
        propertyType
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                width: 1920
                transformOptions: { cropFocus: CENTER }
                webpOptions: { quality: 85 }
              )
            }
          }
        }
      }
    }
  }
`

export default PropertyDetails
