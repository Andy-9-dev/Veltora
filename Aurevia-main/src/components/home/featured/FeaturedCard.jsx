import React from "react"
import { services } from "../../data/Data"

const FeaturedCard = () => {
  return (
    <div className="content services-grid mtop">
      {services.map((item, index) => (
        <div className="service-box" key={index}>
          <div className="service-icon">{item.icon}</div>
          <h4>{item.name}</h4>
          <span className="service-tag">{item.total}</span>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeaturedCard
