import React from "react";
import ExperienceCard from "./Components/ExperienceCard";
import Skill from "./Components/Skill";
import Link from "./Components/Link";
import ProjectCard from "./Components/ProjectCard";
import { introData, skillsData, experienceData, projectData } from "./data";

export default function Home() {
  const basePath = process.env.BASEPATH;
  const Header: React.FC = () => {
    return (
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex-col m-4 flex-grow">
          <div className="my-4 text-5xl md:text-8xl font-bold">{introData.name}</div>
          <div className="my-4 ml-2 text-xl">{introData.subheading}</div>
          <div className="my-8 ml-2 text-base text-slate-300">
            {introData.mainText}
          </div>
        </div>
        <div className="flex flex-row md:flex-col -mt-4 md:m-4 justify-center">
          <Link
            name="Resume"
            href={basePath ? `${basePath}/Files/HarmanSinghResume.pdf` : "/Files/HarmanSinghResume.pdf"}
            iconSrc={basePath ? `${basePath}/Images/resumeLogo.png` : "/Images/resumeLogo.png"}
          />
          <Link
            name="Github"
            href="https://github.com/Harman-Singh-2003"
            iconSrc={basePath ? `${basePath}/Images/githubLogo.png` : "/Images/githubLogo.png"}
          />
          <Link
            name="LinkedIn"
            href="https://www.linkedin.com/in/harman-singh2003/"
            iconSrc={basePath ? `${basePath}/Images/linkedinLogo.webp` : "/Images/linkedinLogo.webp"}
          />
        </div>
      </div>
    );
  };

  const NavBar: React.FC = () => {
    return (
      <div className="bg-cyan-400 flex justify-center border-b-4 border-red-600">
        <div>
          <a href="#">Skills</a>
        </div>
        <div>
          <a href="#">Experience</a>
        </div>
        <div>
          <a href="#">Projects</a>
        </div>
      </div>
    );
  };

  const Skills: React.FC = () => {
    return (
      <div className="m-4 flex flex-wrap justify-center md:justify-start">
        {Object.keys(skillsData).map((key, index) => {
          const skill = skillsData[key];
          return (
            <Skill
              key={index}
              text={skill.text}
              imgSrc={skill.imgSrc}
              altText={skill.altText}
            />
          );
        })}
      </div>
    );
  };

  const Experience: React.FC = () => {
    return (
      <div className="md:px-8 space-y-4">
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            company={experience.company}
            position={experience.position}
            date={experience.date}
            description={experience.description}
            image={experience.image}
          />
        ))}
      </div>
    );
  };

  const Projects: React.FC = () => {
    return (
      <div className="md:px-8 space-y-4">
        {projectData.map((Project, index) => (
          <ProjectCard
            key={index}
            title={Project.title}
            description={Project.description}
            image={Project.image}
          />
        ))}
      </div>
    );
  };

  return (
    <main
      className="bg-gradient-to-br"
      style={{
        background:
          "radial-gradient(circle, rgba(0,11,74,1) 0%, rgba(9,14,23,1) 88%)",
      }}
    >
      <div className="mx-auto min-h-screen max-w-screen-xl">
        <Header />
        {/* <NavBar /> */}
        <div className="p-4 text-left text-2xl font-bold border-b-2 border-white border-opacity-20">
          Skills
        </div>
        <Skills />
        <div className="p-4 text-left text-2xl font-bold border-b-2 border-white border-opacity-20">
          Experience
        </div>
        <Experience />
        <div className="p-4 text-left text-2xl font-bold border-b-2 border-white border-opacity-20">
          Projects
        </div>
        <Projects />
      </div>
    </main>
  );
}
