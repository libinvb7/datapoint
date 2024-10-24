import Image from "next/image";
import React from "react";
import bannerSlide from "@/app/images/bannerslide.png";

const Hero = () => {
  return (
    <section className="hero-background  px-6   md:flex items-center relative h-[100%] w-[100%] overflow-x-hidden">
      <div className="container mx-auto   md:flex gap-3">
        <div  className="relative "> 
          <div className="relative  md:max-w-[320px] lg:max-w-[700px] pt-32 md:pt-0">
            <div className=" z-10 px-9 py-2 inline rounded-[40px] border border-white text-white font-bold  text-sm lg:text-lg  ">
              KPI-Driven data insights
            </div>
            <h1 className="text-white  md:text-3xl lg:text-4xl xl:text-6xl  py-5 font-bold tracking-wide leading-tight">
              Align strategy and operations with Balanced Scorecard software
            </h1>
            <p className="text-white text-sm lg:text-xl max-w-[600px] mb-7">Boost efficiency with Data Point real-time KPI insights and tailored frameworks.</p>
            <div className="flex items-center gap-3 ">
              <button className="btn">Get Started</button>
              <button className="btn btn-primary">Book a Demo</button>
            </div>
          </div>
        </div>
        <div className="pt-10 md:pt-0 ">
          <Image className="md:absolute md:top-40 md:-right-20 md:w-[450px] lg:top-36 lg:w-[1000px] " src={bannerSlide} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
