import React from "react"
import { company } from "../../data/Data"
import { Link } from "react-router-dom"
import "./aboutPreview.css"

const AboutPreview = () => {
  return (
    <section className="about-preview padding">
      <div className="container about-preview-grid">
        <div className="about-preview-image">
          <img src="./images/banner.png" alt="Veltora development" />
          <div className="about-badge">
            <span className="badge-year">Since {company.founded}</span>
            <span className="badge-loc">{company.headquarters}</span>
          </div>
        </div>
        <div className="about-preview-content">
          <span className="eyebrow">Who We Are</span>
          <h2>Redefining Modern Living Across Africa</h2>
          <p>{company.description}</p>
          <p>
            Veltora combines innovative architectural design, sustainable construction
            practices, and cutting-edge technology to deliver properties that meet the
            highest standards of quality, functionality, and long-term value.
          </p>
          <Link to="/about" className="btn-primary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
