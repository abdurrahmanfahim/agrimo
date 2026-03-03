import StericShape from "@/public/images/shapes/StericShape";
import Image from "next/image";
import React from "react";
import CornerShape from "../icons/svg/CornerShape";
import SectionHeading from "./SectionHeading";

const About: React.FC = () => {
  return (
    <section className="flex justify-center px-10 2xl:px-0 mb-25 ">
      <div className="max-w-350 flex justify-between items-center gap-24 flex-col-reverse lg:flex-row  ">
        <div className="relative flex-1">
          <Image
            className="rounded-[30px] "
            src={"/images/section-images/about-image.jpg"}
            alt="about image"
            width={700}
            height={645}
          />

          <div className="absolute bottom-0 right-0 rounded-tl-[30px] pt-7.5 pl-7.5 bg-background ">
            <div className="rounded-[30px] bg-secondary p-10 flex  ">
              <div className="pt-3">
                <StericShape />
              </div>
              <div className="font-signika font-semibold text-4xl sm:text-7xl text-text-color ">
                435
              </div>
              <div className="font-signika font-semibold text-2xl sm:text-[40px] text-text-color ">
                +
              </div>
            </div>
            <span className="absolute -top-7.5 right-0 rotate-90 text-background ">
              <CornerShape />
            </span>
            <span className="absolute bottom-0 -left-7.5 rotate-90 text-background ">
              <CornerShape />
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:items-start items-center  ">
          <SectionHeading content="who we are" />
          <h4 className="font-signika font-medium text-[55px] leading-15 lg:text-start text-center mt-2 ">
            Currently we are growing and selling organic food
          </h4>
          <p className="text-[#666666] mt-6  ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>

          <div className="flex gap-12 mt-12.5 ">
            <div className="max-w-72.5 ">
              <Image src={'/images/shapes/wall.svg'} alt="about-image-1" width={70} height={70} />
              <h5 className="font-medium text-2xl lg:text-[26px] text-text-color leading-7.5 mt-6 mb-3 ">
                Eco Farms Worldwide
              </h5>
              <p className="font-roboto text-base text-[rgba(64,74,61,0.80)] leading-6.5 w-[90%] ">
                There are many variations of pass ages of lorem ipsum available
                majority have suffered.
              </p>
            </div><div className="max-w-72.5 ">
              <Image src={'/images/shapes/machine.svg'} alt="about-image-1" width={70} height={70} />
              <h5 className="font-medium text-2xl lg:text-[26px] text-text-color leading-7.5 mt-6 mb-3 ">
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
