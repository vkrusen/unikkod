import * as React from "react"
import Icon from "./icon"

const Button = ({ type, icon, children }) => {
  return (
    <button className={type}>
      {children}
      {icon && <Icon path={icon} />}
    </button>
  )
}

export default Button
