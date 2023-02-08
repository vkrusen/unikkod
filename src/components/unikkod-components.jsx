import { Link } from "gatsby"
import React, { useState, useEffect } from "react"

import Navigation from "./navigation"
import NavigationHero from "./navigationhero"
import Footer from "./footer"

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

// Divider component
export function Divider() {
  return <hr className="divider" />
}

// Button component
export function Button({ type, icon, iconPlacement = "after", onClick, to, children }) {
  return (
    <button className={type + " mx-auto sm:mx-2"} onClick={onClick}>
      {icon && iconPlacement === "before" && <Icon path={icon} />}
      {to && <Link to={to}>{children}</Link> || children}
      {icon && iconPlacement === "after" && <Icon path={icon} />}
    </button>
  )
}

// Sticky call to action component
export function StickyCallToAction({ title, icon, onClick, to }) {
  return (
    <div className="sticky-call-to-action">
      <Button onClick={onClick} icon={icon} to={to}>
        {title}
      </Button>
    </div>
  )
}