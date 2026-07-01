import React from "react"
import { stats } from "../../data/Data"
import "./stats.css"

const Stats = () => {
  return (
    <section className="stats-bar">
      <div className="container stats-grid">
        {stats.map((item, index) => (
          <div className="stat-item" key={index}>
            <span className="stat-num">{item.num}</span>
            <span className="stat-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
