"use client";
import { Button } from "@/ui";
import { FaCheck } from "react-icons/fa";

type EventCardProps = {
  eventData: any;
} & React.HTMLProps<HTMLDivElement>;

export const EventCard = ({ eventData }: EventCardProps) => {
  return (
    <div>
      <Button text="Click me" icon={<FaCheck size={24} />} />
    </div>
  );
};
