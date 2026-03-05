"use client";

import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const PhotoSection = () => {
  return (
    <section id="photos" className="m-10 ">
      <Swiper
        slidesPerView={1.5} // Shows part of the next slide
        centeredSlides={true} // Keeps the active slide in the middle
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }, // Adjust based on your image layout
        }}
        className="mySwiper"
      >
        <SwiperSlide className="transition-transform duration-500">
          <Image src="/images/portfolio-images/portfolio-img-01.jpg" className="rounded-2xl" width={462} height={421} alt="portfolio-image 01" />
        </SwiperSlide> <SwiperSlide className="transition-transform duration-500">
          <Image src="/images/portfolio-images/portfolio-img-02.jpg" className="rounded-2xl" width={462} height={421} alt="portfolio-image 02" />
        </SwiperSlide> <SwiperSlide className="transition-transform duration-500">
          <Image src="/images/portfolio-images/portfolio-img-03.jpg" className="rounded-2xl" width={462} height={421} alt="portfolio-image 03" />
        </SwiperSlide> <SwiperSlide className="transition-transform duration-500">
          <Image src="/images/portfolio-images/portfolio-img-04.jpg" className="rounded-2xl" width={462} height={421} alt="portfolio-image 04" />
        </SwiperSlide><SwiperSlide className="transition-transform duration-500">
          <Image src="/images/portfolio-images/portfolio-img-01.jpg" className="rounded-2xl" width={462} height={421} alt="portfolio-image 01" />
        </SwiperSlide> <SwiperSlide className="transition-transform duration-500">
          <Image src="/images/portfolio-images/portfolio-img-02.jpg" className="rounded-2xl" width={462} height={421} alt="portfolio-image 02" />
        </SwiperSlide> <SwiperSlide className="transition-transform duration-500">
          <Image src="/images/portfolio-images/portfolio-img-03.jpg" className="rounded-2xl" width={462} height={421} alt="portfolio-image 03" />
        </SwiperSlide> <SwiperSlide className="transition-transform duration-500">
          <Image src="/images/portfolio-images/portfolio-img-04.jpg" className="rounded-2xl" width={462} height={421} alt="portfolio-image 04" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PhotoSection;
