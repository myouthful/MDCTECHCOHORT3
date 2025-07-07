function Hero() {
  return (
    <div className="flex mx-20 flex-col w-width-729 h-height-359.34-auto
     top-top-185px left-left-100  gap-gap-30 ">
      <div className="flex flex-col w-width-729 h-height-232 gap-gap-20">
        <div className="">
              <h1 className="font-inter font-font-weight-700 text-font-size-64 leading-lg-80 tracking-normal">Earn Today <span className="text-primary" >Skill</span>  Up For Tomorrow.</h1>
        </div>
          <div className="w-width-628 h-height-52" >
            <p className="font-inter font-font-weight-400 text-font-size-20 leading-lg-24 tracking-normal text-neutral">Find verified freelance, short-term, daily jobs around you and build your skills.</p>
          </div>
        <div className="flex mr-20 h-24 gap-5">
          <div className=" flex w-24 h-24 ">
                 <img src="/images/img1.png" alt="user" className="w-25.89 h-25.55 -top--0.12 -left--1.89 rounded-full" />
          </div>
              

              <div className=" w-24 h-24 ">
                 <img src="/images/img1.png" alt="user" className="w-25.89 h-25.55 -top--0.12 -left--1.89 rounded-full" />
          </div>
          <div className=" w-24 h-24 ">
                 <img src="/images/img2.png" alt="user" className="w-25.89 h-25.55 -top--0.12 -left--1.89 rounded-full" />
          </div>

          <div className=" w-24 h-24 ">
                 <img src="/images/img3.png" alt="user" className="w-25.89 h-25.55 -top--0.12 -left--1.89 rounded-full" />
          </div>

          <div className=" w-24 h-24 ">
                 <img src="/images/img4.png" alt="user" className="w-25.89 h-25.55 -top--0.12 -left--1.89 rounded-full" />
          </div>
          
               {/* display active users */}
              <div className="flex flex-col w-92 h-24 ">
             <div className="w-168 h-24"> 
              <p className="font-inter font-font-weight-400 text-[16px] leading-lg-24">50K+ Active Members</p>
             </div>
              </div>
        </div>
         {/* Btn */}
        <div className=" w-374.45 h-43.34 gap-88.6">
              <div className=" flex w-374.45 h-43.34 gap-3">
                <button className=" opacity-100 gap-2 w-[180px] h-[50px] bg-primary rounded-md text-white">Hire a Freelancer</button>
                <button className="w-[180px] h-[50px] bg-white text-primary rounded-md">Apply as Freelancer</button>
                </div> 
        </div>
      </div>
     
    </div>
  );
}
export default Hero;
