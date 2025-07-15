import {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import sideImage from '../assets/img.jpg';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Loader from './Loader'
//eslint-disable-next-line
import { motion } from 'framer-motion';

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    toast.success("Account created!");
    console.log(data);
    navigate('/login');
  };

  const[loading, setLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    }, 2000);
    return ()=> clearTimeout(timer);
  }, []);

  if(loading){
    return <Loader/>
  }

  return (
    <motion.div
    initial={{opacity:0, y:50}}
    animate = {{opacity:1, y:0}}
    transition={{duration:0.8}}
    >
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Section: Form Area */}
      <div className="md:w-1/2 flex flex-col justify-center px-10 py-12">
        <div className="max-w-md w-full mx-auto">
          {/* Top Logo and Text */}
          <div className="flex items-center mb-6 space-x-3">
            <img src={logo} alt="Logo" className="w-10 space-x-3" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Skill2Earn</h1>
              <p className="text-sm font-bold text-neutral -mt-1">Where skills meet opportunity</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">Create an Account</h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", { required: "Required" })}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-purple-400"
                />
                {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName.message}</p>}
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", { required: "Required" })}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none  focus:ring-purple-400"
                />
                {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName.message}</p>}
              </div>
            </div>

            {/* Country Selector */}
            <div className="relative">
              <select
                defaultValue="Nigeria"
                {...register("country", { required: "Required" })}
                className="w-full px-4 py-3 border rounded-md appearance-none focus:outline-none focus:ring-purple-400"
              >
                <option value="Nigeria">🇳🇬 Nigeria</option>
                <option value="Ghana">🇬🇭 Ghana</option>
                <option value="Kenya">🇰🇪 Kenya</option>
              </select>
              <IoIosArrowDown className="absolute top-4 right-4 text-gray-500 pointer-events-none" />
              {errors.country && <p className="text-red-600 text-sm">{errors.country.message}</p>}
            </div>

            {/* Email and Password */}
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Required" })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-purple-400"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Required" })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-purple-400"
            />
            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}

            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                validate: val => val === watch('password') || "Passwords do not match"
              })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-purple-400"
            />
            {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>}

            {/* Checkbox */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                {...register("terms", { required: true })}
                className="mt-1"
              />
              <p className="text-sm text-gray-600">
                Yes, I understand and agree to the Skill2Earn{' '}
                <a href="#" className="text-primary font-medium hover:underline">Terms of Service</a>,{' '}
                <a href="#" className="text-primary font-medium hover:underline">User Agreement</a>, and{' '}
                <a href="#" className="text-primary font-medium hover:underline">Privacy Policy</a>.
              </p>
            </div>
            {errors.terms && <p className="text-red-600 text-sm">You must agree before submitting.</p>}

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-[#2b2a66] transition"
            >
              Create Account
            </button>
          </form>

          {/* OR Sign Up with */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-3">Or Sign Up with</p>
            <div className="flex justify-center space-x-4">
              <button className="p-3 border rounded-full hover:bg-gray-100 transition">
                <FaGoogle className="text-xl text-[#EA4335]" />
              </button>
              <button className="p-3 border rounded-full hover:bg-gray-100 transition">
                <FaApple className="text-xl text-black" />
              </button>
              <button className="p-3 border rounded-full hover:bg-gray-100 transition">
                <FaFacebookF className="text-xl text-[#1877F2]" />
              </button>
            </div>
          </div>

          {/* Sign In Redirect */}
          <p className="text-sm text-center mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-[#1D1B4C] font-medium hover:underline">Log in</a>
          </p>
        </div>
      </div>

      {/* Right Section: Image Area */}
      <div className="md:w-1/2 hidden md:block">
        <img
          src={sideImage}
          alt="Side visual"
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
    </motion.div>
  );
};

export default Register;