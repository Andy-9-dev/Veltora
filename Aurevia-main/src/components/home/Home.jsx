import React, { useState } from "react"
import Hero from "./hero/Hero"
import Stats from "./stats/Stats"
import AboutPreview from "./aboutPreview/AboutPreview"
import Featured from "./featured/Featured"
import Recent from "./recent/Recent"
import MissionVision from "./missionVision/MissionVision"
import WhyChoose from "./whyChoose/WhyChoose"
import Awards from "./awards/Awards"
import Location from "./location/Location"
import Team from "./team/Team"
import Price from "./price/Price"

const Home = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    type: "",
    price: "",
  })

  return (
    <>
      <Hero onSearch={setSearchFilters} />
      <Stats />
      <AboutPreview />
      <Featured />
      <Recent filters={searchFilters} />
      <MissionVision />
      <WhyChoose />
      <Awards />
      <Location />
      <Team />
      <Price />
    </>
  )
}

export default Home
