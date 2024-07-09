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
      <div className="size-32 relative min-w-32 min-h-32 flex justify-center items-center">
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
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="text-xl">{company}</div>
            <div className="text-lg">-</div>
            <div className="text-lg">{position}</div>
          </div>
          <div className="text-sm">{date}</div>
        </div>
        <div className="800">{description}</div>
      </div>
    </div>
  );
};

//bg-white bg-opacity-20 backdrop-blur-xl shadow-[inset_0px_0px_50px_5px_rgba(255,255,255,0.15)]

export default ExperienceCard;
