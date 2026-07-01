import React from "react"
import Heading from "../../common/Heading"
import { awards } from "../../data/Data"
import "./awards.css"

const Awards = () => {
  return (
    <section className="awards background">
      <div className="container">
        <Heading
          eyebrow="Our Track Record"
          title="Trusted by Thousands Across Africa"
          subtitle="A proven commitment to quality, transparency, and customer satisfaction."
        />
        <div className="awards-grid mtop">
          {awards.map((val, index) => (
            <div className="award-card" key={index}>
              <div className="award-icon">{val.icon}</div>
              <h2>{val.num}</h2>
              <p>{val.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
