import React from "react";
import TractorIcon from "../icons/svg/TractorIcon";
import HandFruit from "../icons/svg/HandFrout";
import SeedGrowIcon from "../icons/svg/SeedGrowIcon";
import TreeIcon from "../icons/svg/TreeIcon";
import Container from "./Container"

const Benefits: React.FC = () => {
  const benefitsData = [
    {
      id: 1,
      icon: <TractorIcon />,
      title: "Professional Farmers",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
    {
      id: 1,
      icon: <HandFruit />,
      title: "Fresh Vegetables",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
    {
      id: 1,
      icon: <SeedGrowIcon />,
      title: "Agriculture Products",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
    {
      id: 1,
      icon: <TreeIcon />,
      title: "100% Guaranteed",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
  ];
  return (
    <Container>
      <section className="flex gap-3 md:gap-6 mb-3 md:mb-6 flex-wrap justify-center ">
        {benefitsData.map((benefit) => (
          <div className={`relative max-w-90 lg:max-w-111 bg-[url(/images/shapes/benefits-shape.svg)] bg-no-repeat bg-center bg-contain py-11 px-8.5 cursor-pointer `} key={benefit.title}>
            <div className=" w-full ">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 lg:p-4 bg-secondary rounded-full  ">
                  {benefit.icon}
                </div>
                <h5 className="font-medium text-2xl lg:text-[26px] text-text-color leading-7.5  ">
                  {benefit.title}
                </h5>
              </div>
              <div className="border-t border-[#ecedec] pt-3 lg:pt-6.5 ">
                <p className="font-roboto text-base text-[rgba(64,74,61,0.80)] leading-6.5 w-[90%] ">
                  {benefit.description}
                </p>
              </div>
            </div>
            
          </div>
        ))}
      </section>
    </Container>
  );
};

export default Benefits;
