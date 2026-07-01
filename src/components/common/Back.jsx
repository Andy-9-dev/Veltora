import React from "react"

const Back = ({ eyebrow, name, title, cover }) => {
  return (
    <div className="back">
      <img src={cover} alt="" />
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <span>{name}</span>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Back
