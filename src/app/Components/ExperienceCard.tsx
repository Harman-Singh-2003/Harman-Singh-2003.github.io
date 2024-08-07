"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  company: string;
  position: string;
  date: string;
  description: string | JSX.Element;
  image: string;
  delay?: string;
}

const ExperienceCard: React.FC<Props> = ({
  company,
  position,
  date,
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
      <div className="size-12 md:size-32 relative flex justify-center items-center flex-shrink-0">
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
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-4 md:mb-2">
          <div className="flex space-x-2 items-center">
            <div className="text-sm md:text-lg text-center">{company}</div>
            <div className="text-sm md:text-lg">-</div>
            <div className="text-sm md:text-lg text-center">{position}</div>
          </div>
          <div className="text-sm md:text-sm">{date}</div>
        </div>
        <div className="text-sm md:text-base text-slate-300 -ml-14 md:ml-0">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
