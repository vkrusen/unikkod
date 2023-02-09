import * as React from "react"

import ArrowRightMinor from "../../images/icons/ArrowRightMinor.svg"
import services from "../../modules/services"
import { Button, Divider } from "../unikkod-components"


export default function Services() {
  return (
    <div className="container mx-auto py-14 px-3 md:px-0">
      <div>
        <h2>Vi har lösningarna - Vad kan vi hjälpa dig med?</h2>
        <Divider />
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col py-4 space-y-4 text-left items-start">
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
                to={`${service.handle}`}
              >
                Läs mer
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
