"use client";

import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Calendar } from "./ui/icons";
import { experienceData, type ExperienceData } from "../data";
import Image from "next/image";

export function Experience() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container mx-auto px-6 py-6 md:py-10 max-w-7xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {experienceData.map((experience, index) => (
              <Card key={index} className="group hover:border-blue-400 hover:border-opacity-40 transition-all duration-300">
              <CardHeader className="p-6 pb-4">
                <div className="flex items-start gap-4">
                  {/* Company Logo */}
                  <div className="size-16 md:size-20 relative flex-shrink-0 rounded-lg p-2 shadow-lg flex items-center justify-center">
                    <Image
                      src={experience.image}
                      width={80}
                      height={80}
                      className="rounded-md object-contain"
                      alt={`${experience.company} logo`}
                    />
                  </div>
                  
                  {/* Header Info */}
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xl md:text-2xl mb-1">{experience.position}</CardTitle>
                    <div className="font-semibold text-blue-300 mb-2">{experience.company}</div>
                    <div className="flex flex-col gap-1.5">
                      {experience.location && (
                        <div className="flex items-center gap-1.5 text-sm text-slate-400">
                          <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                          <span>{experience.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-sm text-slate-400">
                        <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                        <span>{experience.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6 space-y-4">
                {/* Description */}
                <CardDescription className="leading-relaxed">
                  {experience.description}
                </CardDescription>

                {/* Highlights/Bullet Points */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experience.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-slate-300 flex gap-2">
                        <span className="text-blue-400 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Tags */}
                {experience.tags && experience.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            ))}
          </div>
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