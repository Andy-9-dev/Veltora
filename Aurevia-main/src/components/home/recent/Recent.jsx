import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = ({ filters = {} }) => {
  return (
    <section className="recent padding" id="properties">
      <div className="container">
        <Heading
          eyebrow="Portfolio"
          title="Featured Developments"
          subtitle="Explore our latest residential, commercial, and mixed-use properties across Nigeria."
        />
        <RecentCard filters={filters} />
      </div>
    </section>
  )
}

export default Recent
