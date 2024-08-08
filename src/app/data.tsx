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
         I contributed to enhancing device security by creating a backend API
        using FastAPI and Python. This API empowered the security team to
        efficiently manage vulnerable assets. I was involved in the entire
        development lifecycle, encompassing backend, frontend, and database
        migrations to deliver a comprehensive solution within my internship. To
        protect sensitive backend data, I implemented robust authentication and
        authorization mechanisms utilizing JWTs and Okta. Furthermore, I
        streamlined the deployment process by automating builds and deploys,
        enabling the security team to access real-time information on company
        devices and vulnerabilities. Currently, I am developing a Next.js
        frontend and assisting in establishing the infrastructure to complete
        the project.
      </p>
    ),
    image: `${basePath}/Images/CienaLogo.png`,
  },
  {
    company: "Wave",
    position: "Software Engineer Intern",
    date: "January 2024 - April 2024",
    description: (
      <p>
        Built reusable UI components in React Native and TypeScript, ensuring
        consistency across the mobile and web applications. I also streamlined
        data retrieval and caching using GraphQL and Apollo, improving app
        performance. Also created bug fixes and manage database migrations in
        Django. Furthermore, I improved monitoring and alerting systems with
        Terraform and Datadog. My work on AWS S3 buckets led to a significant
        storage cost reduction by deleting unused data (nearly 9 TB!).
      </p>
    ),
    image: `${basePath}/Images/WaveLogo.webp`,
  },
  {
    company: "CBG",
    position: "Programmer Co-op",
    date: "June 2023 - August 2023",
    description: (
      <p>
        I modernized their PHP data acces layer (5.3 to 8.1) for enhanced
        security and PostgreSQL compatibility. I created integration tests
        (PHPUnit) and documented testing procedures for future engineers. I also
        automated testing with bash scripts, streamlining the process and
        ensuring data consistency. This project improved data security and
        established a robust testing framework.
      </p>
    ),
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
    title: "Edge Detection Website",
    description: (<p>This web application showcases edge detection using JavaScript. Users can upload an image which is then processed directly in the browser to identify and highlight edges through grayscale conversion, Gaussian blurring, and pixel comparison, resulting in a high-contrast image emphasizing outlines.</p>),
    image: `${basePath}/Images/external-link.png`,
  },

];

// TODO: Add AWS, Oauth2 or auth, maybe okta,
