import React from "react";
import ExperienceCard from "./Components/ExperienceCard";

export default function Home() {

  const Header: React.FC = () => {
    return (
      <div className="bg-lime-400 flex flex-row justify-around">
        <div className="bg-blue-500 flex-col m-4 flex-grow">
          <div className="m-4">Name</div>
          <div className="m-4" >Intro Text</div>
        </div>
        <div className="bg-red-500 flex flex-col m-4 flex-grow max-w-64">
          <div className="m-4">Resume</div>
          <div className="m-4">Github</div>
          <div className="m-4">LinkedIn</div>
        </div>
      </div>
    );
  };

  const NavBar: React.FC = () => {
    return (
      <nav className="bg-cyan-400">
        NavBar
      </nav>
    );
  };

  const Skills: React.FC = () => {
    return (
      <div className="bg-purple-400">
        Skills
      </div>
    );
  }

  const Experience: React.FC = () => {
    return (
      <div className="bg-blue-400 p-8 space-y-4">
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
      </div>
    );
  }
  
  const Projects: React.FC = () => {
    return (
      <div className="bg-yellow-400">
        Projects
      </div>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12">
      <Header />
      <NavBar />
      <Skills />
      <Experience />
      <Projects />
      <h1 className="text-4xl font-bold text-center">
        portfolio
      </h1>
    </main>
  );
}
