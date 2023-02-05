import React from "react"

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
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
