import Footer from "@/components/common/Footer";
import { NavbarDemo } from "@/components/common/NavbarDemo";
import NavbarTwo from "@/components/common/NavbarTwo";
import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/home/Counter";
import IndustrySection from "@/components/home/industry/IndustrySection";
import AccordionSection from "@/components/manufacturing/AccordionSection";
import ManufacturingCompaniesUseBalancedScorecard from "@/components/manufacturing/ManufacturingCompaniesUseBalancedScorecard";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import VideoSection from "@/components/home/video/VideoSection";
import Banner from "@/components/industries/Banner";
import CtaTwo from "@/components/industries/CtaTwo";
import FormIndustry from "@/components/industries/Form";
import { StickyScrollReveal } from "@/components/industries/StickyScrollReveal";
import React from "react";

const page = () => {
  return (
    <div className="bg-industry-home">
      <NavbarDemo />
      <Banner />
      <ClientCarousel />
      <StickyScrollReveal />
      <VideoSection title="Experience the power of Data Point in action"/>
      <Counter />
      <ManufacturingCompaniesUseBalancedScorecard />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry />
      <AccordionSection />
      <Footer />
    </div>
  );
};

export default page;
