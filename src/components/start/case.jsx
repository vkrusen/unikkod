import * as React from "react"

import { Divider } from "../unikkod-components"

import Comfornette from "../../images/Comfornette.jpg"

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
    <div className="flex flex-col md:flex-row gap-4 h-fit md:h-[620px]">
      <div className="md:w-1/3">
        <p>Lorem ipsum</p>
      </div>
      <div className="w-full md:w-2/3 static md:absolute md:right-0">
        <img
          className="border-2 border-gray-100 rounded-lg md:rounded-r-none md:border-r-0 md:object-left object-contain md:object-cover h-auto md:h-[580px] md:ml-auto"
          src={screenshot}
          alt={alt}
        />
      </div>
    </div>
  )
}
