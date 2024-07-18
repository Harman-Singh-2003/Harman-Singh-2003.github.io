import React from "react";
import Image from "next/image";

interface Props {
  company: string;
  position: string;
  date: string;
  description: string;
  image: string;
}

const ExperienceCard: React.FC<Props> = ({
  company,
  position,
  date,
  description,
  image,
}) => {
  return (
    <div className="p-4 flex rounded-xl">
      <div className="size-16 md:size-32 relative flex justify-center items-center">
        <Image
          src={image}
          layout="responsive"
          width={50}
          height={50}
          className="rounded-sm"
          alt={""}
        />
      </div>
      <div className="pl-4 flex flex-col flex-grow">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-2">
          <div className="flex space-x-2 items-center">
            <div className="text-sm md:text-lg text-center">{company}</div>
            <div className="text-sm md:text-lg">-</div>
            <div className="text-sm md:text-lg text-center">{position}</div>
          </div>
          <div className="text-xs md:text-sm">{date}</div>
        </div>
        <div className="text-xs md:text-base text-slate-300">{description}</div>
      </div>
    </div>
  );
};

//bg-white bg-opacity-20 backdrop-blur-xl shadow-[inset_0px_0px_50px_5px_rgba(255,255,255,0.15)]

export default ExperienceCard;
