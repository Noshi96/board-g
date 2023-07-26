"use client";

type ButtonProps = {
  text: string;
  icon: JSX.Element;
} & React.HTMLProps<HTMLButtonElement>;

export const Button = ({ text, icon, className }: ButtonProps) => {
  return (
    <button
      className={` ${
        className || ""
      } w-fit h-10 px-4 py-2 bg-amber-600 rounded-lg border border-neutral-700 justify-center items-center inline-flex gap-3 cursor-pointer`}>
      {icon ? icon : null}
      <div className="flex self-stretch text-black text-sm font-bold items-center justify-center overflow-hidden whitespace-nowrap">
        <span>{text}</span>
      </div>
    </button>
  );
};
