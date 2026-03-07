import React from "react";
import HandFruit from "../icons/svg/HandFrout";
import SeedGrowIcon from "../icons/svg/SeedGrowIcon";
import TractorIcon from "../icons/svg/TractorIcon";
import TreeIcon from "../icons/svg/TreeIcon";
import Container from "./Container";

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
          <div
            className="relative w-full max-w-90 lg:max-w-111 aspect-444/280 bg-[url(/images/shapes/benefits-shape.svg)] bg-no-repeat bg-center bg-contain flex items-center justify-center "
            key={benefit.title}
          >
            <div className="py-4 sm:py-11 px-3 sm:px-8.5 w-full h-full flex flex-col items-start justify-center">
              <div className="flex items-center gap-4 mb-3 lg:mb-6">
                <div className="p-2 sm:p-4 bg-secondary rounded-full shrink-0">
                  {benefit.icon}
                </div>
                <h5 className="font-medium text-xl sm:text-[24px] text-text-color leading-tight max-w-[80%] ">
                  {benefit.title}
                </h5>
              </div>
              <div className="border-t border-[#ecedec] pt-3 lg:pt-6 w-full">
                <p className="font-roboto text-sm lg:text-base text-[rgba(64,74,61,0.80)] leading-relaxed line-clamp-3">
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
