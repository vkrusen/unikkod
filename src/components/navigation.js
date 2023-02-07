import React from "react"
import { Link } from "gatsby"
import { Button } from "./unikkod-components"

import Close from "../images/ArrowUpMinor.svg"

const links = [
  {
    title: "Tjänster",
    url: "services",
  },
  {
    title: "Kundcase",
    url: "cases",
  },
  {
    title: "Aktuellt",
    url: "news",
  },
]

const Navigation = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <nav>
      {/* Desktop navigation */}
      <div className="navbar__desktop">
        <div className="left">
          <Link to="/">Logo</Link>
        </div>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={`/${link.url}`} activeClassName="text-primary">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="right"></div>
      </div>

      {/* Mobile navigation */}
      <div className="navbar__mobile">
        <div className="left">
          <Link to="/">Logo</Link>
        </div>
        <div className="right">
          {!menuOpen && (
            <Button onClick={() => setMenuOpen(!menuOpen)} type="plain">Meny</Button>
          )}
        </div>
      </div>

      {/* Mobile navigation menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={`/${link.url}`} activeClassName="text-primary">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <Button onClick={() => setMenuOpen(!menuOpen)} type="plain" icon={Close} iconPlacement="after">Stäng</Button>
        </div>
      )}
    </nav>
  )
}

export default Navigation
