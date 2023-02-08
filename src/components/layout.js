import * as React from "react"
import Navigation from "./navigation"
import { Footer } from "./unikkod-components"

const Layout = ({ children }) => {
  return (
    <div>
      <meta name="theme-color" content="#004356" />
      <Navigation />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
