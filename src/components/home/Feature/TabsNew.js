"use client";
import { useState, useEffect, useRef } from "react";
import bannerSlide from "/public/assets/images/bannerslide.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tabsnew = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

 
  const tabs = [
    {
      title: "Lean Daily Management System",
      subTitle:
        "Optimise daily operations through systematic management Optimise",
      points: [
        "Monitor daily activities and track fdf",
        "Monitor daily activities and track perforgdafvdmance",
        "Monitor daily activities and track perforsdfsdmance",
      ],
      image: bannerSlide,
      alt: "tab image",
    },
    {
      title: "Gemba Walk",
      subTitle:
        "Optimise daily operations through systematic management Optimise",
      image: bannerSlide,
      alt: "tab image",
      points: [
        "Monitor daily activities and track dfsd",
        "Monitor daily activities and track performance",
        "Monitor daily activities and track dfs",
      ],
    },
    {
      title: "Digital Visual Management Board ",
      subTitle:
        "Optimise daily operations through systematic management Optimise",
      image: bannerSlide,
      alt: "tab image",
      points: [
        "Monitor daily activities and track performance",
        "Monitor daily activities and track df",
        "Monitor daily activities and track perforsdmance",
      ],
    },
    {
      title: "Strategy Planning  ",
      subTitle:
        "Optimise daily operations through systematic management Optimise",
      image: bannerSlide,
      alt: "tab image",
      points: [
        "Monitor daily actddfsadivities and track performance",
        "Monitor daily activities and track performance",
        "Monitor daily activities and track performance",
      ],
    },
    {
      title: "KPI Visualisation  ",
      subTitle:
        "Optimise daily operations through systematic management Optimise",
      image: bannerSlide,
      alt: "tab image",
      points: [
        "Monitor daily activities and track performance",
        "Monitor daisdfsdaly activities and track performance",
        "Monitor daily actfsadfadivities and track performance",
      ],
    },
    {
      title: "Strategy Execution",
      subTitle:
        "Optimise daily operations through systematic management Optimise",
      image: bannerSlide,
      alt: "tab image",
      points: [
        "Monitor daily activities and track performance",
        "Monitorasfdsa daily activities and track performance",
        "Monitor daily activities and track performance",
      ],
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
        ScrollTrigger.create({
            trigger: container,
            start: "center center",
            end: "+=1000px",  // Adjust this value based on how much scroll you want to trigger.
            scrub: 3,
            onUpdate: (self) => {
              const newActiveTab = Math.round(self.progress * (tabs.length - 1));
              setActiveTab(newActiveTab);
            },
          });
    }
  }, [tabs.length]);

  return (
    <div className="glass-bg " ref={containerRef}>
      <div className="lg:flex gap-4">
        <div className="lg:w-2/5 flex flex-col">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`px-4 py-5 mb-3 bg-white tab-shadow rounded-lg cursor-pointer ${
                index === activeTab ? "btn btn-primary" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className={`flex gap-3 ${index === activeTab ? "active" : ""}`}>
                <div
                  className={`${
                    index === activeTab ? "border border-l-2 border-white" : ""
                  }`}
                ></div>
                <h2
                  className={`font-bold text-2xl ${
                    index === activeTab ? "text-white" : "text-[#115991]"
                  }`}
                >
                  {tab.title}
                </h2>
              </div>
              {index === activeTab ? (
                <p className="text-lg font-normal py-3">{tab.subTitle}</p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        <div className="lg:w-3/5 bg-white rounded-lg p-5 tab-shadow">
          <div className="flex items-center justify-center">
            <Image src={tabs[activeTab].image} alt={tabs[activeTab].alt} width={500} />
          </div>
          <div className="flex flex-col items-center pt-3">
            <ul>
              {tabs[activeTab].points.map((point, i) => (
                <li key={i} className="flex gap-3 py-2 items-center font-[600]">
                  <FaCheck className="text-[#37BDB0]" /> {point}
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center py-2">
              <button className="btn btn-primary">See How It Works</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabsnew;
