import VideoPlayer from "./VideoPlayer ";

const VideoSection = ({title}) => {
  return (
    <>
    
      <section className=" px-6   overflow-x-hidden ">
        <div className="container">
          {title?<h2 className="text-primary mb-10 lg:mb-16">{title}
          </h2>:""}

          <div className="glass-bg   rounded-lg">
            <VideoPlayer />
          </div>
        </div>
        
      </section>
      
    </>
  );
};

export default VideoSection;
