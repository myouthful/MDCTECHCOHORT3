import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import  Loader  from './Loader';
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
export default function ContactUs() {
  const[loading ,setLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer)
  }, []);
  if(loading){
    return <Loader/>
  }
  return (
    
    <motion.div
    initial={{opacity:0, y:0}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.8}}
    >
      <div className=' gap-4 px-[10%] pt-6 w-full flex flex-col items-center bg-white  h-[615px]'>
        <div className='flex flex-col  mt-3 items-center w-1239 h-[58px] mb-7 leading-snug'>
            <h1 className="text-[34px]   tracking-normal font-bold text-neutral-black mb-0 ">Contact Us</h1>
          </div>
      <div className="w-full px-[40px] flex justify-between items-center">

      {/* max-w-6xl w-full grid md:grid-cols-2 gap-10 md:max-w-[1239px] h-auto mt-10 */}
        {/* Left Section - Contact Form */}
        <div className='flex flex-col h-60 '>
          
          <p className="text-sm text-neutral mb-6">We would like to hear from you</p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Please input your email address: example@gmail.com"
              className="w-full bg-mgs p-3 rounded-md focus:outline-none"
            />
            <textarea
              placeholder="Type in your Message"
              className="w-full bg-mgs p-3  rounded-md h-[246px] focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="bg-btn-col w-[260px] h-[50px] hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section - Contact Details */}
        <div className="flex flex-col justify-center space-y-6 ml-20 text-sm text-gray-700">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-primary" />
            <span className='text-txt-mgs'>contact@Skill2Earn.co</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-primary" />
            <span className='text-txt-mgs'>+01 453-0934</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className='text-txt-mgs'>Ikeja, Lagos, Nigeria</span>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
}
