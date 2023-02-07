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
            <a
              className="cursor-pointer font-medium"
              onClick={() => navigateTo(`/${link.url}`)}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )

  function navigateTo(to) {
    window.location.href = to
  }
}

export default Navigation
