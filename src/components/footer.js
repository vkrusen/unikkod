import * as React from "react"

const Footer = () => {
  return (
    <section>
      <div className="py-2 px-8">
        <p className="text-black mt-4">
          © {new Date().getFullYear()} Unikkod AB
        </p>
      </div>
    </section>
  )
}

export default Footer
