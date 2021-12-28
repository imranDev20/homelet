import { graphql } from "gatsby"
import React from "react"
import tw, { styled } from "twin.macro"

import Layout from "../components/Layout"

const PropertyDetails = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <PropertyHeader>
        {/* <img
          src={data.property.nodes.featuredImage.node.localFile.childImageSharp}
          alt="Property Image"
        /> */}
        <h2>{}</h2>
      </PropertyHeader>
    </Layout>
  )
}

export const query = graphql`
  query PropertyDetailsQuery($link: String) {
    property: allWpProperty(filter: { link: { eq: $link } }) {
      nodes {
        id
        link
        title
        date(fromNow: true)
        acf_property_fields {
          placeName
          postalCode
          propertyType
          bedCount
          price
        }
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  width: 1920
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
        }
      }
    }
  }
`

const PropertyHeader = styled.div`
  img {
    ${tw`w-full`}
  }
`

export default PropertyDetails
