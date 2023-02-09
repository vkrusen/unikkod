import * as React from "react"

import { Button, Divider } from "../unikkod-components"

import Comfornette from "../../images/Comfornette.jpg"
import Icon from "../../images/icons/ArrowRightMinor.svg"

export default function Case() {
  return (
    <div className="container mx-auto py-14 px-3 md:px-0">
      <div>
        <SubHeadline />
        <h2>Hur vi hjälpte Comfornette</h2>
        <Divider />
        <ScreenshotCard screenshot={Comfornette} alt="Comfornette" />
      </div>
    </div>
  )
}

function SubHeadline() {
  return (
    <div className="bg-primary rounded-full px-2 py-0 w-fit my-4">
      <p className="text-white">Kundcase</p>
    </div>
  )
}

function ScreenshotCard({ screenshot, alt }) {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 h-fit md:h-[620px]">
      <div className="space-y-4 md:w-1/2 md:pr-10">
        <p>
          På Unikkod är vi stolta över våra framgångsrika projekt och kundfall.
          En av våra mest imponerande kunder är Comfornette, som vi hade glädjen
          att samarbeta med för att ta deras online-närvaro till nästa nivå.
        </p>
        <p>
          Vi arbetade nära tillsammans med Comfornette för att skapa en komplett
          e-handelslösning som möter deras specifika behov och målgrupp. Vi såg
          till att designa en hemsida som reflekterar deras varumärke på ett
          professionellt sätt och samtidigt tillgodoser kundens
          användarvänlighet.
        </p>
        <p>
          Med detta projekt är vi stolta över att ha bidragit till Comfornettes
          framgång på nätet och över de fantastiska resultaten vi har uppnått
          tillsammans.
        </p>
        <Button to="/case/comfornette" type="secondary" icon={Icon}>
          Läs mer
        </Button>
      </div>
      <div className="w-full md:w-1/2 static md:absolute md:right-0">
        <img
          className="border-2 border-gray-100 rounded-lg md:rounded-r-none md:border-r-0 md:object-left object-contain md:object-cover h-auto md:h-[580px] md:ml-auto"
          src={screenshot}
          alt={alt}
        />
      </div>
    </div>
  )
}
