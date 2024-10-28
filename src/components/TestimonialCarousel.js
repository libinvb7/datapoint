// components/TestimonialCarousel.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const testimonials = [
  {
    name: 'John Doe',
    text: 'This is an amazing service! Highly recommend it to everyone.',
  },
  {
    name: 'Jane Smith',
    text: 'A fantastic experience, very professional and helpful.',
  },
  {
    name: 'Alex Johnson',
    text: 'Top-notch quality and support! Will definitely use again.',
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-carousel">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        // Add stacking effect
        effect="slide"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-content">
              <p>{testimonial.text}</p>
              <h4>{testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
