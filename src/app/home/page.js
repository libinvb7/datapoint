import Navbar from "@/components/common/Navbar";
import { ClientCarousel } from "@/components/home/ClientCarousel";
import FeatureSection from "@/components/home/FeatureSection";
import Hero from "@/components/home/Hero";
import VideoSection from "@/components/home/VideoSection";
import React from "react";

const page = () => {
  return (
    <div className="bg-body-home" >
      <Navbar />
      <Hero />
      <VideoSection />
      <ClientCarousel />
      <FeatureSection />
      <Hero />
    </div>
  );
};

export default page;
