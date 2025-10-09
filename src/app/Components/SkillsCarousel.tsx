"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface SkillData {
  text: string;
  imgSrc: string;
  altText: string;
}

interface SkillsCarouselProps {
  skills: { [key: string]: SkillData };
  basePath?: string;
}

export function SkillsCarousel({ skills, basePath }: SkillsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const skillsArray = Object.values(skills);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isDragging) return;

    const scroll = () => {
      const maxScroll = scrollContainer.scrollWidth / 3;
      
      if (scrollContainer.scrollLeft >= maxScroll) {
        // Reset without smooth scrolling
        scrollContainer.style.scrollBehavior = 'auto';
        scrollContainer.scrollLeft = 0;
        // Re-enable smooth scrolling after a frame
        requestAnimationFrame(() => {
          scrollContainer.style.scrollBehavior = 'smooth';
        });
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="container mx-auto px-6 py-8 md:py-12 max-w-7xl">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills</h2>
        </div>

        <div className="relative group">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0f1c] via-[#05070d]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#03050a] via-[#05070d]/90 to-transparent z-10 pointer-events-none" />

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-hidden py-4 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
          >
            {/* Triple skills for smooth infinite scroll */}
            {[...skillsArray, ...skillsArray, ...skillsArray].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 group/skill"
              >
                <div 
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white border-opacity-[0.08] hover:border-opacity-20 transition-all duration-300"
                  style={{
                    background: "rgba(17, 25, 40, 0.5)",
                    backdropFilter: "blur(12px) saturate(130%)",
                    WebkitBackdropFilter: "blur(12px) saturate(130%)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <div className="size-6 relative flex-shrink-0">
                    <Image
                      src={basePath ? `${basePath}${skill.imgSrc}` : skill.imgSrc}
                      alt={skill.altText}
                      width={24}
                      height={24}
                      className="rounded-sm object-contain"
                      draggable={false}
                    />
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">
                    {skill.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
