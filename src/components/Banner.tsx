"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Mousewheel যোগ করুন
import Image from "next/image";
import bannerOne from "../../public/images/banners/banner-one.webp";
import bannerTwo from "../../public/images/banners/banner-two.webp";
import bannerThree from "../../public/images/banners/banner-three.webp";
import bannerFour from "../../public/images/banners/banner-four.webp";
import bannerFive from "../../public/images/banners/banner-five.webp";
import bannerSix from "../../public/images/banners/banner-six.webp";
import bannerSeven from "../../public/images/banners/banner-seven.webp";
import bannerEight from "../../public/images/banners/banner-eight.webp";
import bannerNine from "../../public/images/banners/banner-nine.webp";

import Container from "./Container";
import Button from "./Button";
import PlowIcon from "../icons/svg/PlowIcon";

const Banner: React.FC = () => {
  const banners = [
    {
      title: "Believe in Quality!",
      subHeading: `Quality Trust:`,
      heading: ` Direct to the Farm`,
      paragraph: `We all need a little space to grow. Give yourself the space you need to find your inner you.`,
      image: bannerOne,
    },
    {
      title: "Respect the Nature!",
      subHeading: `Organic Yield:`,
      heading: `Straight from Soil`,
      paragraph: `We all need a little space to grow. Give yourself the space you need to find your inner you.`,
      image: bannerFour,
    },
    {
      title: "Freedom to Grow!",
      subHeading: `Natural Ways:`,
      heading: `Purest Life Cycle`,
      paragraph: `We all need a little space to grow. Give yourself the space you need to find your inner you.`,
      image: bannerThree,
    },
    {
      title: "Passion for Crops!",
      subHeading: `Golden Wheat:`,
      heading: `Bounty of the Sun`,
      paragraph: `We all need a little space to grow. Give yourself the space you need to find your inner you.`,
      image: bannerFive,
    },
    {
      title: "Science of Green!",
      subHeading: `Hybrid Seeds:`,
      heading: " Better Eco System",
      paragraph: `We all need a little space to grow. Give yourself the space you need to find your inner you.`,
      image: bannerNine,
    },
  ];
  return (
    <Container>
      <section className="py-5 cursor-grab">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {banners.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                className="rounded-4xl object-cover w-full h-full"
                src={item.image}
                alt={`Banner ${index + 1}`}
                fill
              />
              <div className="absolute text-white px-5 sm:px-20 2xl:px-58 top-3/5 lg:top-1/2 -translate-y-1/2 ">
                <div className="">
                  <h4 className="text-sm font-medium mb-4 border border-background rounded-[50px] px-5 leading-6 inline-block ">
                    {item.title}
                  </h4>
                </div>
                <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold mb-4 leading-6 md:leading-15 lg:leading-25 ">
                  {item.subHeading}
                </h2>
                <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold mb-4 leading-6 md:leading-15 lg:leading-25 ">
                  {item.heading}
                </h2>
                <p className="text-sm md:text-lg leading-7 border-t border-secondary mb-6">
                  {item.paragraph}
                </p>
                <Button
                  text="Contact Us"
                  variant="secondary"
                  href="/contact"
                  pos={<PlowIcon />}
                  className="w-full justify-center sm:w-auto sm:justify-start"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Container>
  );
};

export default Banner;

