import StericShape from "@/public/images/shapes/StericShape";
import Image from "next/image";
import React from "react";
import CornerShape from "../icons/svg/CornerShape";
import SectionHeading from "./SectionHeading";

const About: React.FC = () => {
  return (
    <section className="flex justify-center px-10 2xl:px-0 mb-10 sm:mb-25 ">
      <div className="max-w-350 flex justify-between items-center gap-24 flex-col-reverse xl:flex-row  ">
        <div className="relative flex-1">
          <Image
            className="rounded-[30px] "
            src={"/images/section-images/about-image.jpg"}
            alt="about image"
            width={700}
            height={645}
          />

          <div className="absolute bottom-0 right-0 rounded-tl-[30px] pt-4 sm:pt-7.5 pl-4 sm:pl-7.5 bg-background ">
            <div className="rounded-[30px] bg-secondary p-4 sm:px-10 pt-6 sm:pb-10 flex flex-col ">
              <div className="inline-flex justify-center sm:pb-3 border-b border-[#404a3d33]  ">
                <div className="pt-1 sm:pt-3">
                  <StericShape className="size-2.5 sm:size-4.5" />
                </div>
                <div className="font-signika font-semibold text-4xl sm:text-7xl text-text-color ">
                  435
                </div>
                <div className="font-signika font-semibold text-2xl sm:text-[40px] text-text-color ">
                  +
                </div>
              </div>
            <p className="font-roboto leading-5 sm:leading-6.5 text-text-secondary mt-1 sm:mt-3 text-center w-25 sm:w-full ">
              Growth Tons' of Harvest
            </p>
            </div>
            <span className="absolute -top-7.5 right-0 rotate-90 text-background ">
              <CornerShape />
            </span>
            <span className="absolute bottom-0 -left-7.5 rotate-90 text-background ">
              <CornerShape />
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col xl:items-start items-center  ">
          <SectionHeading >Who We Are</SectionHeading>
          <h4 className="sub-heading lg:text-start text-center">
            Currently we are growing and selling organic food
          </h4>
          <p className="text-[#666666] mt-6 xl:text-start text-center ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>

          <div className="flex flex-wrap xl:flex-nowrap gap-12 mt-12.5 items-center justify-center ">
            <div className="max-w-72.5 flex flex-col items-center md:items-start text-center md:text-start  ">
              <Image
                src={"/images/shapes/wall.svg"}
                alt="about-image-1"
                width={70}
                height={70}
              />
              <h5 className="font-medium text-2xl xl:text-[26px] text-text-color leading-7.5 mt-6 mb-3 ">
                Eco Farms Worldwide
              </h5>
              <p className="font-roboto text-base text-[rgba(64,74,61,0.80)] leading-6.5 w-[90%] ">
                There are many variations of pass ages of lorem ipsum available
                majority have suffered.
              </p>
            </div>
            <div className="max-w-72.5 flex flex-col items-center md:items-start text-center md:text-start  ">
              <Image
                src={"/images/shapes/machine.svg"}
                alt="about-image-1"
                width={70}
                height={70}
              />
              <h5 className="font-medium text-2xl xl:text-[26px] text-text-color leading-7.5 mt-6 mb-3 ">
                Eco Farms Worldwide
              </h5>
              <p className="font-roboto text-base text-[rgba(64,74,61,0.80)] leading-6.5 w-[90%] ">
                There are many variations of pass ages of lorem ipsum available
                majority have suffered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
