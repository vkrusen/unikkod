import * as React from "react"
import Hero from "../components/start/hero"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Example from "../components/Example"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Example />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
