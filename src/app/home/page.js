import Navbar from "@/components/common/Navbar";
import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/home/Counter";
import FeatureSection from "@/components/home/FeatureSection";
import Hero from "@/components/home/Hero";
import IndustrySection from "@/components/home/IndustrySection";
import RightChoice from "@/components/home/RightChoice";
import VideoSection from "@/components/home/VideoSection";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import TemplateSection from "@/components/home/TemplateSection";
import BlogListing from "@/components/home/BlogListing";

const page = () => {
  return (
    <div className="bg-body-home" >
      <Navbar />
      <Hero />
      <VideoSection />
      <ClientCarousel />
      <FeatureSection />
     <IndustrySection/>
     <RightChoice/>
     <Counter/>
     <TestimonialCarousel />
     <TemplateSection/>
     <BlogListing/>



     
    </div>
  );
};

export default page;
