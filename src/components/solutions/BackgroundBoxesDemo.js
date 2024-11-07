"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-[400px] relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-[#fff] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h2 className="text-3xl lg:text-5xl text-center  font-bold text-[#145994] leading-[50px]  relative z-20">
      Streamline your Shop Floor with <span className="text-[#0F79C0]"><br></br>
      SQCDP Board Visual Management Software
              </span>
            </h2>
            <p className="text-center  text-sm lg:text-xl my-7 max-w-[550px] relative z-20">Maximise productivity and optimise shop floor operations with a digital SQCDP board designed for real-time performance tracking.</p>
            <div className="flex items-center gap-3 relative z-20 ">
              <button className="btn btn-border">Get Started</button>
              <button className="btn btn-primary">Book a Demo</button>
            </div>
      
    </div>
  );
}
