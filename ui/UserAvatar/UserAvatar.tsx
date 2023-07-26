"use client";

import Image from "next/image";

type UserAvatarProps = {
  imgSrc: string;
  userName: string;
  width: number;
  height: number;
} & React.HTMLProps<HTMLImageElement>;

export const UserAvatar = ({
  imgSrc,
  userName,
  width,
  height,
  className,
}: UserAvatarProps) => {
  return (
    <Image
      className={className}
      alt={`${userName}-avatar`}
      src={imgSrc}
      loading="lazy"
      width={width}
      height={height}
    />
  );
};
