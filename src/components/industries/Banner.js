import Image from "next/image";
import React from "react";
import bannerSlide from "/public/assets/images/industries/manufacturing/manufacturing-banner.png";

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl lg:text-5xl text-center lg:text-left font-bold text-[#145994] leading-[50px]">
              Optimise your factory operations with <span className="bg-gradient-to-r from-[#1873ac]  to-[#2ca9e0] bg-clip-text text-transparent">
                Manufacturing Balanced Scorecard
              </span>
            </h2>
            <p className="text-center lg:text-left text-sm lg:text-xl my-7 max-w-[550px]">Use comprehensive manufacturing balanced scorecard software with best manufacturing KPI dashboards to improve operational efficiency.</p>
            <div className="flex items-center gap-3">
              <button className="btn btn-border">Get Started</button>
              <button className="btn btn-primary">Book a Demo</button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image className="w-full" src={bannerSlide} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
