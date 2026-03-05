"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const Service = () => {
  const services = [
    {
      id: 1,
      tag: "FERTILIZER",
      title: "Harvest Concepts",
      image: "harvest-concepts.jpg",
      link: "/harvest-concepts",
    },
    {
      id: 2,
      tag: "FRUITS",
      title: "Farming Products",
      image: "farming-products.jpg",
      link: "/farming-products",
    },
    {
      id: 3,
      tag: "FERTILIZER",
      title: "Soil fertilization",
      image: "soil-fertilization.jpg",
      link: "/soil-fertilization",
    },
    {
      id: 4,
      tag: "FRUITS",
      title: "Fresh vegetables",
      image: "fresh-vegetables.jpg",
      link: "/fresh-vegetables",
    },
    {
      id: 5,
      tag: "FERTILIZER",
      title: "Harvest Concepts",
      image: "harvest-concepts.jpg",
      link: "/harvest-concepts",
    },
    {
      id: 6,
      tag: "FRUITS",
      title: "Farming Products",
      image: "farming-products.jpg",
      link: "/farming-products",
    },
    {
      id: 7,
      tag: "FERTILIZER",
      title: "Soil fertilization",
      image: "soil-fertilization.jpg",
      link: "/soil-fertilization",
    },
    {
      id: 8,
      tag: "FRUITS",
      title: "Fresh vegetables",
      image: "fresh-vegetables.jpg",
      link: "/fresh-vegetables",
    },
  ];

  return (
    <section id="services">
      <div className="services flex flex-col items-center justify-center gap-2 mb-8 mt-6 sm:mb-12.5 ">
        <SectionHeading>Our Service</SectionHeading>
        <h4 className="sub-heading text-center ">Best Agriculture Services</h4>
      </div>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        breakpoints={{
          // Mobile (Default)
          0: {
            slidesPerView: 2,
          },
          // md (Medium screens - 768px)
          768: {
            slidesPerView: 3,
          },
          // lg (Large screens - 1024px)
          1024: {
            slidesPerView: 3,
          },
          // xl (Extra large screens - 1280px)
          1280: {
            slidesPerView: 4,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper max-w-350 mx-auto sm:h-102.5 h-75  "
      >
        {services.map(({ id, tag, title, image, link }, index) => (
          <SwiperSlide
            className={`relative max-w-90 lg:max-w-82 bg-[url(/images/shapes/services-card-shape.svg)] bg-no-repeat bg-center bg-contain cursor-pointer `}
            key={`${title}-${index}`}
          >
            <div className="absolute p-10 size-full flex flex-col items-center justify-center ">
              <div className="p-1.25  lg:size-62 bg-primary rounded-full flex items-center justify-center overflow-clip ">
                <Image
                  src={`/images/services-images/${image}`}
                  alt={title}
                  width={244}
                  height={244}
                  className=" rounded-full "
                />
              </div>
              <div className="flex gap-2 items-center justify-center mt-3 lg:mt-6.5  ">
                <div className="rounded-full bg-primary size-2 mb-1 "></div>
                <p className="font-signika text-sm leading-6 tracking-[0.5px] text-text-secondary ">
                  {tag}
                </p>
              </div>
              <p className="font-signika font-medium text-xl lg:text-[26px] leading-5 sm:leading-8 text-center text-text-color ">
                {title}
              </p>
            </div>
            <Link
              href={link}
              className="absolute size-full bg-transparent  "
            ></Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination sm:mt-6 flex justify-center items-center gap-4.5 "></div>
    </section>
  );
};

export default Service;
