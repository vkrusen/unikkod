import * as React from "react"

import ArrowRightMinor from "../../images/icons/ArrowRightMinor.svg"
import CoWorking from "../../images/CoWorking.jpg"
import Ecommerce from "../../images/Ecommerce.jpg"
import Integration from "../../images/Building.jpg"
import { Button, Divider } from "../unikkod-components"
import { Link } from "gatsby"

const services = [
  {
    title: "Webbutveckling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut aliquam tincidunt.",
    handle: "website",
    image: CoWorking,
  },
  {
    title: "E-handel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut aliquam tincidunt, nunc nisl aliquam massa.",
    handle: "website",
    image: Ecommerce,
  },
  {
    title: "Integrationer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    handle: "website",
    image: Integration,
  },
]

export default function Services() {
  return (
    <div className="container mx-auto py-14 px-3 md:px-0">
      <div>
        <h2>Vad kan vi hjälpa dig med?</h2>
        <Divider />
        <div className="grid md:grid-cols-3 gap-4">
          {services.map(service => (
            <div className="flex flex-col py-4 space-y-4 text-left items-start">
              <img
                className="rounded"
                src={service.image}
                alt={service.title}
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Button
                type="plain"
                icon={ArrowRightMinor}
                to={`/services/${service.handle}`}
              >
                Läs mer
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  function navigateTo(to) {
    window.location.href = to
  }
}
