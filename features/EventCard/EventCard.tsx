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
} from "react-icons/fa";

type EventCardProps = {
  eventData: any;
} & React.HTMLProps<HTMLDivElement>;

export const EventCard = ({ eventData }: EventCardProps) => {
  const { buttonText } = eventData;
  return (
    <>
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

      <div className="relative w-[350px] h-[509px] px-8 pb-8 flex-col justify-end items-center gap-2.5 inline-flex">
        <div className="relative w-[248px] h-[340px] bg-zinc-900 rounded-lg shadow border border-neutral-700 flex-col justify-start items-center gap-2.5 flex">
          <div className="w-20 h-20 left-[84px] top-[-40px] absolute bg-zinc-900 rounded-full border border-neutral-700" />
          <UserAvatar
            className="left-[87px] top-[-36px] absolute"
            imgSrc="/56ad21ebc1af7d6e12e4ded5e050de79.png"
            userName={"my-user"}
            width={73}
            height={73}
          />
          <div className="w-[140px] h-[46px] left-[9px] top-[42px] absolute text-center text-yellow-600 text-xl font-bold">
            Grańsko z Patisonem
          </div>
          <div className="w-[140px] left-[9px] top-[103px] absolute text-zinc-300 text-[10px] font-bold">
            Zapraszam wszystkich na wspólne granie w zombieside elo elo 320,
            wszyscy mile widziani, możesz przyjść nawet jak nigdy nie grałeś/aś
          </div>
          <div className="w-[148px] h-[124px] left-[150px] top-[52px] absolute bg-white bg-opacity-0 flex-col justify-center items-center flex">
            <Image
              src="/ed1f6b2ec1ced8ec120d9ae430cf0532.png"
              alt="board-game-img"
              loading="lazy"
              width={130}
              height={67}
            />
          </div>
          <InfoPill
            className="left-[-41px] top-[204px] absolute text-xs"
            text={"21 : 30"}
            type="small"
            icon={<FaRegClock size={20} />}
          />
          <InfoPill
            className="left-[121px] top-[203px] absolute text-[10px]"
            text="Poniedziałek 23.07.23r."
            type="small"
            icon={<FaRegCalendarAlt size={20} />}
          />
          <InfoPill
            className="left-[-41px] top-[241px] absolute text-[10px]"
            text="Pub Exp Szczecin"
            type="small"
            icon={<FaMapMarkerAlt size={20} />}
          />
          <InfoPill
            className="left-[203px] top-[241px] absolute text-xs"
            text="6 / 12"
            type="small"
            icon={<FaUserAlt size={20} />}
          />
          <InfoPill
            className="left-[-41px] top-[278px] absolute text-xs"
            text="FREE"
            type="small"
            icon={<FaDollarSign size={20} />}
          />
          <Button
            className="left-[85px] top-[288px] absolute"
            text={buttonText}
            icon={<FaCheck size={20} />}
          />
        </div>
      </div>
    </>
  );
};
