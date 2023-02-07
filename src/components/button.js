import * as React from "react"
import Icon from "./icon"

const Button = ({ type, icon, to = "404", children }) => {
  return (
    <button className={type + " mx-auto sm:mx-2"} onClick={navigateTo}>
      {children}
      {icon && <Icon path={icon} />}
    </button>
  )

  // Naigate to a new page
  function navigateTo() {
    window.location.pathname = to
  }
}

export default Button
