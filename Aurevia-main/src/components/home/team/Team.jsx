import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
  return (
    <section className="team background">
      <div className="container">
        <Heading
          eyebrow="Leadership"
          title="Meet Our Expert Team"
          subtitle="Seasoned professionals dedicated to delivering exceptional real estate outcomes."
        />
        <div className="team-grid mtop">
          {team.map((val, index) => (
            <div className="team-card" key={index}>
              <div className="team-img">
                <img src={val.cover} alt={val.name} />
              </div>
              <div className="team-info">
                <h4>{val.name}</h4>
                <p className="team-role">{val.role}</p>
                <p className="team-address">
                  <i className="fa fa-location-dot"></i> {val.address}
                </p>
                <span className="team-listings">{val.list} Active Listings</span>
                <ul className="team-social">
                  {val.icon.map((icon, i) => (
                    <li key={i}>
                      <a href="#!" aria-label="Social link">
                        {icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
