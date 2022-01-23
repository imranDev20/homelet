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
  InfoRow,
  Price,
  Type,
  Title,
} from "../styles/Property.styles"

import { usePlaceholderQuery } from "../hooks/usePlaceholderQuery"
import PropertyInfo from "./PropertyInfo"

const Property = ({ hit }) => {
  const { placeholder } = usePlaceholderQuery()

  return (
    <Wrapper>
      <Link to={hit.uri}>
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
      <Type>{hit.customPropertyFields.propertyType}</Type>

      <Link to={hit.uri}>
        <Title>{hit.title}</Title>
      </Link>

      <InfoRow>
        <PropertyInfo
          icon={<FiMapPin />}
          infoText={hit.customPropertyFields.placeName}
        />
        <PropertyInfo
          icon={<MdLocationSearching />}
          infoText={hit.customPropertyFields.postalCode}
        />
      </InfoRow>

      <InfoRow>
        <PropertyInfo
          icon={<IoBedOutline />}
          infoText={hit.customPropertyFields.bedCount}
        />
        <PropertyInfo icon={<FiClock />} infoText={hit.date} />
      </InfoRow>

      <Price>
        <NumberFormat
          value={hit.customPropertyFields?.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"£"}
        />
      </Price>
    </Wrapper>
  )
}

export default Property
