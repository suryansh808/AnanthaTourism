import { useRef } from "react"

import Hero from "../Components/Hero"
import Packages from "../Components/Packages"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import WhyChooseUs from "../Components/WhyChooseUs"
import SnanDates from "../Components/SnanDates"
import SpiritualSignificance from "../Components/SpiritualSignificance"
import MarqueeSilder from "../Components/MarqueeSilder"
import MaghMelaSchedule from "../Components/MaghMelaSchedule"



const Home = () => {
  const homeRef = useRef(null)
  const packagesRef = useRef(null)
  const destinationsRef = useRef(null)
  const contactRef = useRef(null)

    const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  
  return (
    <>
      <Header 
        onHome={() => scrollTo(homeRef)}
        onPackages={() => scrollTo(packagesRef)}
        onDestinations={() => scrollTo(destinationsRef)}
        onContact={() => scrollTo(contactRef)}
      />
       <div ref={homeRef}>
          <Hero />
       </div>
       <MarqueeSilder/>
       <div ref={packagesRef}>
          <Packages />
       </div>
        {/* <SnanDates/> */}
         <MaghMelaSchedule/>
        <SpiritualSignificance/>
        <WhyChooseUs/>
        <Footer
       onHome={() => scrollTo(homeRef)}
        onPackages={() => scrollTo(packagesRef)}
        onDestinations={() => scrollTo(destinationsRef)}
        onContact={() => scrollTo(contactRef)} 
      />
    </>
  )
}

export default Home
