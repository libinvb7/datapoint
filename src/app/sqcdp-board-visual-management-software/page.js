import Footer from "@/components/common/Footer"
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
import AccordionSection from "@/components/SQDCP/AccordionSection"

const page = () => {
  return (
    <div className="bg-solutions-home">
    <NavbarDemo/>
    <BackgroundBoxesDemo title="Streamline your Shop Floor with" highlightedTitle=" SQCDP Board Visual Management Software" desc="Maximise productivity and optimise shop floor operations with a digital SQCDP board designed for real-time performance tracking."/>
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
    <AccordionSection/>
    <Footer/>

    </div>
  )
}

export default page