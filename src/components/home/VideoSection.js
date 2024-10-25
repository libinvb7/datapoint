import VideoPlayer from "./VideoPlayer ";

const VideoSection = () => {
  return (
    <>
    
      <section className=" px-6   overflow-x-hidden ">
        <div className="container">
          <h2 className="text-primary ">
            Experience the power of Data Point in action
          </h2>

          <div className="glass-bg mt-10 lg:mt-16 rounded-lg">
            <VideoPlayer />
          </div>
        </div>
        
      </section>
      
    </>
  );
};

export default VideoSection;
