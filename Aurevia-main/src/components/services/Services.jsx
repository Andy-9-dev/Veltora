import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import Heading from "../common/Heading"
import FeaturedCard from "../home/featured/FeaturedCard"
import "../home/featured/Featured.css"

const Services = () => {
  return (
    <section className="services-page">
      <Back
        eyebrow="Services"
        name="What We Offer"
        title="Comprehensive Real Estate Solutions"
        cover={img}
      />
      <div className="container" style={{ padding: "80px 24px" }}>
        <Heading
          eyebrow="Core Services"
          title="End-to-End Property Expertise"
          subtitle="From land acquisition to facility management, Veltora delivers tailored solutions at every stage of the property lifecycle."
        />
        <FeaturedCard />
      </div>
    </section>
  )
}

export default Services
