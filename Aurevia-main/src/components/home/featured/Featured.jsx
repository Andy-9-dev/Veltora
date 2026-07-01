import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <section className="featured background">
      <div className="container">
        <Heading
          eyebrow="What We Do"
          title="Our Core Services"
          subtitle="Comprehensive real estate solutions for homeowners, investors, and corporations."
        />
        <FeaturedCard />
      </div>
    </section>
  )
}

export default Featured
