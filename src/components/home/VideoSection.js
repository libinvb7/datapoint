import React from "react";
import VideoPlayer from "./VideoPlayer ";

const VideoSection = () => {
  return (
    <>
    
      <section className=" px-6   overflow-x-hidden ">
        <div className="container">
          <h2 className="text-primary">
            Experience the power of Data Point in action
          </h2>

          <div className="video-bg mt-20">
            <VideoPlayer />
          </div>
        </div>
        <div className="">
        <div className=" bg-gradient-one opacity-40  w-[520px] h-[520px] blur-lg"></div>
        <div className=" bg-gradient-two opacity-50  w-[520px] h-[520px] blur-lg"></div>
        <div className=" bg-gradient-three opacity-50  w-[520px] h-[520px] blur-lg"></div>
        <div className=" bg-gradient-four opacity-50  w-[520px] h-[520px] blur-lg"></div>

    </div>
      </section>
      
    </>
  );
};

export default VideoSection;
