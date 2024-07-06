import React from "react";

interface Props {
  company: string;
  position: string;
  date: string;
  description: string;
}

const ExperienceCard: React.FC<Props> = ({company, position, date, description}) => {

  return (
    <div className="p-4 flex rounded-xl">
      <img src="/next.svg" className="size-40"/>
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
