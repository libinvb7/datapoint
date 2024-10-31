import NavbarTwo from '@/components/common/NavbarTwo'
import { ClientCarousel } from '@/components/home/ClientCarousel'
import Banner from '@/components/industries/Banner'
import { StickyScrollReveal } from '@/components/industries/StickyScrollReveal'
import React from 'react'

const page = () => {
  return (
    <div className="bg-body-home">
      <NavbarTwo/>
      <Banner/>
      <ClientCarousel />
      <StickyScrollReveal/>
      <ClientCarousel />
      <ClientCarousel />
      <ClientCarousel />
      <ClientCarousel />
      <ClientCarousel />

    </div>
  )
}

export default page