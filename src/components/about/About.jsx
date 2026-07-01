import React from "react"
import Back from "../common/Back"
import { company } from "../data/Data"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <section className="about">
      <Back eyebrow="About Us" name="About Veltora" title="Who We Are" cover={img} />
      <div className="container about-grid">
        <div className="about-content">
          <span className="eyebrow">Our Story</span>
          <h2>Redefining Modern Living Since {company.founded}</h2>
          <p>{company.description}</p>
          <p>
            With a strong commitment to transparency, customer satisfaction, and strategic
            growth, Veltora has built a reputation for transforming prime locations into
            thriving communities where individuals, families, and businesses can prosper.
          </p>
          <p>
            Whether assisting first-time homeowners, seasoned investors, or multinational
            corporations seeking commercial assets, {company.name} provides tailored solutions
            designed to maximize returns while delivering outstanding living and working
            environments.
          </p>
          <div className="about-meta">
            <div className="meta-item">
              <strong>Founded</strong>
              <span>{company.founded}</span>
            </div>
            <div className="meta-item">
              <strong>Headquarters</strong>
              <span>{company.headquarters}</span>
            </div>
            <div className="meta-item">
              <strong>Tagline</strong>
              <span>{company.tagline}</span>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="./images/banner.png" alt="Veltora Properties development" />
        </div>
      </div>

      <div className="container about-mv">
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
    </section>
  )
}

export default About
