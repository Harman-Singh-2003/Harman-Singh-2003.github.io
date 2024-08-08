"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string | JSX.Element;
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
    >
      {" "}
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <div className="flex flex-row mb-4 md:mb-2 items-center">
            <div className="text-xl">{title}</div>
            <div className="md:hidden size-8 md:size-24 m-2 relative flex justify-center items-center flex-shrink-0 rounded-md p-1 bg-white bg-opacity-20 backdrop-blur-xl shadow-[inset_0px_0px_40px_0px_rgba(255,255,255,0.25)]">
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
        </div>
        <div className="text-sm md:text-base text-slate-300 md:ml-0">
          {description}
        </div>
      </div>
      <div className="hidden size-12 md:size-24 m-4 relative md:flex justify-center items-center flex-shrink-0 rounded-2xl p-6 bg-white bg-opacity-10 backdrop-blur-xl shadow-[inset_0px_0px_50px_0px_rgba(255,255,255,0.15)]">
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
