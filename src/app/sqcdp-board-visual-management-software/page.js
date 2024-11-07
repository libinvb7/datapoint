import Navbar from "@/components/common/Navbar"
import { NavbarDemo } from "@/components/common/NavbarDemo"
import { ClientCarousel } from "@/components/home/ClientCarousel"
import Counter from "@/components/home/Counter"
import TestimonialCarousel from "@/components/home/TestimonialCarousel"
import VideoSection from "@/components/home/video/VideoSection"
import CtaTwo from "@/components/industries/CtaTwo"
import FormIndustry from "@/components/industries/Form"
import { StickyScrollReveal } from "@/components/industries/StickyScrollReveal"
import { BackgroundBoxesDemo } from "@/components/solutions/BackgroundBoxesDemo"
import LearnMore from "@/components/solutions/LearnMore"
import SolutionCta from "@/components/solutions/SolutionCta"
import SolutionsCard from "@/components/solutions/SolutionsCardSection"

const page = () => {
  return (
    <div className="bg-solutions-home">
    <NavbarDemo/>
    <BackgroundBoxesDemo/>
    <VideoSection />
    <ClientCarousel/>
    <SolutionsCard/>
    <SolutionCta/>
    <StickyScrollReveal />
    <Counter/>
    <TestimonialCarousel/>
    <CtaTwo/>
    <FormIndustry/>
    <LearnMore/>

    </div>
  )
}

export default page