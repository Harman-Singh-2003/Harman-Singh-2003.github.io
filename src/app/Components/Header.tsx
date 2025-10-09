"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink as ExternalLinkIcon } from "./ui/icons";

interface SkillData {
  text: string;
  imgSrc: string;
  altText: string;
}

interface HeaderProps {
  name: string;
  subheading: string;
  mainText: string;
  resumeLink: string;
  githubLink: string;
  linkedinLink: string;
  basePath?: string;
  skills?: { [key: string]: SkillData };
}

export function Header({
  name,
  subheading,
  mainText,
  resumeLink,
  githubLink,
  linkedinLink,
  basePath,
  skills,
}: HeaderProps) {
  const links = [
    {
      name: "Resume",
      href: basePath ? `${basePath}/Files/HarmanSinghResume.pdf` : "/Files/HarmanSinghResume.pdf",
      iconSrc: basePath ? `${basePath}/Images/resumeLogo.png` : "/Images/resumeLogo.png",
    },
    {
      name: "Github",
      href: "https://github.com/Harman-Singh-2003",
      iconSrc: basePath ? `${basePath}/Images/githubLogo.png` : "/Images/githubLogo.png",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/harman-singh2003/",
      iconSrc: basePath ? `${basePath}/Images/linkedinLogo.webp` : "/Images/linkedinLogo.webp",
    },
  ];

  const skillsArray = skills ? Object.values(skills) : [];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll functionality for skills carousel
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovering) return;

    const scroll = () => {
      const maxScroll = scrollContainer.scrollWidth / 3;
      
      if (scrollContainer.scrollLeft >= maxScroll) {
        // Reset without smooth scrolling
        scrollContainer.style.scrollBehavior = 'auto';
        scrollContainer.scrollLeft = 0;
        // Re-enable smooth scrolling after a frame
        requestAnimationFrame(() => {
          if (scrollContainer) {
            scrollContainer.style.scrollBehavior = 'smooth';
          }
        });
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    /* Full-bleed hero section with edge-to-edge background */
    <section className="relative w-full overflow-hidden">
      {/* Spacey background layer - cosmic aurora effect with radial gradients */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 
            "radial-gradient(1100px 700px at 20% 10%, rgba(56, 189, 248, 0.15), transparent 60%), " +
            "radial-gradient(900px 600px at 80% 20%, rgba(139, 92, 246, 0.12), transparent 60%), " +
            "radial-gradient(1200px 800px at 50% 80%, rgba(232, 121, 249, 0.08), transparent 65%), " +
            "#0a0f1c",
        }}
      />

      {/* Centered content container - matches site width */}
      <div className="container mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="relative space-y-8">
          {/* Main Content */}
          <div className="space-y-4">
            {/* Fluid typography - scales with viewport */}
            <h1 
              className="font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-slate-300 bg-clip-text text-transparent"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
            >
              {name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 font-medium">{subheading}</p>
          </div>
          
          <p className="text-base md:text-lg leading-relaxed max-w-3xl text-slate-200">
            {mainText}
          </p>

          {/* CTA Buttons/Chips */}
          <div className="flex flex-wrap gap-3 items-center pt-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="size-5 relative flex-shrink-0">
                  <Image
                    src={link.iconSrc}
                    alt={`${link.name} icon`}
                    width={20}
                    height={20}
                    className="rounded-sm"
                  />
                </div>
                <span className="text-sm font-medium text-white">
                  {link.name}
                </span>
                <ExternalLinkIcon className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Skills carousel integrated inside hero */}
          {skillsArray.length > 0 && (
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Skills
              </h3>
            <div 
              ref={scrollRef}
              className="overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              }}
            >
              <div className="flex gap-2 w-max">
                {/* Triple skills for smooth infinite scroll */}
                {[...skillsArray, ...skillsArray, ...skillsArray].map((skill, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                  >
                    <div 
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                    >
                      <div className="size-5 relative flex-shrink-0">
                        <Image
                          src={basePath ? `${basePath}${skill.imgSrc}` : skill.imgSrc}
                          alt={skill.altText}
                          width={20}
                          height={20}
                          className="rounded-sm object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium whitespace-nowrap text-slate-300">
                        {skill.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom separator - opacity gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none flex justify-center">
        <div 
          className="w-full max-w-7xl h-full"
          style={{
            background: "white",
            opacity: 0.1,
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        />
      </div>
    </section>
  );
}
