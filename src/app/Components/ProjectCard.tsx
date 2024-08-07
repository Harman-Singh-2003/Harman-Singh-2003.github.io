'use client'

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  delay?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  delay = "0s",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
<div
  ref={ref}
  className={`p-4 flex rounded-xl ${
    isVisible ? `animate-fade-in animate-slide-in-bottom` : "opacity-0"
  }`}
  style={{ animationDelay: isVisible ? delay : undefined }}
>      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-xl">{title}</div>
          </div>
        </div>
        <div className="mt-2">{description}</div>
      </div>
      <div className="size-12 md:size-32 relative flex justify-center items-center">
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