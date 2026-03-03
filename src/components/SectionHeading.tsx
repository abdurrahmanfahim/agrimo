import LeafShape from "@/public/images/shapes/LeafShape";

const SectionHeading = ({
  background,
  content,
}: {
  background?: string;
  content: string;
}) => {
  return (
    <span
      className={`rounded-[30px] ${background ? background : "bg-white"} py-2 px-4.5 inline-flex justify-center items-center gap-2 `}
    >
      <LeafShape />
      <h6 className="font-signika font-medium text-sm leading-6 tracking-[0.5px] ">
        {content}
      </h6>
    </span>
  );
};

export default SectionHeading;
