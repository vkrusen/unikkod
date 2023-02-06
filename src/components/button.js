import * as React from "react"
import Icon from "./icon"

const Button = ({ type, icon, children }) => {
  return (
    <button className={type + " mx-auto sm:mx-2"}>
      {children}
      {icon && <Icon path={icon} />}
    </button>
  )
}

export default Button
