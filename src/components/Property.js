import React from "react"
import { Link } from "gatsby"
import NumberFormat from "react-number-format"

import { MdLocationSearching } from "react-icons/md"
import { FiMapPin, FiClock } from "react-icons/fi"
import { IoBedOutline } from "react-icons/io5"

import {
  Wrapper,
  StyledImg,
  PlaceholderImg,
  Info,
  Price,
  Type,
  Title,
} from "../styles/Property.styles"

import { usePlaceholderQuery } from "../hooks/usePlaceholderQuery"

const Property = ({ hit }) => {
  const { placeholder } = usePlaceholderQuery()

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
          <PlaceholderImg image={placeholder.childImageSharp.gatsbyImageData} />
        )}
      </Link>
      <Type>{hit.acf_property_fields.propertyType}</Type>

      <Link to={hit.link}>
        <Title>{hit.title}</Title>
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
          <IoBedOutline /> {hit.acf_property_fields.bedCount}
        </div>
        <div>
          <FiClock /> {hit.date}
        </div>
      </Info>

      <Price>
        <NumberFormat
          value={hit.acf_property_fields?.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"£"}
        />
      </Price>
    </Wrapper>
  )
}

export default Property
