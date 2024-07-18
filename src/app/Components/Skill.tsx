import React from "react";
import Image from "next/image";

interface Props {
  text: string;
  imgSrc: string;
  altText: string;
}

const Skill: React.FC<Props> = ({ text, imgSrc, altText }) => {
  return (
    <div className="inline-flex p-2 items-center rounded-md m-2 bg-white bg-opacity-10 backdrop-blur-xl shadow-[inset_0px_0px_50px_0px_rgba(255,255,255,0.15)]">
      <div className="size-4 md:size-6 lg:size-6 relative">
        <Image
          src={imgSrc}
          alt={altText}
          layout="responsive"
          width={50}
          height={50}
          className="rounded-sm"
        />
      </div>
      <div className="pl-2 text-sm md:text-base ">{text}</div>
    </div>
  );
};

export default Skill;
