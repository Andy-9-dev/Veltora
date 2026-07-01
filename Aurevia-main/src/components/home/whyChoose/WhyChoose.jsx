import React from "react"
import { whyChoose } from "../../data/Data"
import "./whyChoose.css"

const WhyChoose = () => {
  return (
    <section className="why-choose padding">
      <div className="container">
        <div className="heading">
          <span className="eyebrow">Why Veltora</span>
          <h1>Built on Excellence, Driven by Innovation</h1>
          <p>
            We combine architectural excellence with sustainable practices and transparent
            processes to deliver properties of lasting value.
          </p>
        </div>
        <div className="why-grid">
          {whyChoose.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
