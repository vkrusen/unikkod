import * as React from "react"
import Hero from "../components/start/hero"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
