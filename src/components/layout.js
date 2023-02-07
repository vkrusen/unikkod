import * as React from "react"
import Footer from "./footer"
import Navigation from "./navigation"

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
