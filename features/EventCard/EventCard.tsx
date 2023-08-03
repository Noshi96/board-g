"use client";
import { Button, InfoPill, UserAvatar } from "@/ui";
import Image from "next/image";
import {
  FaCheck,
  FaUserAlt,
  FaDollarSign,
  FaRegCalendarAlt,
  FaRegClock,
  FaMapMarkerAlt,
  FaDiceD6,
} from "react-icons/fa";
import { EventListElement } from "../EventListElement";

type EventCardProps = {
  eventData: any;
} & React.HTMLProps<HTMLDivElement>;

export const EventCard = ({ eventData }: EventCardProps) => {
  const { buttonText } = eventData;

  const avatarComponent = (
    <UserAvatar
      imgSrc="/56ad21ebc1af7d6e12e4ded5e050de79.png"
      userName={"my-user"}
      width={73}
      height={73}
    />
  );

  const logoComponent = (
    <Image
      src="/ed1f6b2ec1ced8ec120d9ae430cf0532.png"
      alt="board-game-img"
      loading="lazy"
      width={130}
      height={67}
    />
  );

  return (
    <>
      <EventListElement
        avatar={avatarComponent}
        logo={logoComponent}
        title="Grańsko z Patisonem"
        remainingTime={"2"}
        date={"27.03"}
      />
      <div>
        <Button text={buttonText} icon={<FaCheck size={20} />} />
      </div>
      <div>
        <InfoPill
          text={buttonText}
          type="small"
          icon={<FaUserAlt size={20} />}
        />
        <InfoPill
          text={buttonText}
          type="small"
          icon={<FaDollarSign size={20} />}
        />
        <InfoPill
          text={buttonText}
          type="small"
          icon={<FaRegCalendarAlt size={20} />}
        />
        <InfoPill
          text={buttonText}
          type="small"
          icon={<FaRegClock size={20} />}
        />
      </div>

      <div className="relative min-w-[350px] h-[510px] md:w-full md:max-w-[1113px] md:h-fit px-8 pb-8 flex-col justify-end md:justify-center items-center gap-2.5 inline-flex">
        <div className="relative min-w-[248px] h-[340px] md:w-full md:max-w-[975px] md:h-fit md:py-14 bg-zinc-900 rounded-lg shadow border border-neutral-700 flex-col justify-start items-center gap-2.5 flex">
          <UserAvatar
            className="left-[50%] top-[-36px] absolute -translate-x-2/4"
            imgSrc="/56ad21ebc1af7d6e12e4ded5e050de79.png"
            userName={"my-user"}
            width={73}
            height={73}
          />
          <Image
            className="absolute top-3/4 -translate-y-2/4"
            src="/8b709712cd941e4f5f4465c49d91729f.png"
            alt="dice img"
            width={246}
            height={246}
          />
          <div className="w-full h-fit relative md:flex md:justify-between">
            <span className=" md:leading-tight w-[140px] h-[46px] md:w-full md:h-full left-[9px] top-[42px] md:inset-x-auto md:inset-y-auto absolute md:relative text-center md:text-left text-yellow-600 text-xl md:text-[40px] font-bold md:py-9 md:px-9 md:items-center md:flex">
              Grańsko z Patisonem
            </span>
            <div className="w-[148px] h-[124px] md:w-[216px] md:h-[124px] left-[150px] top-[52px] md:inset-x-auto md:inset-y-auto absolute md:relative bg-white bg-opacity-0 flex-col justify-center items-center flex">
              <Image
                src="/ed1f6b2ec1ced8ec120d9ae430cf0532.png"
                alt="board-game-img"
                loading="lazy"
                width={130}
                height={67}
              />
            </div>
          </div>

          <div className="w-[140px] left-[9px] top-[103px] absolute text-zinc-300 text-[10px] font-bold md:hidden">
            Zapraszam wszystkich na wspólne granie w zombieside elo elo 320,
            wszyscy mile widziani, możesz przyjść nawet jak nigdy nie grałeś/aś
          </div>
          <div className="md:flex justify-between md:w-full md:flex-wrap xl:flex-nowrap md:h-full hidden md:block pl-9 gap-8">
            <ul>
              <li className="flex gap-3 mb-4 md:flex-wrap xl:flex-nowrap">
                <span className="self-center w-[114px] text-base font-bold text-zinc-300">
                  Kiedy gramy:
                </span>
                <InfoPill
                  className="text-base"
                  text="Poniedziałek 23.07.23r."
                  type="small"
                  icon={<FaRegCalendarAlt size={22} />}
                />
                <InfoPill
                  className="text-base"
                  text={"21 : 30"}
                  type="small"
                  icon={<FaRegClock size={22} />}
                />
              </li>
              <li className="flex gap-3 mb-4">
                <span className="self-center w-[114px] text-base font-bold text-zinc-300">
                  W co gramy:
                </span>
                <InfoPill
                  className="text-base"
                  text="Zombicide Western"
                  type="small"
                  icon={<FaDiceD6 size={22} />}
                />
              </li>
              <li className="flex gap-3 mb-4">
                <span className="self-center w-[114px] text-base font-bold text-zinc-300">
                  Gdzie gramy:
                </span>
                <InfoPill
                  className="text-base"
                  text="Pub Exp Szczecin"
                  type="small"
                  icon={<FaMapMarkerAlt size={22} />}
                />
              </li>
              <li className="flex gap-3 mb-4">
                <span className="self-center w-[114px] text-base font-bold text-zinc-300">
                  Ile nas jest:
                </span>
                <InfoPill
                  className="text-base"
                  text="6 / 12"
                  type="small"
                  icon={<FaUserAlt size={22} />}
                />
              </li>
              <li className="flex gap-3">
                <span className="self-center w-[114px] text-base font-bold text-zinc-300">
                  Ile za wejście:
                </span>
                <InfoPill
                  className="text-base "
                  text="FREE"
                  type="small"
                  icon={<FaDollarSign size={20} />}
                />
              </li>
            </ul>
            <div className="flex flex-col gap-4 px-8 xl:justify-between">
              <span className="text-zinc-300 text-[20px] font-bold z-10">
                Zapraszam wszystkich na wspólne granie w zombieside elo elo 320,
                wszyscy mile widziani, możesz przyjść nawet jak nigdy nie
                grałeś/aś
              </span>
              <Button
                className="justify-self-end self-end md:w-[220px] md:h-[74px]"
                text={buttonText}
                icon={<FaCheck size={20} />}
              />
            </div>
          </div>
          <InfoPill
            className="left-[121px] top-[203px] absolute text-[10px] md:hidden"
            text="Poniedziałek 23.07.23r."
            type="small"
            icon={<FaRegCalendarAlt size={20} />}
          />
          <InfoPill
            className="left-[-41px] top-[204px] absolute text-xs md:hidden"
            text={"21 : 30"}
            type="small"
            icon={<FaRegClock size={20} />}
          />
          <InfoPill
            className="left-[-41px] top-[241px] absolute text-[10px] md:hidden"
            text="Pub Exp Szczecin"
            type="small"
            icon={<FaMapMarkerAlt size={20} />}
          />
          <InfoPill
            className="left-[203px] top-[241px] absolute text-xs md:hidden"
            text="6 / 12"
            type="small"
            icon={<FaUserAlt size={20} />}
          />
          <InfoPill
            className="left-[-41px] top-[278px] absolute text-xs md:hidden"
            text="FREE"
            type="small"
            icon={<FaDollarSign size={20} />}
          />
          <Button
            className="left-[85px] top-[288px] absolute md:hidden"
            text={buttonText}
            icon={<FaCheck size={20} />}
          />
        </div>
      </div>
    </>
  );
};
