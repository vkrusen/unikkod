import * as React from "react"
import Footer from "./footer"
import Navigation from "./navigation"

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
