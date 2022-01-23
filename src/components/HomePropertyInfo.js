import React from "react"
import { Info, InfoText, InfoIcon } from "../styles/HomePropertyInfo.styles"

const HomePropertyInfo = ({ icon, infoText }) => {
  return (
    <Info>
      <InfoIcon>{icon}</InfoIcon>
      <InfoText>{infoText}</InfoText>
    </Info>
  )
}

export default HomePropertyInfo
