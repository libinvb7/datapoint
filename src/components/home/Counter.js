import React from "react";

const Counter = () => {
  return (
    <section className=" mt-20 px-6  ">
      <div className="container">
        <div className="flex justify-center items-center gap-10">
          <h2 className="text-primary mb-10 lg:max-w-[700px]">
            Driving Efficiency and Performance Gains with Data Point 
          </h2>
        </div>

        <div className=" p-3 pt-5 lg:p-4  glass-bg">
          <div className="flex flex-col md:flex-row  text-center">
            <div className=" relative w-full md:w-1/3  mb-4 flex justify-center items-center mb-16 flex-col">
              <div>
                <h2 className="text-primary text-black text-5xl">40%</h2>
              </div>
              <h3 className="text-card pt-3">Faster strategy <br/> execution</h3>
            </div>
            <div className="counter-border relative w-full md:w-1/3  mb-4 flex justify-center items-center mb-16 flex-col">
              <div>
                <h2 className="text-primary text-black text-5xl">20%</h2>
              </div>
              <h3 className="text-card pt-3">Increase in performance  <br/> visibility</h3>
            </div>
            <div className="counter-border relative w-full md:w-1/3  mb-4 flex justify-center items-center mb-16 flex-col">
              <div>
                <h2 className="text-primary text-black text-5xl">70%</h2>
              </div>
              <h3 className="text-card pt-3">Improvement in goal  <br/> alignment</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
