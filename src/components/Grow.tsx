import Image from "next/image";
import CarrotIcon from "../icons/svg/CarrotIcon";
import SeedGrowIcon from "../icons/svg/SeedGrowIcon";
import TractorIcon from "../icons/svg/TractorIcon";
import WheatIcon from "../icons/svg/WheatIcon";
import SectionHeading from "./SectionHeading";

const Grow = () => {
  return (
    <section id="grow" className="mt-6.5 mb-52 xl:mb-30 max-w-350 mx-auto">
      <div className="flex flex-col items-center justify-center gap-2 mb-12.5 mt-6 sm:mb-12.5 ">
        <SectionHeading>Grow Naturally</SectionHeading>
        <h5 className="sub-heading max-w-127 text-center ">
          Choose What's Perfect For Your Field
        </h5>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 mb-12">
        <div className="md:flex-2 min-w-97 ">
          <div className="flex items-start gap-7.5 mb-6 max-w-100.5 ">
            <div className="p-3 lg:p-4 bg-secondary rounded-full  ">
              <TractorIcon />
            </div>
            <div>
              <h5 className="font-signika font-medium text-2xl lg:text-[26px] text-text-color leading-9 mb-3 ">
                Agriculture Products
              </h5>
              <p className="font-roboto text-base text-[rgba(64,74,61,0.80)] leading-6.5 w-[90%] ">
                Nullam porta enim vel tellus commodo, eget laoreet odio
                ultrices.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-7.5 mb-6 max-w-100.5 ">
            <div className="p-3 lg:p-4 bg-secondary rounded-full  ">
              <SeedGrowIcon />
            </div>
            <div>
              <h5 className="font-signika font-medium text-2xl lg:text-[26px] text-text-color leading-9 mb-3 ">
                Quality Products
              </h5>
              <p className="font-roboto text-base text-[rgba(64,74,61,0.80)] leading-6.5 w-[90%] ">
                Nullam porta enim vel tellus commodo, eget laoreet odio
                ultrices.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 xl:flex-2 absolute opacity-20 xl:opacity-100 xl:relative -z-10 ">
          <Image
            src={"/images/section-images/corn-image.png"}
            alt="corn"
            width={434}
            height={466}
          />
        </div>
        <div className="md:flex-2 min-w-97 ">
          <div>
            <div className="flex items-start gap-7.5 mb-6 max-w-100.5 ">
              <div className="p-3 lg:p-4 bg-secondary rounded-full  ">
                <CarrotIcon />
              </div>
              <div>
                <h5 className="font-signika font-medium text-2xl lg:text-[26px] text-text-color leading-9 mb-3 ">
                  Fresh Vegetables
                </h5>
                <p className="font-roboto text-base text-[rgba(64,74,61,0.80)] leading-6.5 w-[90%] ">
                  Nullam porta enim vel tellus commodo, eget laoreet odio
                  ultrices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-7.5 mb-6 max-w-100.5 ">
              <div className="p-3 lg:p-4 bg-secondary rounded-full  ">
                <WheatIcon />
              </div>
              <div>
                <h5 className="font-signika font-medium text-2xl lg:text-[26px] text-text-color leading-9 mb-3 ">
                  Pure & Organic
                </h5>
                <p className="font-roboto text-base text-[rgba(64,74,61,0.80)] leading-6.5 w-[90%] ">
                  Nullam porta enim vel tellus commodo, eget laoreet odio
                  ultrices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grow;
