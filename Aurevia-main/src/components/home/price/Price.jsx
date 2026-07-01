import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <section className="price padding">
      <div className="container">
        <Heading
          eyebrow="Investment Advisory"
          title="Tailored Advisory Packages"
          subtitle="Expert guidance for first-time homeowners, seasoned investors, and multinational corporations."
        />
        <PriceCard />
      </div>
    </section>
  )
}

export default Price
