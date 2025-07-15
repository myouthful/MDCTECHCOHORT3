import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Loader from "./Loader"
// eslint-disable-next-line
import { motion } from "framer-motion";
const faqs = [
  {
    qust: "What is Skill2Earn?",
    ans: `Skill2Earn is an online platform that connects 
young Nigerians and Africans to verified freelance,
short-term, and daily gig jobs in their local area.
You can also access learning 
resources to build new skills
and improve your job prospects.`,
  },
  {
    qust: "How do I sign up?",
    ans: `It’s simple! Click “Sign Up” on the homepage, fill out your profile, 
and start exploring available jobs. You can sign up with your email or phone number.`,
  },
  {
  qust:"Is it free to use?",
  ans:`Yes — it’s completely free
   for job seekers to create an account,
   browse job listings, apply for 
   jobs, and access basic learning resources.`
},

{
  qust: "What types of jobs can I find here?",
  ans:`You’ll find flexible and verified job opportunities including:
Event support (ushers, setup crew, cleaning)
Delivery services (dispatch rider, errands)
Tutoring (academic subjects, skills-based learning)
Office cleaning
And many more local gigs!`
},

{
  qust:"Are the jobs verified?",
  ans:`Yes. We carefully verify employers and job listings 
  to ensure safety and reliability.
   We encourage users to also report
    any suspicious activity.`
},
{
  qust: "Do I need prior experience to apply?",
  ans:`Not always! Many jobs are entry-level
   or require only basic skills,
   which you can learn through our
    free courses. Some specialized
     jobs may require relevant experience.`
} 

];

export default function FAQ() {


  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  //busy loader
const [loading, setLoading] =useState(true);
useEffect(()=>{
  const timer = setTimeout(()=>{
    setLoading(false);
  },5000);
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
    <div className="max-w-xl mx-auto p-4 ">
      <h2 className="text-neutral-black text-2xl font-bold text-center mb-6 md:text-3xl">
        Frequently <span className="text-primary">Asked</span> Question
      </h2>

      <div className="space-y-4">
        {faqs.map((items, index) => (
          <div
            key={index}
            className="rounded-md bg-faqs shadow-sm overflow-hidden transition-all duration-300 "
          >
            <div
              onClick={() => toggle(index)}
              className="w-full cursor-pointer flex justify-between items-center px-4 py-3 focus:outline-none"
            >
              <span className="font-medium">{items.qust}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
                  {/* px-4 pb-3  text-gray-600 whitespace-pre-line */}

                  {/* <div className={`transition-all ease-in ${openIndex === index ? "max-w-md opacity-100 translate-x-0"
                  :"opacity-0 translate-x-20" }`}>
                      <div>
                        <p>{items.ans}</p>
                      </div>
                  </div> */}
            {openIndex === index && (
              <div className={`transition-all ease-in translate-x-0   `}>
                
                <div className="rounded-3xl shadow p-4 my-5 bg-txt-bg overflow-hidden">
                  <p className=" leading-5 text-sm">
                      {items.ans}
                </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
}
