import React from "react";
import ExperienceCard from "./Components/ExperienceCard";
import Skill from "./Components/Skill";
import typescriptImg from "./Images/typescriptLogo.png";

interface SkillData {
  text: string;
  imgSrc: string;
  altText: string;
}

interface SkillsData {
  [key: string]: SkillData;
}

export default function Home() {
  const introData = {
    name: "Harman Singh",
    introText:
      "Aspiring full-stack software engineer currently in my 3rd of Engineering at the University of Guelph",
    resumeLink: "Resume",
    githubLink: "Github",
    linkedin: "LinkedIn",
  };

  const experienceData = [
    {
      company: "Company 1",
      position: "Position 1",
      date: "Date 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      company: "Company 2",
      position: "Position 2",
      date: "Date 2",
      description: "Description 2",
    },
    {
      company: "Company 3",
      position: "Position 3",
      date: "Date 3",
      description: "Description 3",
    },
  ];

  const skillsData: SkillsData = {
    typescript:{
      text: "TypeScript",
      imgSrc: "/Images/typescriptLogo.png",
      altText: "TypeScript Logo",
    },
    javascript: {
      text: "JavaScript",
      imgSrc: "/Images/javascriptLogo.png",
      altText: "JavaScript Logo",
    },
    react: {
      text: "React",
      imgSrc: "/Images/reactLogo.png",
      altText: "React Logo",
    },
    nextjs: {
      text: "Next.js",
      imgSrc: "/Images/nextjsLogo.png",
      altText: "Next.js Logo",
    },
    python: {
      text: "Python",
      imgSrc: "/Images/pythonLogo.png",
      altText: "Python Logo",
    },
    html: {
      text: "HTML",
      imgSrc: "/Images/htmlLogo.png",
      altText: "HTML Logo",
    },
    css: {
      text: "CSS",
      imgSrc: "/Images/cssLogo.png",
      altText: "CSS Logo",
    },
    mysql: {
      text: "MySQL",
      imgSrc: "/Images/mysqlLogo.png",
      altText: "MySQL Logo",
    },
    postgresql: {
      text: "PostgreSQL",
      imgSrc: "/Images/postgresqlLogo.png",
      altText: "PostgreSQL Logo",
    },
    php: {
      text: "PHP",
      imgSrc: "/Images/phpLogo.png",
      altText: "PHP Logo",
    },
    terraform: {
      text: "Terraform",
      imgSrc: "/Images/terraformLogo.png",
      altText: "Terraform Logo",
    },
    cpp: {
      text: "C++",
      imgSrc: "/Images/cppLogo.png",
      altText: "C++ Logo",
    },
    graphql: {
      text: "GraphQL",
      imgSrc: "/Images/graphqlLogo.png",
      altText: "GraphQL Logo",
    },
    fastapi: {
      text: "FastAPI",
      imgSrc: "/Images/fastapiLogo.png",
      altText: "FastAPI Logo",
    },
    django: {
      text: "Django",
      imgSrc: "/Images/djangoLogo.png",
      altText: "Django Logo",
    },
    git: {
      text: "Git",
      imgSrc: "/Images/gitLogo.png",
      altText: "Git Logo",
    },
    githubActions: {
      text: "Github Actions",
      imgSrc: "/Images/githubActionsLogo.png",
      altText: "Github Actions Logo",
    },
  };

  const Header: React.FC = () => {
    return (
      <div className="flex flex-row justify-around">
        <div className="flex-col m-4 flex-grow">
          <div className="my-4 text-3xl font-bold">{introData.name}</div>
          <div className="m-4">{introData.introText}</div>
        </div>
        <div className="flex flex-col m-4 flex-grow max-w-64">
          <div className="m-4">Resume</div>
          <div className="m-4">Github</div>
          <div className="m-4">LinkedIn</div>
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
      <div className="mx-4">
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
      <div className="px-8 space-y-4">
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            company={experience.company}
            position={experience.position}
            date={experience.date}
            description={experience.description}
          />
        ))}
      </div>
    );
  };

  const Projects: React.FC = () => {
    return <div className="bg-yellow-400">Projects</div>;
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
        <div className="p-4 text-left text-2xl font-bold">Skills</div>
        <Skills />
        <div className="p-4 text-left text-2xl font-bold">Experience</div>
        <Experience />
        <div className="p-4 text-left text-2xl font-bold">Projects</div>
        <Projects />
      </div>
    </main>
  );
}
