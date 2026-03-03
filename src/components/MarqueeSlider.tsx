"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import StericShape from "@/public/images/shapes/StericShape";

const MarqueeSlider = () => {
  const slides = [
    "Agriculture",
    "Farming",
    "Organic",
    "Vegetables",
  ];

  // Duplicate slides for smooth loop
  const duplicatedSlides = [...slides, ...slides, ...slides];

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={30}
      loop={true}
      speed={7000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
      className="marquee-swiper"
    >
      {duplicatedSlides.map((text, i) => (
        <SwiperSlide key={i} className="!w-auto">
          <div className="marquee-text flex items-center gap-10 ">
            {text} <StericShape className={'size-14'} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MarqueeSlider;