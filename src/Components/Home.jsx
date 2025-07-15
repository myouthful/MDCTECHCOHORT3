import AutoPlayRider from "./AutoPlayRider";
import Navbar from "./Navbar";
import ContactUs from "./Contact_us";
import AboutUs from "./About";
import Footer from "./Footer";
import CTA from "./CTA"
import FAQ from "./FAQ";
import { useState, useEffect } from "react";
import Loader from "./Loader"
import Testimonial from './Testimonial'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GetStarted from "./GetStarted";
export default function Home() {

  const[loading, setLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timer)
  }, []);

  if(loading){
   return <Loader/>
  }
  return (
    
    <motion.div
    initial={{opacity:0, y: 50}}
    animate={{opacity:1, y: 0}}
    transition={{duration:0.8}}
    >
    <>
    {/*  */}
    
    <main className="overflow-hidden font-inter">
      <Navbar/>
    <section className="md:px-10 py-12  bg-sea-blue min-h-screen items-center flex justify-center p-4" >
      {/* the general container */}
    <div className="max-w-7xl   gap-10 mt-40  h-[729px] w-full flex flex-col md:flex-row items-center justify-between">
        {/* left-container */}
        <div className="max-w-xl mb-10 space-y-6  text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-black">
            Earn Today <br />
            <span className="text-primary">Skill</span> Up For Tomorrow.
          </h1>
          <p className="text-neutral text-lg">
            Find verified freelance, short-term, daily jobs around you and
            build your skills.
          </p>

          {/* Users */}
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((users, index)=>(
                <img
                key={index}
                src={`/images/img${users}.png`}
                className="w-7 h-7 rounded-full object-cover"
                />
              ))}
            </div>
            <p className="text-neutral text-sm">50K+ Active Members</p>
          </div>

          {/* btn */}
          <div className="flex flex-col md:flex-row gap-4 pt-2">
            <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600">
              Hire a Freelancer
            </button>
            <button className="hover:bg-blue-600 hover:text-white text-primary px-6 py-2 rounded-md font-medium bg-white">
              Apply as Freelancer
            </button>
          </div>
        
        </div>

        {/* bg-picture */}
        <div className="sm:mt-0 md:mt-0 w-full md:items-center flex  float-end">
          
         
          <img
            src="/images/woman.png"
            alt="Woman working"
            className="w-[890rem] max-w-md object-contain    "
          />
        </div>
      </div>

    
       </section>
       <div className="bg-primary flex flex-col justify-between items-center w-width-1440 h-[70px]    overflow-hidden">
       <AutoPlayRider/>
       </div>
       <CTA/>
       <Testimonial/>
       <GetStarted/>
        <AboutUs/>
        
        <FAQ/>
        <ContactUs/>
        <Footer/>
       </main>
    </>
    </motion.div>
  );
}


