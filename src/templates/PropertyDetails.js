import React from "react"
import { graphql } from "gatsby"
import tw, { styled } from "twin.macro"

// Components
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PropertyHeader from "../components/PropertyHeader"
import PropertyLeftPart from "../components/PropertyLeftPart"

const PropertyDetails = ({ data }) => {
  console.log(data)

  const { title } = data.property

  return (
    <Layout>
      <Seo title={title} />
      <PropertyHeader data={data} />
      <DetailsContainer>
        <PropertyLeftPart data={data} />
        <RightPart></RightPart>
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
      acf_property_fields {
        placeName
        postalCode
        propertyType
        bedCount
        price
        propertyVideo
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

const DetailsContainer = styled.div`
  ${tw`container mx-auto px-8 mt-10 grid`}
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
`

const RightPart = styled.div`
  ${tw` `}
`

export default PropertyDetails
