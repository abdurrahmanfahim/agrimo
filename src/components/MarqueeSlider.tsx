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
  const duplicatedSlides = [...slides, ...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides, ...slides,...slides];

  return (
    <Swiper
      modules={[Autoplay]}
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
          <div className="marquee-text text-5xl md:text-[100px] flex items-center gap-10 py-1.5">
            {text} <StericShape className={'size-8 md:size-14'} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MarqueeSlider;