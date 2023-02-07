import * as React from "react"

import { Page } from "../components/unikkod-components"
import Seo from "../components/seo"

const cases = [
  {
    title: "Comfornette",
    description: "",
    link: "https://comfornette.se/",
    image: "",
  },
  {
    title: "CopyNinja",
    description: "",
    link: "https://apps.shopify.com/copyninja",
    image: "",
  },
]

const Cases = () => (
  <Page>
    <h1>Kundcase</h1>
  </Page>
)

export const Head = () => <Seo title="Kundcase" />

export default Cases
