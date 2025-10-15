interface SkillData {
  text: string;
  imgSrc: string;
  altText: string;
}

interface SkillsData {
  [key: string]: SkillData;
}

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
}

export interface ExperienceData {
  company: string;
  position: string;
  date: string;
  location?: string;
  description: string | JSX.Element;
  highlights: string[];
  image: string;
  tags?: string[];
}

const basePath = process.env.BASEPATH;

export const introData = {
  name: "Harman Singh",
  subheading: "Aspiring Software Engineer",
  mainText:
    "Final year Engineering Systems and Computing student at the University of Guelph. Seeking new grad 2026 software engineering positions.",
  resumeLink: "Resume",
  githubLink: "Github",
  linkedin: "LinkedIn",
};

export const experienceData: ExperienceData[] = [
  {
    company: "Citi",
    position: "Software Engineer Intern",
    date: "May 2025 - Aug 2025",
    location: "Mississauga, ON",
    description: "Developed automation tools and infrastructure solutions for enterprise-scale banking systems, focusing on DevOps, CI/CD, and real-time monitoring.",
    highlights: [
      "Saved 5+ hours/week on compliance audits and enabled real-time dependency visibility by automating aggregation and tracking across 90+ repositories with Python and Autosys",
      "Built real-time health alerts using Python, RabbitMQ, and MongoDB, eliminating nightly manual checks and reducing on-call disruptions",
      "Cut deploy time by up to 95% by creating an OpenShift/Kubernetes Bash CLI to scale services to target pod counts, consolidating 100+ scripts and removing 150+ automated jobs",
      "Created CI/CD pipelines to automate deploys using Tekton and Harness"
    ],
    tags: ["Python", "Kubernetes", "OpenShift", "RabbitMQ", "MongoDB", "Tekton", "Harness", "Bash"],
    image: `/Images/CitiLogo.png`,
  },
  {
    company: "Ciena",
    position: "Internal Tools Developer Intern",
    date: "May 2024 - Aug 2024",
    location: "Ottawa, ON",
    description: "Built security vulnerability management platform with REST API, authentication, and cloud infrastructure for company-wide deployment.",
    highlights: [
      "Implemented a backend REST API with Python and FastAPI to manage infrastructure security vulnerabilities, reducing vulnerabilities across company devices by ~30%",
      "Led planning, scheduling, and backend/database development; coordinated with stakeholders for requirements and user input",
      "Added authentication/authorization with JWTs and Okta to protect backend resources",
      "Automated builds and deploys with GitHub Actions, providing the security team with up-to-date vulnerability data",
      "Deployed AWS API Gateway and Lambda with Terraform for company-wide access to the application"
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "JWT", "Okta", "AWS", "Terraform", "GitHub Actions"],
    image: `/Images/CienaLogo.png`,
  },
  {
    company: "Wave Financial",
    position: "Software Engineer Co-op",
    date: "Jan 2024 - Apr 2024",
    location: "Toronto, ON",
    description: "Full-stack development on accounting microservices and mobile applications serving 100,000+ active users, with focus on cost optimization and monitoring.",
    highlights: [
      "Developed and maintained accounting microservices with Python and Django, improving stability and UX",
      "Optimized AWS S3 using lifecycle policies, saving about $2K per year",
      "Built UI for a mobile app with 100,000+ active users using React Native, HTML/CSS, JavaScript/TypeScript, and GraphQL",
      "Drove data decisions with Redshift and SQL by analyzing 10,000+ data points for the ML team",
      "Reduced incident response time by implementing automated Slack alerts via Datadog and Terraform"
    ],
    tags: ["Python", "Django", "React Native", "TypeScript", "GraphQL", "AWS", "Terraform", "Datadog"],
    image: `/Images/WaveLogo.webp`,
  },
  {
    company: "Centre for Biodiversity Genomics",
    position: "Programmer Co-op",
    date: "Jun 2023 - Sep 2023",
    location: "Guelph, ON",
    description: "Backend modernization and database optimization for the world's largest DNA barcode repository with 10M+ specimen records.",
    highlights: [
      "Improved performance, security, and stability for the backend of the world's largest DNA barcode repository (10M+ specimen records) by migrating PHP 5.3 → 8.1",
      "Led code review of the database access layer, fixing bugs and improving maintainability",
      "Refactored legacy PostgreSQL queries to enhance security, speed, and maintainability"
    ],
    tags: ["PHP", "PostgreSQL", "Code Review", "Performance Optimization"],
    image: `/Images/CBGLogo.png`,
  },
];


