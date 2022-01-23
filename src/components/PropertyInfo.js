import React from "react"
import { Info, InfoText, InfoIcon } from "../styles/PropertyInfo.styles"

const PropertyInfo = ({ icon, infoText }) => {
  return (
    <Info>
      <InfoIcon>{icon}</InfoIcon>
      <InfoText>{infoText}</InfoText>
    </Info>
  )
}

export default PropertyInfo
