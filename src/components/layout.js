import * as React from "react"
import Navigation from "./navigation"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Unikkod</footer>
    </>
  )
}

export default Layout
