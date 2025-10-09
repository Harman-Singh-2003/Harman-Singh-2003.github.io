import React from "react";
import { Experience } from "./Components/ExperienceCard";
import { Projects } from "./Components/ProjectCard";
import { Header } from "./Components/Header";
import { introData, skillsData } from "./data";

export default function Home() {
  const basePath = process.env.BASEPATH;
  const backgroundImage = basePath ? `${basePath}/Images/Background.jpg` : "/Images/Background.jpg";

  return (
    <main
      className="min-h-screen relative bg-noise"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#05070d",
      }}
    >
      {/* Hero section with integrated skills carousel */}
      <Header
        name={introData.name}
        subheading={introData.subheading}
        mainText={introData.mainText}
        resumeLink={introData.resumeLink}
        githubLink={introData.githubLink}
        linkedinLink={introData.linkedin}
        basePath={basePath}
        skills={skillsData}
      />
      <Projects />
      {/* Main content sections - minimal spacing for smooth transitions */}
      <div className="pt-2">
        <Experience />
      </div>
    </main>
  );
}
