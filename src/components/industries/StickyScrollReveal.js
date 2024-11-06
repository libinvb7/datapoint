"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import customizationImage from "/public/assets/images/customization-img.png";
import bannerslide from "/public/assets/images/bannerslide.png";


const content = [
  {
    title: "KPI software",
    description:
      "Data Point enables manufacturers to easily track and analyse Manufacturing Key Performance Indicators like OEE (Overall Equipment Effectiveness), ensuring alignment with strategic goals and operational efficiency.",
    content: (
        <Image
        src={customizationImage}
        width={1000}
        className="w-full"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
        <Image
        src={bannerslide}
        width={1000}
        className="w-full"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
        <Image
        src={customizationImage}
        width={1000}
        className="w-full"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
        <Image
        src={bannerslide}
        width={1000}
        className="w-full"
        alt="linear board demo"
      />
    ),
  },
];
export function StickyScrollReveal() {
  return (
    <section className="py-20">
      <div className="container">
      <div className="flex justify-center items-center flex-col">
          <h2 className="text-primary mb-10 ">
          Transforming manufacturing challenges to opportunities:
          Why Data Point is your smartest solution?
          </h2>
          <p>Data Point Balanced Scorecard framework is the ideal strategic management tool that helps the manufacturers align their objectives with KPIs</p>
        </div>
      <StickyScroll content={content} />
      </div>
    </section>
  );
}
