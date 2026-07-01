import React from "react"
import Back from "../common/Back"
import PriceCard from "../home/price/PriceCard"
import Heading from "../common/Heading"
import img from "../images/pricing.jpg"
import "../home/price/price.css"

const Pricing = () => {
  return (
    <section className="pricing-page">
      <Back
        eyebrow="Advisory"
        name="Investment Advisory"
        title="Tailored Packages for Every Investor"
        cover={img}
      />
      <div className="container" style={{ padding: "80px 24px" }}>
        <Heading
          eyebrow="Plans"
          title="Choose Your Advisory Package"
          subtitle="Expert property investment guidance designed to maximize returns for individuals and corporations."
        />
        <PriceCard />
      </div>
    </section>
  )
}

export default Pricing
