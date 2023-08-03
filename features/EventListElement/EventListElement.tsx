"use client";

import Image from "next/image";

type EventListElementProps = {
  title: string;
  logo: JSX.Element;
  avatar: JSX.Element;
  date: string;
  remainingTime: string;
} & React.HTMLProps<HTMLButtonElement>;

export const EventListElement = ({
  title,
  logo: Logo,
  avatar: Avatar,
  date,
  remainingTime,
}: EventListElementProps) => {
  return (
    <div className="w-[605px] h-[108px] px-4 pt-[9px] pb-2 bg-zinc-900 rounded-lg shadow border border-neutral-700 justify-between items-center inline-flex">
      <div className="w-[148px] h-[84px] bg-white bg-opacity-0 flex-col justify-center items-center inline-flex">
        {Logo}
      </div>
      <div className="w-[140px] h-auto text-center text-yellow-600 text-xl font-bold">
        {title}
      </div>
      <div className="w-[60px] h-[60px] bg-zinc-900 rounded-full border border-neutral-700">
        {Avatar}
      </div>
      <div className="h-[84px] flex-col justify-between items-center gap-[17px] inline-flex">
        <button className="h-[42px] px-1 py-2 bg-amber-600 rounded-lg border border-neutral-700 justify-start items-center inline-flex">
          <Image
            className="w-[34px] h-[34px]"
            src="/image3.png"
            alt="dot-icon"
            width={34}
            height={34}
          />
          <span className="text-black text-sm font-bold align-center px-2">
            Szczegóły
          </span>
        </button>
        <div className="w-[127px] h-6 px-1 py-2 bg-zinc-300 rounded-lg border border-black justify-start items-center inline-flex">
          <span className="grow shrink basis-0 text-center text-black text-xs font-bold">
            {`za ${remainingTime} dni`}
          </span>
          <span className="w-[50px] text-center text-black text-xs font-bold">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

<div className="w-[605px] h-[108px] px-4 pt-[9px] pb-2 bg-zinc-900 rounded-lg shadow border border-neutral-700 justify-between items-center inline-flex">
  <div className="w-[148px] h-[84px] bg-white bg-opacity-0 flex-col justify-center items-center inline-flex">
    <img
      className="w-[130px] h-[67px]"
      src="https://via.placeholder.com/130x67"
    />
  </div>
  <div className="w-[140px] h-[46px] text-center text-yellow-600 text-xl font-bold">
    Grańsko z Patisonem
  </div>
  <div className="w-[60px] h-[60px] relative">
    <div className="w-[60px] h-[60px] left-0 top-0 absolute bg-zinc-900 rounded-full border border-neutral-700" />
    <img
      className="w-[54.75px] h-[54.75px] left-[2.26px] top-[3px] absolute"
      src="https://via.placeholder.com/55x55"
    />
  </div>
  <div className="h-[84px] flex-col justify-between items-center gap-[17px] inline-flex">
    <div className="h-[42px] px-1 py-2 bg-amber-600 rounded-lg border border-neutral-700 justify-start items-center inline-flex">
      <img
        className="w-[34px] h-[34px]"
        src="https://via.placeholder.com/34x34"
      />
      <div className="w-[89px] self-stretch text-black text-sm font-bold">
        Szczegóły
      </div>
    </div>
    <div className="w-[127px] h-6 px-1 py-2 bg-zinc-300 rounded-lg border border-black justify-start items-center inline-flex">
      <div className="grow shrink basis-0 self-stretch text-center text-black text-xs font-bold">
        za 2 dni
      </div>
      <div className="w-[50px] self-stretch text-center text-black text-xs font-bold">
        27.03
      </div>
    </div>
  </div>
</div>;
