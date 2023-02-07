import React from "react"
import backgroundImage from "../images/NavigationHero.svg"

const NavigationHero = () => {
  return (
    <div
      className="bg-cover bg-center h-24"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  )
}

export default NavigationHero
