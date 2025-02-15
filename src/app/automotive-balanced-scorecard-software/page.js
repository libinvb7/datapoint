import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/common/counter/Counter";
import IndustrySection from "@/components/home/industry/IndustrySection";
import AccordionSection from "@/components/industries/AccordionSection";
import ManufacturingCompaniesUseBalancedScorecard from "@/components/industries/ManufacturingCompaniesUseBalancedScorecard";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import VideoSection from "@/components/home/video/VideoSection";
import Banner from "@/components/industries/Banner";
import CtaTwo from "@/components/industries/CtaTwo";
import FormIndustry from "@/components/industries/Form";
import { StickyScrollReveal } from "@/components/industries/StickyScrollReveal";
import React from "react";
import automotiveData from "../../data/industires/automotiveData";

const page = () => {
  return (
    <div className="bg-industry-home">
      <Banner
        title={automotiveData.bannerData?.title}
        highlightTitle={automotiveData.bannerData?.HighlightTitle}
        desc={automotiveData.bannerData?.desc}
        imageUrl={automotiveData.bannerData?.Image}
      />
      <ClientCarousel />
      <StickyScrollReveal
        title={automotiveData.StickyScrollContentTitle?.title}
        desc={automotiveData.StickyScrollContentTitle?.content}
        content={automotiveData.StickyScrollContent}
      />
      <VideoSection
        title="Experience the Power of Data Point Automotive Digital Balanced Scorecard "
        desc="Use Data Point’s advanced Balanced Scorecard tailored for the automotive industry to drive Lean Manufacturing, optimise operations, and monitor crucial KPIs for sustained growth and increased productivity. "
      />
      <Counter
        counterTitle={automotiveData.counterTitle?.title}
        counterData={automotiveData.counterData}
      />
      <ManufacturingCompaniesUseBalancedScorecard
        cardSectionTitle={automotiveData.cardSectionTitle?.title}
        cardData={automotiveData.cardData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={automotiveData.formContents?.title}
        desc={automotiveData.formContents?.desc}
      />
      <AccordionSection accordionData={automotiveData.accordionItems} />
    </div>
  );
};

export default page;
