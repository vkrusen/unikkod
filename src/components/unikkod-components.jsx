import React, { useState, useEffect } from "react"

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

// Button
export function Button({ type, icon, to = "404", children }) {
  return (
    <button className={type + " mx-auto sm:mx-2"} onClick={navigateTo}>
      {children}
      {icon && <Icon path={icon} />}
    </button>
  )

  function navigateTo() {
    window.location.pathname = to
  }
}
