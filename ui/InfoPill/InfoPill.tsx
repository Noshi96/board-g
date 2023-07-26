"use client";

type InfoPillProps = {
  text: string;
  icon: JSX.Element;
  type: "large" | "small" | "fitContent";
} & React.HTMLProps<HTMLDivElement>;

export const InfoPill = ({
  text,
  icon,
  type = "fitContent",
  className,
}: InfoPillProps) => {
  return (
    <div
      className={`${
        type == "large" ? "w-[250px]" : "w-fit"
      } px-3 py-1 bg-zinc-300 rounded-lg border border-black justify-start items-center inline-flex gap-3 ${
        className || ""
      }`}>
      {icon ? icon : null}
      <div className=" overflow-hidden whitespace-nowrap flex grow shrink basis-0 self-stretch text-center text-black font-bold items-center">
        {text}
      </div>
    </div>
  );
};
