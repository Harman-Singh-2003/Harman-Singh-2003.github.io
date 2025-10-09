"use client";

import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "./ui/icons";
import { projectData, type ProjectData } from "../data";

export function Projects() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container mx-auto px-6 py-6 md:py-10 max-w-7xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
              <Card key={index} className="group hover:border-accent transition-colors">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg bg-slate-800 bg-opacity-50">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  {project.github && project.github !== "#" && (
                    <Button size="sm" variant="outline" asChild className="gap-2 bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <Button size="sm" variant="outline" asChild className="gap-2 bg-transparent">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
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
