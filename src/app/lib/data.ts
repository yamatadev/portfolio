export const portfolio = {
  name: "Renan Paes",
  role: "Full-Stack Developer",
  email: "renanpaes1601@gmail.com",
  linkedin: "https://linkedin.com/in/renan-paes",
  github: "https://github.com/yamatadev",

  about: {
    intro:
      "I'm a full-stack developer from Brazil who doesn't just write code — I build businesses with it.",
    story:
      "I started in QA, got promoted to developer within 3 months for solving problems nobody else would touch, then spent 2+ years building web systems for organizations including international teams. In 2024, I founded a digital agency and scaled it from zero to over $20,000/month without any external investment — designing the operations, automations, and growth strategies from scratch.",
    closing:
      "Now I'm channeling all of that — technical skills, business instincts, and a bias for action — into building software that matters. I'm passionate about motorcycles, always chasing the next challenge, and open to remote opportunities worldwide.",
  },

  experience: [
    {
      period: "2024 — Present",
      role: "Founder & Digital Operations Manager",
      company: "LushLab",
      location: "Curitiba, Brazil",
      highlights: [
        "Scaled from zero to $20K+/month recurring revenue in under 12 months, zero external funding",
        "Built automated workflows and real-time KPI dashboards, cutting manual work by ~40%",
        "Led cross-functional team across marketing, support, and data analysis",
        "Currently runs semi-automated — proof of building scalable, sustainable systems",
      ],
    },
    {
      period: "Aug 2024 — Apr 2025",
      role: "Full-Stack Developer",
      company: "Connecting Business",
      location: "Niterói, Brazil",
      highlights: [
        "Built and maintained web applications with PHP, JavaScript, and modern frontend frameworks",
        "Delivered features aligned with product roadmap in agile sprints",
      ],
    },
    {
      period: "Feb 2023 — Jul 2024",
      role: "Full-Stack Developer",
      company: "IDPI — Institute for Development, Research and Innovation",
      location: "Niterói, Brazil",
      highlights: [
        "Maintained large-scale institutional system, building custom reporting modules",
        "Collaborated with international team (India) to restructure platform architecture",
        "Delivered new Graduate Program module with React and Node.js",
        "Promoted from QA after 3 months for problem-solving ability and initiative",
      ],
    },
    {
      period: "Nov 2022 — Feb 2023",
      role: "QA Analyst / Test Automation",
      company: "IDPI",
      location: "Niterói, Brazil",
      highlights: [
        "Designed automated test suites, improving service reliability",
        "Built internal QA tools that streamlined testing for the entire dev team",
        "Promoted to Full-Stack Developer within 3 months",
      ],
    },
  ],

  projects: [
    {
      title: "Creator Analytics Dashboard",
      description:
        "Full-stack analytics platform for managing content creators — tracking revenue, audience growth, and performance across multiple platforms. Built from real-world experience running a creator agency.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "JWT Auth", "Recharts"],
      live: "https://creator-dashboard-x99.vercel.app",
      github: "https://github.com/yamatadev/creator-dashboard",
      gradient: "from-blue-600 to-violet-600",
    },
    {
      title: "Remote Job Tracker",
      description:
        "Job aggregation platform that scrapes remote developer positions from multiple sources, manages application pipelines, and generates AI-powered cover letters.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI", "Web Scraping"],
      live: "https://job-tracker-sepia-six.vercel.app/",
      github: "https://github.com/yamatadev/job-tracker",
      gradient: "from-emerald-600 to-cyan-600",
    },
    title: "Rival Job Assessment",
    description:
    "Project built for Job Assessment on Rival",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI"],
    live: "https://rival-assessment-2nmo.vercel.app/",
    github: "https://github.com/yamatadev/job-assessment",
    gradient: "from-emerald-600 to-cyan-600",
    },
  ],

skills: {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    Backend: ["Node.js", "PHP", "REST APIs", "Express", "Prisma"],
      Database: ["PostgreSQL", "MySQL", "SQL"],
        "DevOps & Tools": ["Docker", "Git", "Linux", "Vercel", "CI/CD"],
          Business: ["Product Strategy", "Team Leadership", "KPI Dashboards", "Growth & Sales"],
  },
};