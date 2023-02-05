import * as React from "react"
import Button from "./button"
import Stack from "./stack"

const Hero = () => {
  return (
    <section className="section__hero">
      <h1 className="center-align">Headline</h1>
      <p className="center-align">Subheadline</p>
      <Stack vertical={false} spacing="normal">
        <Button type="primary">Få kostnadsfri offert</Button>
        <Button type="secondary">Få kostnadsfri offert</Button>
      </Stack>
    </section>
  )
}

export default Hero
