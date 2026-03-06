"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PhotoSection = () => {
  return (
    <section id="photos" className="m-10  ">
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={10} // ফিগমা অনুযায়ী গ্যাপ এখানে সেট করুন
        loop={true}
        speed={800}
        slidesPerGroup={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3.5,
            slidesPerGroup: 2,
          },
        }}
        className="mySwiper py-12"
      >
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-01.jpg"
              width={462}
              height={430}
              alt="portfolio-image 01"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-02.jpg"
              width={462}
              height={430}
              alt="portfolio-image 02"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-03.jpg"
              width={462}
              height={430}
              alt="portfolio-image 03"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-04.jpg"
              width={462}
              height={430}
              alt="portfolio-image 04"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-01.jpg"
              width={462}
              height={430}
              alt="portfolio-image 01"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-02.jpg"
              width={462}
              height={430}
              alt="portfolio-image 02"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-03.jpg"
              width={462}
              height={430}
              alt="portfolio-image 03"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-04.jpg"
              width={462}
              height={430}
              alt="portfolio-image 04"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-01.jpg"
              width={462}
              height={430}
              alt="portfolio-image 01"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-02.jpg"
              width={462}
              height={430}
              alt="portfolio-image 02"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-03.jpg"
              width={462}
              height={430}
              alt="portfolio-image 03"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-04.jpg"
              width={462}
              height={430}
              alt="portfolio-image 04"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-01.jpg"
              width={462}
              height={430}
              alt="portfolio-image 01"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-02.jpg"
              width={462}
              height={430}
              alt="portfolio-image 02"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-03.jpg"
              width={462}
              height={430}
              alt="portfolio-image 03"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center transition-transform duration-500 ">
          <div className="img-wrapper">
            <Image
              src="/images/portfolio-images/portfolio-img-04.jpg"
              width={462}
              height={430}
              alt="portfolio-image 04"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PhotoSection;
