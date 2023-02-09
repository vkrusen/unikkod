import * as React from "react"
import Hero from "../components/start/hero"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Services from "../components/start/services"
import Case from "../components/start/case"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Services />
    <Case />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
