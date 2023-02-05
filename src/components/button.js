import * as React from "react"

const Button = ({type, children}) => {
  return (
    <button className={type}>
        {children}
    </button>
  )
}

export default Button
