"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { PiCaretCircleDownThin, PiCaretCircleUpThin } from "react-icons/pi";
import author from "/public/assets/images/testimonials/author.png";
import pciLogo from "/public/assets/images/testimonials/pci_logo.png";
import quoteOne from "/public/assets/images/icons/quotes.png";

const testimonials = [
  {
    name: "MARC ROBINSON",
    position: "Operations Director",
    content:
      "By providing a central location to input, analyse and share our KPIs, 'Data Point' enables site management to more easily focus on the entire business as a team. Its ability to allow automated data entry and trend analysis gives us more time for improvement rather than just reporting numbers. Combined with a disciplined approach within our SQDC meeting process, I believe 'Data Point' will help us continually focus on key issues and drive business excellence in all areas.",
  },
  {
    name: "Michael Smith",
    position: "Project Manager",
    content: "Fantastic experience and excellent support!",
  },
  {
    name: "Sarah Williams",
    position: "Chief Marketing Officer",
    content: "I recommend them wholeheartedly.",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const testimonialRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.inOut" }
    );
  }, [index]);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="mt-20 px-6">
      <div className="container flex justify-center items-center flex-col">
        <h2 className="text-primary mb-10 lg:max-w-[700px]">Testimonials</h2>
        <div className="testimonial-slider relative">
          <div
            ref={testimonialRef}
            className="testimonial-content bg-white rounded-lg p-10"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 flex justify-center items-center flex-col">
                <div className="flex justify-center items-center flex-col">
                  <Image src={author} alt="author-img" width={300} />
                  <h2 className="text-primary text-2xl">
                    {testimonials[index].name}
                  </h2>
                  <p className="text-card font-[400]">
                    {testimonials[index].position}
                  </p>
                  <Image
                    className="pt-3"
                    src={pciLogo}
                    alt="company-img"
                    width={200}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4 flex justify-center items-center relative">
                <Image
                  className="absolute top-9 left-4"
                  src={quoteOne}
                  alt="quote-img"
                  width={150}
                />
                <Image
                  className="absolute bottom-9 right-4 scale-x-[-1]"
                  src={quoteOne}
                  alt="quote-img"
                  width={150}
                />
                <div className="testimonial-writings rounded-lg p-10">
                  <p className="text-white text-xl text-center">
                    “{testimonials[index].content}”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="controls">
            <button
              onClick={prevTestimonial}
              className="absolute left-[-100px] top-[50%]"
            >
              <PiCaretCircleDownThin className="text-7xl text-[#37BDB0]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-[-100px] top-[50%]"
            >
              <PiCaretCircleUpThin className="text-7xl text-[#37BDB0]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
