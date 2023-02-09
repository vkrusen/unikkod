import * as React from "react"

import { Button, Divider } from "../unikkod-components"

import Comfornette from "../../images/Comfornette.jpg"
import Icon from "../../images/icons/ArrowRightMinor.svg"
import Dropdown from "../../images/icons/DropdownMinor.svg"

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
  const paragraphs = [
    "På Unikkod är vi stolta över våra framgångsrika projekt och kundfall. En av våra mest imponerande kunder är Comfornette, som vi hade glädjen att samarbeta med för att ta deras online-närvaro till nästa nivå.",
    "Vi arbetade nära tillsammans med Comfornette för att skapa en komplett e-handelslösning som möter deras specifika behov och målgrupp. Vi såg till att designa en hemsida som reflekterar deras varumärke på ett professionellt sätt och samtidigt tillgodoser kundens användarvänlighet.",
    "Men det var inte bara designen som vi tog hand om. Vi också utvecklade avancerade lösningar som gjorde det möjligt för Comfornette att effektivt hantera sin butik på nätet. Resultatet var en livaktig e-handelsplattform som gav Comfornette en konkurrenskraftig fördel på nätet.",
    "Med detta projekt är vi stolta över att ha bidragit till Comfornettes framgång på nätet och över de fantastiska resultat som vi har uppnått tillsammans.",
  ]

  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 h-fit md:h-[620px]">
      <div className="space-y-4 md:w-1/2 md:pr-10">
        <TruncateParagraphs paragraphs={paragraphs} />
        <Button to="/case/comfornette" type="secondary" icon={Icon}>
          Läs mer om case
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

function TruncateParagraphs({ paragraphs = null }) {
  const [isReadMore, setIsReadMore] = React.useState(false)

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  const paragraphMarkup = paragraphs.map((paragraph, index) => {
    if (index < 2 || isReadMore) {
      return <p key={index}>{paragraph}</p>
    } else {
      return null
    }
  })

  return (
    <>
      {paragraphMarkup}
      <Button onClick={toggleReadMore} type="plain" icon={!isReadMore ? Dropdown : null}>
        {!isReadMore ? "Visa mer" : ""}
      </Button>
    </>
  )
}
