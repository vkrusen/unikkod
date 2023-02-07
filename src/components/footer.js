import * as React from "react"

const Footer = () => {
  return (
    <div className="container mx-auto py-4 px-3 md:px-0 grid gap-8">
      <p className="text-black mt-4">© {new Date().getFullYear()} Unikkod AB</p>
    </div>
  )
}

export default Footer
