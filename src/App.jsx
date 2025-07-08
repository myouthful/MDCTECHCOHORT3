import CTA from "./Components/CTA"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import HeroFooter from "./Components/hero_footer"
import Testimonial from "./Components/Testimonial"
import TestimonialCard from "./Components/TestimonialCard"

function App() {
  return (
   <>
    <main className="overflow-hidden">
      <Header/>
      <section className=" min-h-screen bg-hero-bg w-width-1440 h-height-729 top-top-90 items-center flex  ">
        <Hero/>
        
      </section>
      {/* hero footer */}
      <div className="bg-hero-footer-bg w-1437  h-height-89 top-top-819 ">
      <HeroFooter/>
      </div>
      
        {/* CTA content goes here */}
        <section className="  flex justify-center items-center w-width-1440 h-636 top-908 left--1px bg-white">
         <CTA/>
        </section>
        <section className="">
          <Testimonial/>
          {/* <TestimonialCard/> */}
        </section>
    </main>
   </>
  )
}

export default App
