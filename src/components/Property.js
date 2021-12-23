import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, Placeholder } from "gatsby-plugin-image"
import tw, { styled } from "twin.macro"

import { MdLocationSearching } from "react-icons/md"
import { FiMapPin } from "react-icons/fi"
import { IoBedOutline } from "react-icons/io5"
import { FiClock } from "react-icons/fi"

import { usePlaceholderQuery } from "../hooks/usePlaceholderQuery"

const Property = ({ hit }) => {
  const { placeHolderImg } = usePlaceholderQuery()

  return (
    <Wrapper>
      <Link to={hit.link}>
        {hit.featuredImage ? (
          <StyledImg
            image={
              hit.featuredImage.node.localFile.childImageSharp.gatsbyImageData
            }
            alt={hit.title}
          />
        ) : (
          <PlaceholderImg
            image={placeHolderImg.localFile.childImageSharp.gatsbyImageData}
          />
        )}
      </Link>
      <h5 className="type">{hit.acf_property_fields.propertyType}</h5>

      <Link to={hit.link}>
        <h4 className="title">{hit.title}</h4>
      </Link>

      <Info>
        <div>
          <FiMapPin /> {hit.acf_property_fields.placeName}
        </div>
        <div>
          <MdLocationSearching /> {hit.acf_property_fields.postalCode}
        </div>
      </Info>

      <Info>
        <div>
          <IoBedOutline /> {hit.acf_property_fields.bedCount} beds
        </div>
        <div>
          <FiClock /> {hit.date}
        </div>
      </Info>

      <Price>£{hit.acf_property_fields.price}</Price>
    </Wrapper>
  )
}

export default Property

const Wrapper = styled.div`
  ${tw`flex flex-col p-4 rounded overflow-hidden`}
  .type {
    ${tw`text-sm text-primary mt-4 font-normal`}
  }
  .title {
    ${tw`font-medium text-gray-700 mt-2 text-lg`}
  }
`

const StyledImg = styled(GatsbyImage)`
  img {
    ${tw`rounded-lg overflow-hidden `}
  }
`

const PlaceholderImg = styled(GatsbyImage)`
  img {
    ${tw`rounded-lg overflow-hidden border border-gray-200`}
  }
`

const Info = styled.div`
  ${tw`flex justify-between mt-3`}
  div {
    ${tw`flex items-center text-gray-700 font-light text-sm`}
    svg {
      ${tw`text-primary mr-1`}
    }
  }
`

const Price = styled.div`
  ${tw`font-light text-lg mt-5`}
`