export const skillsData: SkillsData = {
  typescript: {
    text: "TypeScript",
    imgSrc: `/Images/typescriptLogo.png`,
    altText: "TypeScript Logo",
  },
  javascript: {
    text: "JavaScript",
    imgSrc: `/Images/javascriptLogo.png`,
    altText: "JavaScript Logo",
  },
  react: {
    text: "React",
    imgSrc: `/Images/reactLogo.png`,
    altText: "React Logo",
  },
  nextjs: {
    text: "Next.js",
    imgSrc: `/Images/nextjsLogo.png`,
    altText: "Next.js Logo",
  },
  python: {
    text: "Python",
    imgSrc: `/Images/pythonLogo.png`,
    altText: "Python Logo",
  },
  html: {
    text: "HTML",
    imgSrc: `/Images/htmlLogo.png`,
    altText: "HTML Logo",
  },
  css: {
    text: "CSS",
    imgSrc: `/Images/cssLogo.png`,
    altText: "CSS Logo",
  },
  mysql: {
    text: "MySQL",
    imgSrc: `/Images/mysqlLogo.png`,
    altText: "MySQL Logo",
  },
  postgresql: {
    text: "PostgreSQL",
    imgSrc: `/Images/postgresqlLogo.png`,
    altText: "PostgreSQL Logo",
  },
  php: {
    text: "PHP",
    imgSrc: `/Images/phpLogo.png`,
    altText: "PHP Logo",
  },
  terraform: {
    text: "Terraform",
    imgSrc: `/Images/terraformLogo.png`,
    altText: "Terraform Logo",
  },
  cpp: {
    text: "C++",
    imgSrc: `/Images/cppLogo.png`,
    altText: "C++ Logo",
  },
  graphql: {
    text: "GraphQL",
    imgSrc: `/Images/graphqlLogo.png`,
    altText: "GraphQL Logo",
  },
  fastapi: {
    text: "FastAPI",
    imgSrc: `/Images/fastapiLogo.png`,
    altText: "FastAPI Logo",
  },
  django: {
    text: "Django",
    imgSrc: `/Images/djangoLogo.png`,
    altText: "Django Logo",
  },
  git: {
    text: "Git",
    imgSrc: `/Images/gitLogo.png`,
    altText: "Git Logo",
  },
  githubActions: {
    text: "Github Actions",
    imgSrc: `/Images/githubActionsLogo.png`,
    altText: "Github Actions Logo",
  },
};

export const projectData: ProjectData[] = [
  {
    title: "Ventr — Safer Walking Routes",
    description:
      "Web app that shows safest and fastest routes in Toronto using a risk-weighted graph and caching to keep responses fast.",
    tags: ["Python", "FastAPI", "NetworkX", "React", "Next.js", "Mapbox", "AWS", "Nginx", "Cloudflare"],
    image: "/Images/Ventr.png",
    github: "#",
    demo: "https://ventr.harman-singh.com",
  },
  {
    title: "Gryphspace — Campus Free Room Locator",
    description:
      "Website that helps students find unused classrooms at the University of Guelph for study space.",
    tags: ["Python", "React", "Next.js", "Cloudflare"],
    image: "/Images/Gryphspace.png",
    github: "#",
    demo: "https://Gryphspace.com",
  },
  {
    title: "Six-Axis Robot Arm",
    description:
      "3D-printed robotic arm with C++ and Python control on Arduino and Raspberry Pi for precise motor control.",
    tags: ["C++", "Python", "Arduino", "Raspberry Pi", "SolidWorks", "Fusion 360"],
    image: "/Images/robot-arm.JPG",
    github: "#",
    demo: "#",
  },
];

