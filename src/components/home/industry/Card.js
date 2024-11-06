import React from "react";
import Image from "next/image";
import cardBg from "/public/assets/images/card-bg.png";
import { FaCheck } from "react-icons/fa6";
import { PiArrowUpRightThin } from "react-icons/pi";
import Link from "next/link";

const Card = ({data}) => {
    const { title, content,icon,link } = data; 

  return (
    <div className="group  industry-card rounded-lg max-w-[350px] md:h-[350px] md:h-[400px] p-5 relative cursor-pointer group bg-white hover:bg-gradient-to-r hover:scale-105 shadow-lg p-5 lg:p-10 w-full text-left rounded-lg mb-3 transition duration-300 ">
      <Image src={cardBg} alt="industry-card-bg" className="absolute top-0 left-0 z-1"/>
      <Image src={icon} className="py-2 relative z-10" width={80} height={80} />
      <h2 className="text-card">{title}</h2>
      <div className="flex flex-col items-start pt-3">
      <ul>
         {
            content.map((listitem, index) => (
              <li className="flex gap-3 py-2 items-center font-[600]" key={index}>
                <FaCheck className="text-[#37BDB0]" /> {listitem}
              </li>
            ))
          }
        </ul>
      </div>
      <button className="absolute top-[20px] right-[20px] border border-1 border-[#115991] rounded-[50%] p-1">
      <Link href={link}>  <PiArrowUpRightThin className="text-4xl text-[#115991]" /></Link>
      </button>
    </div>
  );
};

export default Card;
