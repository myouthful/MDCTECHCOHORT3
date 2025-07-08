import React from "react";
import TestimonialCard from "./TestimonialCard";
function Testimonial() {
  return (
    <>
      <div className=" bg-sea-blue justify-center  flex flex-col w-width-1440 h-[609px] top-[1546px] left-[-1px]">
        <LevelUp />
      </div>
      <section className="w-width-1440 h-[803px] top-[2155px] bg-white">
        <TestimonialCard/>         
      </section>
    </>
  );
}
function LevelUp() {
  return (
     <div className="w-fit flex ml-10 mx-28  h-fit top-70 left-left-100 gap-[228px]">
 <div className="w-[507px] h-[391.04px]">
<div className="w-[565px] h-[260px] top-[-0.49px]">
<div className="flex flex-col w-[562px] h-fit gap-[20px] ">
<div className="flex flex-col w-[562px] h-fit gap-[20px]">
<div className="w-[507px] h-[116px] py-16 px-16">
<h2 className="text-4xl font-bold leading-snug mb-4 ">
                Level Up Your <span className="text-primary">Skills</span> <br />
Level Up Your <span className="text-primary">Income</span>
  </h2>
   <p className="text-gray-600  max-w-md mb-4">
          Boost your skills and earning power with
           our free learning modules. Get in-depth and practical,
            easy-to-follow content designed to help you grow and succeed in today’s job market.
        </p>
        <button className=" bg-primary text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
          For Talents
        </button>

</div>
</div>
</div>
</div>
 </div>
 <div className="w-[504.62px] h-[337px]  items-center px-2  my-10">
                {/* img */}
                <img src="/images/test01.jpg" className=" rounded-[40px]" alt="" />
 </div>
 </div>
  );
}


export default Testimonial;
