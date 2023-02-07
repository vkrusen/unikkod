import * as React from "react"
import Button from "../button"

import ArrowRightMinor from "../../images/ArrowRightMinor.svg"
import backgroundImage from "../../images/Hero.svg"

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto py-28 md:py-44 px-8 space-y-6 justify-center max-w-screen-sm ">
        <h1 className="text-white text-5xl font-bold text-center">
          Headline <span>Unikkod</span>
        </h1>
        <p className="text-white mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          ultrices erat, et dictum odio. Nulla vitae tortor dictum ligula
          commodo molestie vitae maximus ex.
        </p>
        <div className="text-white flex flex-col md:flex-row justify-center">
          <Button type="primary" icon={ArrowRightMinor}>
            Få kostnadsfri offert
          </Button>
          <Button type="plain" icon={ArrowRightMinor}>
            Visa alla tjänster
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
