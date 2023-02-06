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
    <nav className="flex items-center justify-center p-4 text-white">
      <ul className="flex">
        {links.map((link, index) => (
          <li key={index} className="mx-4">
            <a href={link.url} className="font-medium">{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
