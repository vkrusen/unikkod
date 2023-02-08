import * as React from "react"
import Seo from "../../components/seo"

import { Button, Card, Divider, Page } from "../../components/unikkod-components"

import ArrowRightMinor from "../../images/ArrowRightMinor.svg"

export default function Website() {
  return (
    <Page>
      <Card>
        <h1>Webbsida</h1>
        <Divider />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          explicabo dolore ex amet odit? Itaque eveniet quibusdam nobis ea modi
          ducimus voluptates, eum ipsum nam in! Repellat omnis rerum quidem?
        </p>
      </Card>
      <Card>
        <h3>Hur är upplägget?</h3>
        <p>
          Vi delar upp processen i tre enkla steg. Det tar totalt mellan 2-4
          veckor från första steget tills att hemsidan är klar.
        </p>
        <div className="grid md:grid-cols-3 gap-8 ">
          <StepCard step={1} title="Uppstartsmöte" current>
            <p>
              Vi går igenom och hjälper dig hitta vad du behöver. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Totam explicabo
              dolore ex amet odit? Itaque eveniet quibusdam nobis ea modi
              ducimus voluptates.
            </p>
          </StepCard>
          <StepCard step={2} title="Utveckling" animate>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              explicabo dolore ex amet odit? Itaque eveniet quibusdam nobis.
            </p>
          </StepCard>
          <StepCard step={3} title="Lansering">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              explicabo dolore ex amet odit? Itaque eveniet quibusdam nobis ea
              modi ducimus voluptates, eum ipsum nam in.
            </p>
          </StepCard>
        </div>
      </Card>
      <Card>
        <h3>Använder ni WordPress?</h3>
        <p>
          Hos oss är du som väljer. Vi erbjuder att kunna välja mellan ett brett
          urval av Content managements systems (CMS). Bland annat WordPress,
          Strapi, GraphCMS och Contentful. modi ducimus voluptates, eum ipsum
          nam in! Repellat omnis rerum quidem?
        </p>
      </Card>
      <Card>
        <h3>Vad kostar det?</h3>
        <p>
          Vi utgår från en fast prislista. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Totam explicabo dolore ex amet odit?
          Itaque eveniet quibusdam nobis ea modi ducimus voluptates, eum ipsum
          nam in! Repellat omnis rerum quidem?
        </p>
        <Button type="plain" icon={ArrowRightMinor} onClick={() => console.log("Click")}>
          Se prislista
        </Button>
        <Button type="plain" icon={ArrowRightMinor} onClick={() => console.log("Click")}>
          Snacka med oss
        </Button>
      </Card>
    </Page>
  )
}

function StepCard({ step, title, current = false, animate = false, children }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 border-2 border-solid border-gray-100 rounded-lg ">
        <div className={`w-100% h-1 rounded mb-4 ${current || animate ? "bg-primary" : "bg-gray-200"} ${animate ? "animate-pulse" : null}`} />
        <h4 className={`${current || animate ? "text-primary" : "text-gray-400"} ${animate ? "animate-pulse" : null}`}>Steg {step}</h4>
        <p>{title}</p>
      </div>
      {children}
    </div>
  )
}

export const Head = () => <Seo title="Tjänster" />