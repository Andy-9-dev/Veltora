import React from "react"
import { Link } from "react-router-dom"
import { company } from "../../data/Data"
import "./hero.css"

const Hero = ({ onSearch }) => {
  const [filters, setFilters] = React.useState({
    location: "",
    type: "",
    price: "",
  })

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(filters)
    const el = document.getElementById("properties")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-eyebrow">{company.tagline}</span>
          <h1>
            Premium Real Estate
            <br />
            <span className="hero-accent">Across Africa</span>
          </h1>
          <p>
            Exceptional residential, commercial, and mixed-use properties crafted with
            innovative design, sustainable practices, and lasting value.
          </p>
          <div className="hero-actions">
            <a href="#properties" className="btn-primary hero-cta">
              Explore Properties
            </a>
            <Link to="/contact" className="btn-secondary hero-cta">
              Schedule Consultation
            </Link>
          </div>
        </div>

        <form className="hero-search" onSubmit={handleSubmit}>
          <div className="search-field">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              placeholder="e.g. Victoria Island, Lagos"
              value={filters.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />
          </div>
          <div className="search-field">
            <label htmlFor="type">Property Type</label>
            <select
              id="type"
              value={filters.type}
              onChange={(e) => handleChange("type", e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Luxury Apartment">Luxury Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Commercial Office">Commercial Office</option>
              <option value="Estate Home">Estate Home</option>
              <option value="Serviced Apartment">Serviced Apartment</option>
              <option value="Mixed-Use">Mixed-Use</option>
            </select>
          </div>
          <div className="search-field">
            <label htmlFor="price">Listing</label>
            <select
              id="price"
              value={filters.price}
              onChange={(e) => handleChange("price", e.target.value)}
            >
              <option value="">All Listings</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>
          <button type="submit" className="search-btn" aria-label="Search properties">
            <i className="fa fa-search"></i>
          </button>
        </form>

        <div className="hero-stats">
          <div className="hero-stat">
            <strong>Est. {company.founded}</strong>
            <span>Founded</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>{company.headquarters}</strong>
            <span>Headquarters</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>45+ Projects</strong>
            <span>Delivered</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
