interface SkillData {
    text: string;
    imgSrc: string;
    altText: string;
  }
  
  interface SkillsData {
    [key: string]: SkillData;
  }

export const introData = {
    name: "Harman Singh",
    subheading: "Aspiring Software Engineer",
    mainText:
      "Completed my third year of Engineering at the University of Guelph. I am passionate about software development and am always looking to learn new technologies and improve my skills.",
    resumeLink: "Resume",
    githubLink: "Github",
    linkedin: "LinkedIn",
  };

export const experienceData = [
    {
      company: "Ciena",
      position: "Internal Tools Developer Intern",
      date: "May 2024 - Present",
      description: "Description 1",
      image: "/Images/CienaLogo.png",
    },
    {
      company: "Wave",
      position: "Software Engineer Intern",
      date: "January 2024 - April 2024",
      description: "Description 2",
      image: "/Images/WaveLogo.webp",
    },
    {
      company: "CBG",
      position: "Programmer Co-op",
      date: "June 2023 - August 2023",
      description: "Description 3",
      image: "/Images/CBGLogo.png",
    },
  ];

export const skillsData: SkillsData = {
    typescript: {
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
  
export const projectData = [
    {
      title: "Project 1",
      description: "Description 1",
      image: "/Images/CienaLogo.png",
    },
    {
      title: "Project 2",
      description: "Description 2",
      image: "/Images/CienaLogo.png",
    },
    {
      title: "Project 3",
      description: "Description 3",
      image: "/Images/CienaLogo.png",
    },

  ];