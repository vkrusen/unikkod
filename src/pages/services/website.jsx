import * as React from "react"
import Button from "../../components/button"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import ArrowRightMinor from "../../images/ArrowRightMinor.svg"
import backgroundImage from "../../images/NavigationHero.svg"

export default function Website() {
  return (
    <Layout>
      <div
        className="bg-cover bg-center h-20 "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="container mx-auto py-14 px-3 md:px-0 grid gap-8">
        <div className="grid gap-0">
          <Button type="plain" icon={ArrowRightMinor} to="/services">
            Andra tjänster
          </Button>
          <h1>Webbsida</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            explicabo dolore ex amet odit? Itaque eveniet quibusdam nobis ea
            modi ducimus voluptates, eum ipsum nam in! Repellat omnis rerum
            quidem?
          </p>
        </div>
        <div className="grid gap-4">
          <h2>Hur är upplägget?</h2>
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
        </div>
        <div className="grid gap-4">
          <h2>Använder ni WordPress?</h2>
          <p>
            Hos oss är du som väljer. Vi erbjuder att kunna välja mellan ett
            brett urval av Content managements systems (CMS). Bland annat
            WordPress, Strapi, GraphCMS och Contentful. modi ducimus voluptates,
            eum ipsum nam in! Repellat omnis rerum quidem?
          </p>
        </div>
        <div className="grid gap-4">
          <h2>Vad kostar det?</h2>
          <p>
            Vi utgår från en fast prislista. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Totam explicabo dolore ex amet odit?
            Itaque eveniet quibusdam nobis ea modi ducimus voluptates, eum ipsum
            nam in! Repellat omnis rerum quidem?
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Tjänster" />

function StepCard({ step, title, current = false, animate = false, children }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 border-2 border-solid border-gray-300 rounded">
        {current ? (
          <div className={"w-100% h-1 rounded mb-4 bg-primary"} />
        ) : (
          <div
            className={`w-100% h-1 rounded mb-4 ${
              animate ? "bg-primary animate-pulse" : "bg-gray-200"
            }`}
          />
        )}
        {current ? (
          <h4 className="text-primary">Steg {step}</h4>
        ) : (
          <h4 className="text-gray-400">Steg {step}</h4>
        )}
        <p>{title}</p>
      </div>
      {children}
    </div>
  )
}
