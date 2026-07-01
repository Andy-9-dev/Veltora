import React from "react"

const Heading = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default Heading
