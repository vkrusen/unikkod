import * as React from "react"
import Button from "./button"

import ArrowRightMinor from "../images/ArrowRightMinor.svg"
import CoWorking from "../images/CoWorking.jpg"
import Ecommerce from "../images/Ecommerce.jpg"
import Integration from "../images/Building.jpg"

const services = [
  {
    title: "Webbutveckling",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut aliquam tincidunt.",
    handle: "service",
    image: CoWorking,
  },
  {
    title: "E-handel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut aliquam tincidunt, nunc nisl aliquam massa.",
    handle: "service",
    image: Ecommerce,
  },
  {
    title: "Integrationer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    handle: "service",
    image: Integration,
  },
]

export default function Example() {
  return (
    <div className="container mx-auto py-14 px-3 md:px-0">
      <div>
        <h2>Vad kan vi hjälpa dig med?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map(service => (
            <div className="flex flex-col py-4 items-center space-y-4">
              <img className="rounded" src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Button type="plain" icon={ArrowRightMinor}>Läs mer</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
