import React from "react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="p-4 flex rounded-xl justify-between">
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-xl">{title}</div>
          </div>
        </div>
        <div className="mt-2">{description}</div>
      </div>
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
    </div>
  );
};

export default ProjectCard;