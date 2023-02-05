import * as React from "react"
import Button from "./button"
import Stack from "./stack"

import ArrowRightMinor from "../images/Icons/ArrowRightMinor.svg"

const Hero = () => {
  return (
    <section className="section__hero">
      <div className="section__wrapper">
        <h1 className="center-align">Headline <span>Unikkod</span></h1>
        <p className="center-align">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          ultrices erat, et dictum odio. Nulla vitae tortor dictum ligula
          commodo molestie vitae maximus ex.
        </p>
        <Stack vertical={false} spacing="loose">
          <Button type="primary" icon={ArrowRightMinor}>
            Få kostnadsfri offert
          </Button>
          <Button type="secondary" icon={ArrowRightMinor}>
            Visa alla tjänster
          </Button>
        </Stack>
      </div>
    </section>
  )
}

export default Hero
