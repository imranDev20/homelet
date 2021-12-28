import React from "react"
import { graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import NumberFormat from "react-number-format"

import { FiMapPin, FiClock, FiEye } from "react-icons/fi"
import { HiOutlineOfficeBuilding, HiOutlineHome } from "react-icons/hi"
import { IoBedOutline } from "react-icons/io5"
import { MdLocationSearching } from "react-icons/md"
import { BsExclamationDiamond } from "react-icons/bs"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const PropertyDetails = ({ data }) => {
  console.log(data)

  const imageData = getImage(data.property.featuredImage.node.localFile)
  const { title, date, content } = data.property
  const {
    placeName,
    postalCode,
    propertyType,
    bedCount,
    price,
    propertyVideo,
  } = data.property.acf_property_fields

  return (
    <Layout>
      <Seo title={title} />
      <PropertyHeader>
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
      </PropertyHeader>
      <DetailsContainer>
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

const PropertyHeader = styled.div`
  ${tw`relative`}
`
const PropertyImage = styled(GatsbyImage)`
  height: 80vh;
  width: 100%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0) 100%
    );

    z-index: 2;
  }
  img {
    ${tw`w-full h-full`}
  }
`

const HeaderContainer = styled.div`
  top: 65%;
  ${tw`absolute text-white z-10 container mx-auto px-8 flex justify-between items-center left-1/2 transform -translate-x-1/2`}
`
const HeaderText = tw.div``

const Title = styled.div`
  ${tw`flex items-center`}
  h2 {
    ${tw`text-4xl font-medium`}
  }
  span {
    ${tw`ml-8 bg-primary px-2 py-1 rounded text-sm`}
  }
`
const HeaderInfo = styled.div`
  ${tw`flex`}
`

const Location = styled.div`
  ${tw`flex items-center text-sm mt-3 mr-5 font-light`}
  svg {
    ${tw`mr-1`}
  }
`

const TimeAgo = tw(Location)``

const ViewsCount = tw(TimeAgo)``

const Postal = tw(TimeAgo)``

const HeaderPrice = tw.div``

const PriceWrapper = styled.div`
  ${tw`text-4xl font-medium flex items-center `}
  div {
    ${tw`text-sm font-light`}
  }
`
const BillsText = styled.div`
  ${tw`text-sm mt-3 font-light flex items-center`}
  svg {
    ${tw`mr-1`}
  }
`

const DetailsContainer = styled.div`
  ${tw`container mx-auto px-8 mt-10 grid`}
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
`
const LeftPart = styled.div`
  ${tw``}
`
const Overview = styled.div`
  ${tw``}
  h4 {
    ${tw`font-semibold text-xl`}
  }
`

const OverviewContainer = styled.div`
  ${tw`grid grid-cols-4 mt-5`}
  &>div {
    ${tw`flex items-center mt-3`}

    svg {
      ${tw`text-primary mr-2 text-lg`}
    }
  }
`
const AboutProperty = styled.div`
  h4 {
    ${tw`font-semibold text-xl mt-12`}
  }
  div {
    ${tw`mt-5 leading-loose`}
  }
`

const PropertyVideo = styled.div`
  ${tw`mt-12`}
`

const RightPart = styled.div`
  ${tw` `}
`

export default PropertyDetails
