"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import customizationImage from "/public/assets/images/customization-img.png";
import bannerslide from "/public/assets/images/bannerslide.png";



export function StickyScrollReveal({title,desc, content}) {
  return (
    <section className="pt-20">
      <div className="container">
      <div className="flex justify-center items-center flex-col">
          <h2 className="text-primary mb-10 ">
          {title||""}
          </h2>
          <p>{desc || ""}</p>
        </div>
      <StickyScroll content={content} />
      </div>
    </section>
  );
}
