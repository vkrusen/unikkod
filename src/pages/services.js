import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"

import ArrowRightMinor from "../images/ArrowRightMinor.svg"
import CoWorking from "../images/CoWorking.jpg"
import Ecommerce from "../images/Ecommerce.jpg"
import Integration from "../images/Building.jpg"

const services = [
  {
    title: "Webbutveckling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut aliquam tincidunt.",
    handle: "services/website",
    image: CoWorking,
  },
  {
    title: "E-handel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut aliquam tincidunt, nunc nisl aliquam massa.",
    handle: "services/website",
    image: Ecommerce,
  },
  {
    title: "Integrationer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    handle: "services/website",
    image: Integration,
  },
]

const Services = () => (
  <Layout>
    <div className="container mx-auto py-20 px-3 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Tjänster
      </h1>
      {services.map((service, index) => (
        <div
          className="flex flex-col md:flex-row items-center justify-center mb-12"
          key={index}
        >
          <div className="w-full md:w-1/4">
            <img className="rounded" src={service.image} alt={service.title} />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="mb-4">{service.description}</p>
            <Button type="plain" icon={ArrowRightMinor} to={service.handle}>
              Läs mer
            </Button>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export const Head = () => <Seo title="Tjänster" />

export default Services
