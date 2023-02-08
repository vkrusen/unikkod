import * as React from "react"
import { Button } from "../unikkod-components"

import ArrowRightMinor from "../../images/icons/ArrowRightMinor.svg"
import backgroundImage from "../../images/Hero.svg"

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto py-28 md:py-44 px-8 space-y-6 justify-center max-w-screen-sm ">
        <h1 className="text-white font-bold text-center">
          Bry dig inte om timpriser - Välj Unikkod's <span>fasta priser</span>
        </h1>
        <p className="text-white mt-4 text-center">
          Bred erfarenhet och personlig service till ett fast pris. Vårt
          svenska team kodar och designar allt inhouse för en unik och anpassad
          hemsida.
        </p>
        <div className="text-white flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Button type="primary" icon={ArrowRightMinor}>
            Se vår prislista
          </Button>
          <Button type="plain" icon={ArrowRightMinor} to="services">
            Visa alla tjänster
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
