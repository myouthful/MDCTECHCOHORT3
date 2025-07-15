import React from "react";
import TestimonialCard from "./TestimonialCard";
function Testimonial() {
  return (
    <>
      <section className=" bg-sea-blue justify-center
       py-10 px-4 md:px-20 lg:px-24
        flex flex-col w-width-1440 h-[609px] top-[1546px] left-[-1px] ">
        <LevelUp />
      </section>
      <section className="w-full h-full top-[2155px] bg-white">
        <TestimonialCard />
      </section>
    </>
  );
}
//max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10
// max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10
//w-fit flex ml-10 mx-28  h-fit top-70 left-left-100 gap-[228px]
function LevelUp() {
  return (
    // w-fit flex flex-row   h-fit top-70 left-left-100 gap-[228px]
   <div className=" md:px-10 py-12 min-h-screen items-center flex justify-center">
      <div className="mr-10 w-[507px] flex flex-col md:flex-row items-center justify-between ">
        {/* left container h-[391.04px] */}
        <div className="max-w-xl space-x-0  text-center md:text-left">
           <h2 className="text-4xl md:text-5xl space-x-5 font-bold leading-snug mb-4 ">
                  Level Up Your <span className="text-primary">Skills</span>{" "}
                  <br />
                  Level Up Your <span className="text-primary">Income</span>
                </h2>
                <p className="text-gray-600  max-w-md mb-4">
                  Boost your skills and earning power with our free learning
                  modules. Get in-depth and practical, easy-to-follow content
                  designed to help you grow and succeed in today’s job market.
                </p>
                <div className="w-[507px] h-[116px]">
                
                
                <button className=" bg-primary text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                  For Talents
                </button>
              </div>
        </div>
      </div>
      <div className="w-[504.62px] h-[337px] mr-40 items-center px-2  my-10">
        {/* img */}
        <img src="/images/test01.jpg" className=" object-contain rounded-[40px]" alt="" />
      </div>
    </div>
  );
  //
}


<div className="w-[565px] h-[260px] top-[-0.49px]">
          <div className="flex flex-col w-[562px] h-fit gap-[20px] ">
            <div className="flex flex-col w-[562px] h-fit gap-[20px]">
              <div className="w-[507px] h-[116px] py-16 px-16">
                
                
                <button className=" bg-primary text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                  For Talents
                </button>
              </div>
            </div>
          </div>
        </div>

export default Testimonial;
