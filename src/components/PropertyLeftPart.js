import React from "react"

// Icons
import { HiOutlineOfficeBuilding, HiOutlineHome } from "react-icons/hi"
import {
  IoBedOutline,
  IoCarOutline,
  IoFlowerOutline,
  IoTvOutline,
} from "react-icons/io5"
import { RiTempHotLine } from "react-icons/ri"

import {
  MdKitchen,
  MdOutlineChair,
  MdOutlineElevator,
  MdStarBorder,
} from "react-icons/md"
import { BiBath } from "react-icons/bi"

// Styles
import {
  LeftPart,
  Overview,
  OverviewContainer,
  Block,
  BlockIcon,
  BlockHead,
  BlockValue,
  AboutProperty,
  PropertyVideo,
} from "../styles/PropertyLeftPart.styles"

const PropertyLeftPart = ({ data }) => {
  const { content } = data.property
  const {
    propertyType,
    bedCount,
    bathCount,
    receptionCount,
    epcRating,
    floorNo,
    furnished,
    heating,
    garden,
    kitchen,
    parking,
  } = data.property.customPropertyFields

  // Splitting bedCount
  const splitBedCount = bedCount.split(/(\d+)/)
  const splitReceptionCount = receptionCount.split(/(\d+)/)
  const splitBathCount = bathCount.split(/(\d+)/)

  const bedTextPart = splitBedCount[0]
  const bedNumPart = splitBedCount[1]

  const receptionTextPart = splitReceptionCount[0]
  const receptionNumPart = splitReceptionCount[1]

  const bathTextPart = splitBathCount[0]
  const bathNumPart = splitBathCount[1]

  return (
    <LeftPart>
      <Overview>
        <h4>Overview</h4>
        <OverviewContainer>
          <Block>
            <BlockIcon>
              {propertyType === "Flat" ? (
                <HiOutlineOfficeBuilding />
              ) : (
                <HiOutlineHome />
              )}
            </BlockIcon>
            <div>
              <BlockHead>Type:</BlockHead>
              <BlockValue>{propertyType}</BlockValue>
            </div>
          </Block>

          <Block>
            <BlockIcon>
              <IoBedOutline />
            </BlockIcon>
            <div>
              <BlockHead>{bedTextPart}</BlockHead>
              <BlockValue>{bedNumPart}</BlockValue>
            </div>
          </Block>

          <Block>
            <BlockIcon>
              <BiBath />
            </BlockIcon>
            <div>
              <BlockHead>{bathTextPart}</BlockHead>
              <BlockValue>{bathNumPart}</BlockValue>
            </div>
          </Block>

          <Block>
            <BlockIcon>
              <MdOutlineChair />
            </BlockIcon>
            <div>
              <BlockHead>{receptionTextPart}</BlockHead>
              <BlockValue>{receptionNumPart}</BlockValue>
            </div>
          </Block>

          <Block>
            <BlockIcon>
              <MdStarBorder />
            </BlockIcon>
            <div>
              <BlockHead>EPC Rating: </BlockHead>
              <BlockValue>{epcRating}</BlockValue>
            </div>
          </Block>

          {propertyType === "Flat" && (
            <Block>
              <BlockIcon>
                <MdOutlineElevator />
              </BlockIcon>
              <div>
                <BlockHead>Floor No:</BlockHead>
                <BlockValue>{floorNo}</BlockValue>
              </div>
            </Block>
          )}

          {furnished ? (
            <Block>
              <BlockIcon>
                <IoTvOutline />
              </BlockIcon>
              <div>
                <BlockHead>Furnished:</BlockHead>
                <BlockValue>Yes</BlockValue>
              </div>
            </Block>
          ) : (
            <Block>
              <BlockIcon>
                <IoTvOutline />
              </BlockIcon>
              <div>
                <BlockHead>Furnished:</BlockHead>
                <BlockValue>No</BlockValue>
              </div>
            </Block>
          )}

          {garden ? (
            <Block>
              <BlockIcon>
                <IoFlowerOutline />
              </BlockIcon>
              <div>
                <BlockHead>Garden:</BlockHead>
                <BlockValue>Yes</BlockValue>
              </div>
            </Block>
          ) : (
            <Block>
              <BlockIcon>
                <IoFlowerOutline />
              </BlockIcon>
              <div>
                <BlockHead>Garden:</BlockHead>
                <BlockValue>No</BlockValue>
              </div>
            </Block>
          )}

          <Block>
            <BlockIcon>
              <IoCarOutline />
            </BlockIcon>
            <div>
              <BlockHead>Parking:</BlockHead>
              <BlockValue>{parking}</BlockValue>
            </div>
          </Block>

          <Block>
            <BlockIcon>
              <RiTempHotLine />
            </BlockIcon>
            <div>
              <BlockHead>Heating:</BlockHead>
              <BlockValue>{heating}</BlockValue>
            </div>
          </Block>

          <Block>
            <BlockIcon>
              <MdKitchen />
            </BlockIcon>
            <div>
              <BlockHead>Kitchen:</BlockHead>
              <BlockValue>{kitchen}</BlockValue>
            </div>
          </Block>
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
        <h4>Property Video</h4>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/G99XxEDbNEs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </PropertyVideo>
    </LeftPart>
  )
}

export default PropertyLeftPart
