import React from "react"

// Icons
import { HiOutlineOfficeBuilding, HiOutlineHome } from "react-icons/hi"
import { IoBedOutline } from "react-icons/io5"
import { MdLocationSearching } from "react-icons/md"

// Styles
import {
  LeftPart,
  Overview,
  OverviewContainer,
  AboutProperty,
  PropertyVideo,
} from "../styles/PropertyLeftPart.styles"

const PropertyLeftPart = ({ data }) => {
  const { content } = data.property
  const { postalCode, propertyType, bedCount } =
    data.property.acf_property_fields

  return (
    <LeftPart>
      <Overview>
        <h4>Overview</h4>
        <OverviewContainer>
          <div>
            {propertyType === "Flat" ? (
              <HiOutlineOfficeBuilding />
            ) : (
              <HiOutlineHome />
            )}
            <div>Type: {propertyType}</div>
          </div>
          <div>
            <IoBedOutline />
            {bedCount}
          </div>
          <div>
            <MdLocationSearching /> Postal Code: {postalCode}
          </div>
        </OverviewContainer>
      </Overview>

      <AboutProperty>
        <h4>About this property</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </AboutProperty>
      <PropertyVideo>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/G99XxEDbNEs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </PropertyVideo>
    </LeftPart>
  )
}

export default PropertyLeftPart
