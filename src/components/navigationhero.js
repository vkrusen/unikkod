import React from "react"
import backgroundImage from "../images/NavigationHero.svg"

const NavigationHero = () => {
  return (
    <div
      className="bg-cover bg-center h-20 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  )
}

export default NavigationHero
