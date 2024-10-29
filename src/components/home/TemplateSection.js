import Image from "next/image";
import customizationImage from "/public/assets/images/customization-img.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { PiVideoFill } from "react-icons/pi";
import { MdHub } from "react-icons/md";


const TemplateSection = () => {
  return (
    <section className=" mt-20 px-6  pb-20">
    <div className="container">

      <div className="px-4  glass-bg  ">
        <div className="flex flex-col lg:flex-row  text-center items-center justify-center">
          <div className="w-full md:w-1/2 flex justify-center items-center  flex-col">
            <div>
              <h2 className="text-primary">Get started with<br/>
              Data Point resources</h2>
              <Image src={customizationImage} width={500}/>
            </div>
          </div>
          <div className=" relative w-full md:w-1/2 P-5">
            <div className="bg-gradient-to-r from-[#37C1F1] to-[#37BDB0] p-10 w-full text-left rounded-lg mb-3 shadow-lg">
             <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center"><RiDashboardFill  className="text-white text-5xl font-bold bg-white/30 p-1 rounded-lg" />
                <h3 className="text-white text-2xl font-bold">
                Templates</h3>  
                </div>
                <div>
                <MdKeyboardArrowRight className="text-white text-3xl"/>

                </div>

             </div>
            </div>
            <div className="bg-white shadow-lg p-10 w-full text-left rounded-lg mb-3">
             <div className="flex justify-between items-center">
             <div className="flex gap-3 items-center"><PiVideoFill  className="text-[#115991] text-5xl font-bold bg-white/30 p-1 rounded-lg" />
                <h3 className="text-[#115991] text-2xl font-bold">Demo</h3>  
                </div>
                <div>
                <MdKeyboardArrowRight className="text-[#115991] text-3xl " />

                </div>

             </div>
            </div>
            <div className="bg-white shadow-lg p-10 w-full text-left rounded-lg mb-3">
             <div className="flex justify-between items-center">
             <div className="flex gap-3 items-center"><MdHub  className="text-[#115991] text-5xl font-bold bg-white/30 p-1 rounded-lg" />
                <h3 className="text-[#115991] text-2xl font-bold">Resource Hub</h3>  
                </div>
                <div>
                <MdKeyboardArrowRight className="text-[#115991] text-3xl"/>

                </div>

             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TemplateSection