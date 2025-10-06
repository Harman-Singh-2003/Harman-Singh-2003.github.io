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
    "Final year Engineering Systems and Computing student at the University of Guelph. Seek new grad 2026 SWE positions.",
  resumeLink: "Resume",
  githubLink: "Github",
  linkedin: "LinkedIn",
};

export const experienceData = [
  {
    company: "Citi",
    position: "Software Engineer Intern",
    date: "May 2025 - Aug 2025",
    description: (
      <div>
        <ul>
          <li>
            • Saved 5+ hours/week on compliance audits and enabled real-time dependency visibility by automating aggregation and tracking across 90+ repositories with Python and Autosys.
          </li>
          <li>
            • Built real-time health alerts using Python, RabbitMQ, and MongoDB, eliminating nightly manual checks and reducing on-call disruptions.
          </li>
          <li>
            • Cut deploy time by up to 95% by creating an OpenShift/Kubernetes Bash CLI to scale services to target pod counts, consolidating 100+ scripts and removing 150+ automated jobs.
          </li>
          <li>
            • Created CI/CD pipelines to automate deploys using Tekton and Harness.
          </li>
        </ul>
      </div>
    ),
    image: `/Images/CitiLogo.png`,
  },
  {
    company: "Ciena",
    position: "Internal Tools Developer Intern",
    date: "May 2024 - Aug 2024",
    description: (
      <div>
        <ul>
          <li>
            • Implemented a backend REST API with Python and FastAPI to manage infrastructure security vulnerabilities, reducing vulnerabilities across company devices by ~30%.
          </li>
          <li>
            • Led planning, scheduling, and backend/database development; coordinated with stakeholders for requirements and user input.
          </li>
          <li>
            • Added authentication/authorization with JWTs and Okta to protect backend resources.
          </li>
          <li>
            • Automated builds and deploys with GitHub Actions, providing the security team with up-to-date vulnerability data.
          </li>
          <li>
            • Deployed AWS API Gateway and Lambda with Terraform for company-wide access to the application.
          </li>
        </ul>
      </div>
    ),
    image: `/Images/CienaLogo.png`,
  },
  {
    company: "Wave Financial",
    position: "Software Engineer Co-op",
    date: "Jan 2024 - Apr 2024",
    description: (
      <div>
        <ul>
          <li>
            • Developed and maintained accounting microservices with Python and Django, improving stability and UX.
          </li>
          <li>
            • Optimized AWS S3 using lifecycle policies, saving about $2K per year.
          </li>
          <li>
            • Built UI for a mobile app with 100,000+ active users using React Native, HTML/CSS, JavaScript/TypeScript, and GraphQL.
          </li>
          <li>
            • Drove data decisions with Redshift and SQL by analyzing 10,000+ data points for the ML team.
          </li>
          <li>
            • Reduced incident response time by implementing automated Slack alerts via Datadog and Terraform.
          </li>
        </ul>
      </div>
    ),
    image: `/Images/WaveLogo.webp`,
  },
  {
    company: "Centre for Biodiversity Genomics",
    position: "Programmer Co-op",
    date: "Jun 2023 - Sep 2023",
    description: (
      <div>
        <ul>
          <li>
            • Improved performance, security, and stability for the backend of the world’s largest DNA barcode repository (10M+ specimen records) by migrating PHP 5.3 → 8.1.
          </li>
          <li>
            • Led code review of the database access layer, fixing bugs and improving maintainability.
          </li>
          <li>
            • Refactored legacy PostgreSQL queries to enhance security, speed, and maintainability.
          </li>
        </ul>
      </div>
    ),
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

export const projectData = [
  {
    title: "Edge Detection Website",
    description: (<p>This web application showcases edge detection using JavaScript. Users can upload an image which is then processed directly in the browser to identify and highlight edges through grayscale conversion, Gaussian blurring, and pixel comparison, resulting in a high-contrast image emphasizing outlines.</p>),
    image: `/Images/external-link.png`,
  },

];

// TODO: Add AWS, Oauth2 or auth, maybe okta,
