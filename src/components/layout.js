import * as React from "react"
import Navigation from "./navigation"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>
          <Navigation />
          {children}
        </main>
        <footer>© {new Date().getFullYear()} Unikkod</footer>
      </div>
    </>
  )
}

export default Layout
