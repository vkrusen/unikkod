import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import footer from "../modules/footer"

import Navigation from "./navigation"
import NavigationHero from "./navigationhero"
import ArrowRightMinor from "../images/icons/ArrowRightMinor.svg"
import company from "../modules/company"

// Page used to wrap whole page
export function Page({ image, themeColor = "#004356", children }) {
  return (
    <div className="page">
      <meta name="theme-color" content={themeColor} />
      <Navigation />
      <main>
        {image ? <img src={image} className="h-[220px] md:h-[540px] w-full object-cover" alt="hero" /> : <NavigationHero />}
        <Container>{children}</Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

// Footer - This is configured in the footer module
export function Footer() {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer__logo">
          <Link to="/">
            Logo
          </Link>
        </div>
        <div className="footer__links">
          {footer.map((item, index) => (
            <div key={index}>
              <h4>{item.title}</h4>
              <ul>
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Button to={link.url} type="plain" icon={ArrowRightMinor}>{link.title}</Button>
                  </li>
                ))}
              </ul>
          </div>
          ))}
        </div>
      </div>
      <p className="footer__name">© {new Date().getFullYear()} {company.name}</p>
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
export function Divider({ position = "left" }) {
  console.log(position === "center" ? " mx-auto" : "")
  return <hr className={"divider" + (position === "center" ? " mx-auto" : "") } />
}

// Button component
export function Button({
  type,
  icon,
  iconPlacement = "after",
  onClick,
  to,
  children,
}) {
  return (
    <button className={type + " mx-auto sm:mx-0"} onClick={onClick}>
      {icon && iconPlacement === "before" && <Icon path={icon} />}
      {(to && <Link to={to}>{children}</Link>) || children}
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
