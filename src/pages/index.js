import * as React from "react"
import Hero from "../components/start/hero"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero />
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
