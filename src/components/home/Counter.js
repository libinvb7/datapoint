const Counter = ({counterData,counterTitle}) => {
 
  return (
    <section className=" mt-20 px-6  ">
      <div className="container">
        <div className="flex justify-center items-center gap-10">
          <h2 className="text-primary mb-10 lg:max-w-[700px]">
           {counterTitle || ""} 
          </h2>
        </div>

        <div className=" p-3 pt-5 lg:p-4  glass-bg">
          <div className="flex flex-col md:flex-row  text-center justify-between">
            {
              counterData?.map((counterNum,index) =>(
                <div className="counter-border relative w-full md:w-1/3  mb-4 flex justify-center items-center mb-16 flex-col" key={index}>
                <div>
                  <h2 className="font-bold  text-5xl bg-gradient-to-r from-[#37C1F1]  to-[#37BDB0] bg-clip-text text-transparent">{counterNum.number}%</h2>
                </div>
                <h3 className="text-card pt-3 max-w-56">{counterNum.title}</h3>
              </div>
              ))
            }
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
