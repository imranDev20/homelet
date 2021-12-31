import React from "react"
import { getImage } from "gatsby-plugin-image"
import NumberFormat from "react-number-format"
// Icons
import { FiMapPin, FiClock, FiEye } from "react-icons/fi"
import { BsExclamationDiamond } from "react-icons/bs"
import { MdLocationSearching } from "react-icons/md"

// Styles
import {
  PropertyImage,
  HeaderContainer,
  HeaderText,
  Title,
  HeaderInfo,
  Location,
  Postal,
  TimeAgo,
  ViewsCount,
  PriceWrapper,
  BillsText,
  HeaderPrice,
} from "../styles/PropertyHeader.styles"

const PropertyHeader = ({ data }) => {
  const imageData = getImage(data.property.featuredImage.node.localFile)
  const { title, date } = data.property
  const { placeName, postalCode, propertyType, price } =
    data.property.customPropertyFields

  return (
    <>
      <PropertyImage image={imageData} alt={title} />
      <HeaderContainer>
        <HeaderText>
          <Title>
            <h2>{title}</h2>
            <span>{propertyType}</span>
          </Title>
          <HeaderInfo>
            <Location>
              <FiMapPin /> {placeName}
            </Location>
            <Postal>
              <MdLocationSearching /> {postalCode}
            </Postal>

            <TimeAgo>
              <FiClock /> {date}
            </TimeAgo>

            <ViewsCount>
              <FiEye /> 123
            </ViewsCount>
          </HeaderInfo>
        </HeaderText>

        <HeaderPrice>
          <PriceWrapper>
            <NumberFormat
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"£"}
            />
            <div>/month</div>
          </PriceWrapper>
          <BillsText>
            <BsExclamationDiamond /> All exclusive bills and tax
          </BillsText>
        </HeaderPrice>
      </HeaderContainer>
    </>
  )
}

export default PropertyHeader
