import { useState, useEffect } from "react";
import Loader from "./Loader";
//eslint-disable-next-line
import {motion} from "framer-motion"

const AboutUs = () => {
  const [loading, setLoading] =useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)

    }, 3000);
    return ()=> clearTimeout(timer)
  }, []);

  if(loading){
   return  <Loader/>
  }
  return (
    <motion.div
    initial={{opacity:0, y: 50}}
    transition={{duration:0.8}}
    animate={{opacity:1, y:0}}
    >
    <div className="bg-sea-blue md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1  py-12 px-6 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-neutral-black mb-4">About Us</h1>
      <p className="text-neutral max-w-3xl mb-10">
        Skill2Earn is a digital platform built to empower young Nigerians and
        Africans by connecting them with verified freelance, short-term, and
        daily job opportunities within their communities.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-fit max-w-4xl">
        {/* Mission */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-mission text-white text-lg font-semibold py-4 px-6">
            Mission
          </div>
          <div className="p-6 text-sm text-content-txt text-left">
            To create equal access to dignified, flexible job opportunities and
            practical skill-building for young Africans — starting with the
            underserved and overlooked.
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-vission text-white text-lg font-semibold py-4 px-6">
            Our Vision
          </div>
          <div className="p-6 text-sm text-content-txt text-left">
            A continent where every young person can discover, learn, and earn
            through work that is flexible, verified, and accessible — regardless
            of background or location.
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-core text-white text-lg font-semibold py-4 px-6">
            Our Core Values
          </div>
          <div className="p-6 text-sm text-content-txt text-left">
            From verified jobs to fair pay, we’re committed to building a
            trusted space for both job seekers and businesses.
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default AboutUs;
