import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <section className="location padding">
      <div className="container">
        <Heading
          eyebrow="Markets"
          title="Explore by Location"
          subtitle="Prime developments across Nigeria's fastest-growing urban corridors."
        />
        <div className="location-grid mtop">
          {location.map((item) => (
            <div className="location-card" key={item.id}>
              <img src={item.cover} alt={item.name} />
              <div className="location-overlay">
                <h5>{item.name}</h5>
                <div className="location-tags">
                  <span>{item.Villas}</span>
                  <span>{item.Apartments}</span>
                  <span>{item.Offices}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Location
