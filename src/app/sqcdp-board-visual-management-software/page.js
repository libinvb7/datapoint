import Navbar from "@/components/common/Navbar"
import { NavbarDemo } from "@/components/common/NavbarDemo"
import { ClientCarousel } from "@/components/home/ClientCarousel"
import VideoSection from "@/components/home/video/VideoSection"
import { StickyScrollReveal } from "@/components/industries/StickyScrollReveal"
import { BackgroundBoxesDemo } from "@/components/solutions/BackgroundBoxesDemo"
import SolutionsCard from "@/components/solutions/SolutionsCardSection"

const page = () => {
  return (
    <>
    <NavbarDemo/>
    <BackgroundBoxesDemo/>
    <VideoSection />
    <ClientCarousel/>
    <SolutionsCard/>
    {/* <StickyScrollReveal /> */}
    </>
  )
}

export default page