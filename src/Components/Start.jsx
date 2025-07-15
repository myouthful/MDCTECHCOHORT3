import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import introImage from '../assets/getStarted.jpg';
import Loader from './Loader'
//eslint-disable-next-line
import {motion} from 'framer-motion'
const GetStart = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('freelancer');

  const handleContinue = () => {
    navigate('/signup');
  };

 const[loading, setLoading] = useState(true);
 useEffect(()=>{
  const timer = setTimeout(()=>{
    setLoading(false);
  }, 2000);
  return ()=> clearTimeout(timer)
 }, []);

 if(loading){
  return <Loader/>
 }
  return (
    <motion.div
    initial ={{opacity:0, y: 50}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.8}}
    >
      {/* w-10 h-10 */}
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* Left Panel */}
      <div className="w-full md:w-[calc(100%-720px)] flex flex-col justify-start px-[100px] pt-[54px] pb-12">
        {/* Logo & Title */}
        <div className="flex items-center space-x-2 mb-10">
          <img src={logo} alt="Logo" className=" w-[44px] h-[40px]" />
          <div>
            <h1 className="font-extrabold text-sm text-primary leading-none">Skill2Earn</h1>
            <p className="text-neutral font-bold text-xs">Where skills meet opportunity</p>
          </div>
        </div>

        {/* Headline + Subtext */}
        <div className="mt-[38px] max-w-[543px]">
          <h2 className="text-3xl font-bold text-[#3E75C3] mb-4">Get Started</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Create your Skill2Earn account to explore jobs, build in-demand skills,
            work as a freelancer, or hire top talent all in one place.
          </p>
        </div>

        {/* Role Selection */}
        <div className="mt-[80px] w-full max-w-[518px] space-y-6">
          <button
            onClick={() => setSelectedRole('freelancer')}
            className={`w-full py-3 rounded-md border text-sm font-medium transition ${
              selectedRole === 'freelancer'
                ? 'bg-[#3E75C3] text-white border-[#3E75C3]'
                : 'bg-white text-[#3E75C3] border-[#3E75C3]'
            }`}
          >
            I'm a Freelancer
          </button>

          <div className="text-center text-gray-500 font-semibold text-sm">OR</div>

          <button
            onClick={() => setSelectedRole('business')}
            className={`w-full py-3 rounded-md border text-sm font-medium transition ${
              selectedRole === 'business'
                ? 'bg-[#3E75C3] text-white border-[#3E75C3]'
                : 'bg-white text-[#3E75C3] border-[#3E75C3]'
            }`}
          >
            I'm a Business Owner
          </button>

          <button
            onClick={handleContinue}
            className="w-full bg-[#3E75C3] text-white py-3 rounded-md hover:bg-[#2f5ea2] transition"
          >
            Continue
          </button>

          <p className="text-sm text-gray-600 text-center pt-2">
            Already have an account?{' '}
            <a href="/signin" className="text-[#3E75C3] font-medium hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:block md:w-[720px] h-screen">
        <img
          src={introImage}
          alt="Intro Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </motion.div>
  );
};

export default GetStart;