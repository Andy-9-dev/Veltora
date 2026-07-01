import React from "react"
import { company } from "../../data/Data"
import "./missionVision.css"

const MissionVision = () => {
  return (
    <section className="mission-vision background">
      <div className="container">
        <div className="heading">
          <span className="eyebrow">Our Purpose</span>
          <h1>Mission & Vision</h1>
          <p>Driving excellence in real estate development across Africa.</p>
        </div>
        <div className="mv-grid">
          <div className="mv-card">
            <div className="mv-icon">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h3>Our Mission</h3>
            <p>{company.mission}</p>
          </div>
          <div className="mv-card">
            <div className="mv-icon">
              <i className="fa-solid fa-eye"></i>
            </div>
            <h3>Our Vision</h3>
            <p>{company.vision}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
