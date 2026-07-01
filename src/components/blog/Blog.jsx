import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"

const Blog = () => {
  return (
    <section className="projects-page">
      <Back
        eyebrow="Portfolio"
        name="Our Projects"
        title="Featured Developments Across Nigeria"
        cover={img}
      />
      <div className="container" style={{ padding: "80px 24px" }}>
        <RecentCard filters={{}} />
      </div>
    </section>
  )
}

export default Blog
