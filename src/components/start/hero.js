import * as React from "react"
import Button from "../button"
import Stack from "../stack"

import ArrowRightMinor from "../../images/Icons/ArrowRightMinor.svg"
import backgroundImage from "../../images/Hero.svg"

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto py-48 px-8 space-y-6 justify-center max-w-screen-sm ">
        <h1 className="text-white text-5xl font-bold text-center">
          Headline <span>Unikkod</span>
        </h1>
        <p className="text-white mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          ultrices erat, et dictum odio. Nulla vitae tortor dictum ligula
          commodo molestie vitae maximus ex.
        </p>
        <Stack vertical={false} spacing="loose">
          <Button type="primary" icon={ArrowRightMinor}>
            Få kostnadsfri offert
          </Button>
          <Button type="plain" icon={ArrowRightMinor}>
            Visa alla tjänster
          </Button>
        </Stack>
      </div>
    </section>
  )
}

export default Hero
