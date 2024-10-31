import Navbar from "@/components/common/Navbar";
import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/home/Counter";
import FeatureSection from "@/components/home/Feature/FeatureSection";
import Hero from "@/components/home/Hero";
import IndustrySection from "@/components/home/industry/IndustrySection";
import RightChoice from "@/components/home/RightChoice";
import VideoSection from "@/components/home/video/VideoSection";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import TemplateSection from "@/components/home/TemplateSection";
import Cta from "@/components/home/Cta";
import Footer from "@/components/common/Footer";
import BlogListing from "@/components/home/Blog/BlogListing";

const page = () => {
  return (
    <div className="bg-body-home">
      <Navbar />
      <Hero />
      <VideoSection />
      <ClientCarousel />
      <FeatureSection />
      <IndustrySection />
      <RightChoice />
      <Counter />
      <TestimonialCarousel />
      <TemplateSection />
      <BlogListing />
      <Cta />
      <Footer />
    </div>
  );
};

export default page;
