interface SkillData {
  text: string;
  imgSrc: string;
  altText: string;
}

interface SkillsData {
  [key: string]: SkillData;
}

const basePath = process.env.BASEPATH;

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
    description: (
      <p>
        • Developed an entire backend to increase the security team&apos;s efficiency
        at managing vulnerabilities using <b>Python</b> and <b>FastAPI</b>
        <br />
        • Secured access to the backend by implementing <b>Authentication and Authorization</b> using <b>OAuth2</b> and <b>Okta</b>
        <br />
        • Created automated deploys to Github pages using custom <b>workflows</b> through Github Actions
        <br />

      </p>
    ),
    image: `${basePath}/Images/CienaLogo.png`,
  },
  {
    company: "Wave",
    position: "Software Engineer Intern",
    date: "January 2024 - April 2024",
    description: (<p>
     Built reusable UI components in React Native and TypeScript, ensuring consistency across the mobile and web applications. I also streamlined data retrieval and caching using GraphQL and Apollo, improving app performance. Also created bug fixes and manage database migrations in Django. Furthermore, I improved monitoring and alerting systems with Terraform and Datadog. My work on AWS S3 buckets led to a significant storage cost reduction by deleting unused data (nearly 9 TB!).
      </p>),
    image: `${basePath}/Images/WaveLogo.webp`,
  },
  {
    company: "CBG",
    position: "Programmer Co-op",
    date: "June 2023 - August 2023",
    description: (<p>I modernized their PHP data acces layer (5.3 to 8.1) for enhanced security and PostgreSQL compatibility. I created integration tests (PHPUnit) and documented testing procedures for future engineers. I also automated testing with bash scripts, streamlining the process and ensuring data consistency. This project improved data security and established a robust testing framework.</p>),
    image: `${basePath}/Images/CBGLogo.png`,
  },
];

export const skillsData: SkillsData = {
  typescript: {
    text: "TypeScript",
    imgSrc: `${basePath}/Images/typescriptLogo.png`,
    altText: "TypeScript Logo",
  },
  javascript: {
    text: "JavaScript",
    imgSrc: `${basePath}/Images/javascriptLogo.png`,
    altText: "JavaScript Logo",
  },
  react: {
    text: "React",
    imgSrc: `${basePath}/Images/reactLogo.png`,
    altText: "React Logo",
  },
  nextjs: {
    text: "Next.js",
    imgSrc: `${basePath}/Images/nextjsLogo.png`,
    altText: "Next.js Logo",
  },
  python: {
    text: "Python",
    imgSrc: `${basePath}/Images/pythonLogo.png`,
    altText: "Python Logo",
  },
  html: {
    text: "HTML",
    imgSrc: `${basePath}/Images/htmlLogo.png`,
    altText: "HTML Logo",
  },
  css: {
    text: "CSS",
    imgSrc: `${basePath}/Images/cssLogo.png`,
    altText: "CSS Logo",
  },
  mysql: {
    text: "MySQL",
    imgSrc: `${basePath}/Images/mysqlLogo.png`,
    altText: "MySQL Logo",
  },
  postgresql: {
    text: "PostgreSQL",
    imgSrc: `${basePath}/Images/postgresqlLogo.png`,
    altText: "PostgreSQL Logo",
  },
  php: {
    text: "PHP",
    imgSrc: `${basePath}/Images/phpLogo.png`,
    altText: "PHP Logo",
  },
  terraform: {
    text: "Terraform",
    imgSrc: `${basePath}/Images/terraformLogo.png`,
    altText: "Terraform Logo",
  },
  cpp: {
    text: "C++",
    imgSrc: `${basePath}/Images/cppLogo.png`,
    altText: "C++ Logo",
  },
  graphql: {
    text: "GraphQL",
    imgSrc: `${basePath}/Images/graphqlLogo.png`,
    altText: "GraphQL Logo",
  },
  fastapi: {
    text: "FastAPI",
    imgSrc: `${basePath}/Images/fastapiLogo.png`,
    altText: "FastAPI Logo",
  },
  django: {
    text: "Django",
    imgSrc: `${basePath}/Images/djangoLogo.png`,
    altText: "Django Logo",
  },
  git: {
    text: "Git",
    imgSrc: `${basePath}/Images/gitLogo.png`,
    altText: "Git Logo",
  },
  githubActions: {
    text: "Github Actions",
    imgSrc: `${basePath}/Images/githubActionsLogo.png`,
    altText: "Github Actions Logo",
  },
};

export const projectData = [
  {
    title: "Project 1",
    description: "Description 1",
    image: `${basePath}/Images/CienaLogo.png`,
  },
  {
    title: "Project 2",
    description: "Description 2",
    image: `${basePath}/Images/CienaLogo.png`,
  },
  {
    title: "Project 3",
    description: "Description 3",
    image: `${basePath}/Images/CienaLogo.png`,
  },
];

// TODO: Add AWS, Oauth2 or auth, maybe okta,
