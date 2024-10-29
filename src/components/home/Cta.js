import Image from "next/image";
import React from "react";
import customizationImage from "/public/assets/images/customization-img.png";
import ctaEl from "/public/assets/images/home-cta.png";
import { IoArrowForwardOutline } from "react-icons/io5";


const Cta = () => {
  return (
    <section className=" px-6  relative top-36">
      <div className="container home-cta flex items-center shadow-2xl rounded-lg relative bg-white overflow-hidden">
        <Image src={ctaEl} className="absolute bottom-[-20px] right-0 z-1" />
        <Image src={ctaEl} className="absolute top-[-20px] left-0 z-1 rotate-180" />
        <div className="flex flex-wrap justify-center ">
          <div className="  w-full md:w-1/2 flex justify-center items-start flex-col">
               <h2 className="text-primary text-5xl text-start">See how our
               Balanced Scorecard works for you !</h2>
             
      <button className='btn btn-primary mt-5 '>Get a Demo  <IoArrowForwardOutline className="inline-block"/>
      </button>
      
          </div>
          <div className="  w-full md:w-1/2 flex justify-center">
          <Image width={500} src={customizationImage} className=" relative z-10"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
