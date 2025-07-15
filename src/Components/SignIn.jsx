import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaGoogle, FaFacebookF, FaApple, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
 import logo from '../assets/logo.jpg';
import bgImage from '../assets/image-sign-in.png';
import Loader from './Loader'
//eslint-disable-next-line
import { motion } from 'framer-motion';

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = data => {
    toast.success("Logged in!");
    console.log(data);
  };
  
  const[loading, setLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
       setLoading(false)
      return ()=> clearTimeout(timer)
    }, 3000);
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
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="w-2/5 min-h-screen bg-white flex flex-col justify-center px-10 py-12">
      <div className="flex items-center space-x-2 mb-10">
          <img src={logo} alt="Logo" className=" w-[44px] h-[40px]" />
          <div>
            <h1 className="font-extrabold text-sm text-primary leading-none">Skill2Earn</h1>
            <p className="text-neutral font-bold text-xs">Where skills meet opportunity</p>
          </div>
        </div>
        {/* <img src={logo} alt="Skill2Earn Logo" className="w-16 h-16 space-x-2 mb-6 self-center" /> */}
        <h2 className="text-3xl font-bold text-black mb-2 text-center">Hello, Welcome Back</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-6">
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Type here"
              {...register("email", { required: "Email is required" })}
              className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E75C3]"
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Type here"
              {...register("password", { required: "Password is required" })}
              className="w-full pl-4 pr-10 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E75C3]"
            />
            <div
              className="absolute top-3.5 right-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && (
              <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Keep me logged in */}
          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" id="remember" />
            <label htmlFor="remember" className="text-gray-700">
              Keep me logged in
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#3E75C3] hover:bg-[#3361A3] text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Log in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-3 text-sm text-gray-500">Or Sign In With</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <FaGoogle className="text-gray-600 hover:text-[#3361A3] cursor-pointer" size={24} />
          <FaFacebookF className="text-gray-600 hover:text-[#3361A3] cursor-pointer" size={24} />
          <FaApple className="text-gray-600 hover:text-[#3361A3] cursor-pointer" size={24} />
        </div>

        {/* Sign Up */}
        <p className="text-center text-sm text-gray-700">
          Don’t have an account yet?{" "}
          <a href="/signup" className="text-[#3361A3] font-medium hover:underline">
            Register
          </a>
        </p>
      </div>

      {/* Right Background Image */}
      <div
        className="w-3/5 min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm" />
      </div>
    </div>
    </motion.div>
  );
};

export default SignIn;