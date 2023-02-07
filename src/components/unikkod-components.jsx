import { Link } from "gatsby"
import React, { useState, useEffect } from "react"

import Footer from "./footer"
import Navigation from "./navigation"
import NavigationHero from "./navigationhero"

// Page used to wrap whole page
export function Page({ children }) {
  return (
    <div className="page">
      <meta name="theme-color" content="#004356" />
      <Navigation />
      <main>
        <NavigationHero />
        <Container>{children}</Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

// Container used to wrap whole page
export function Container({ children }) {
  return <div className="container-layout">{children}</div>
}

// Card used to wrap content
export function Card({ children }) {
  return <div className="card">{children}</div>
}

// Icon
export function Icon({ path }) {
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    fetch(path)
      .then(response => response.text())
      .then(svg => {
        setIcon(svg.replace(/fill="[^"]+"/g, 'fill="currentColor"'))
      })
  }, [path])

  return (
    <>
      {icon ? (
        <div className="icon" dangerouslySetInnerHTML={{ __html: icon }} />
      ) : null}
    </>
  )
}

export function Button({ type, icon, onClick, to, children }) {
  return (
    <button className={type + " mx-auto sm:mx-2"} onClick={onClick}>
      {to && <Link to={to}>{children}</Link> || children}
      {icon && <Icon path={icon} />}
    </button>
  )
}
