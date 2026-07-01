import React from "react"
import { Link } from "react-router-dom"
import { price } from "../../data/Data"

const PriceCard = () => {
  return (
    <div className="pricing-grid mtop">
      {price.map((item, index) => (
        <div
          className={`pricing-card ${item.best ? "featured" : ""}`}
          key={index}
        >
          {item.best && <span className="pricing-badge">{item.best}</span>}
          <h3>{item.plan}</h3>
          <div className="pricing-amount">{item.price}</div>
          <p className="pricing-period">{item.ptext}</p>
          <ul className="pricing-features">
            {item.list.map((val, i) => (
              <li key={i} className={val.change === "color" ? "excluded" : ""}>
                <span className="feature-icon">{val.icon}</span>
                <span>{val.text}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className={`pricing-cta ${item.best ? "primary" : ""}`}
          >
            Get Started
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PriceCard
