import LeafShape from "@/public/images/shapes/LeafShape";

const SectionHeading = ({
  background,
  children,
}: {
  background?: string;
  children: string;
}) => {
  return (
    <span
      className={`rounded-[30px] ${background ? background : "bg-white"} py-2 px-4.5 inline-flex justify-center items-center gap-2 `}
    >
      <LeafShape className="text-primary" />
      <h6 className="font-signika font-medium text-text-color text-sm leading-6 tracking-[0.5px] capitalize ">
        {children}
      </h6>
    </span>
  );
};

export default SectionHeading;
