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
      title: "TechFlow",
      description:
        "AI-powered job search copilot for remote developers. Aggregates openings from multiple ATS sources, tracks the full application pipeline, and generates tailored cover letters in seconds — so you apply to more jobs, faster, and with better fit.",
      tech: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Stripe",
        "Claude AI"],
      live: "https://usetechflow.com",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Rival Job Assessment",
      description:
        "Production-ready secure blog platform with JWT authentication, protected dashboard, public blog URLs, and a paginated public feed (newest first). Includes owner-only CRUD, unique slugs, DTO validation, optimized Prisma queries to avoid N+1, plus like & comment system with DB constraints and secure error handling.",
      tech: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "JWT", "bcrypt"],
      live: "https://rival-assessment-2nmo.vercel.app/feed",
      github: "https://github.com/yamatadev/rival-assessment",
      gradient: "from-red-600 to-blue-600",
    },
    {
      title: "ImobScan",
      description:
        "Automated real estate monitor that scrapes OLX listings, tracks price changes, and delivers instant alerts via e - mail and Telegram.",
      tech: ["Next.js", "TypeScript", "Playwright", "PostgreSQL", "Prisma",
        "NextAuth.js", "Tailwind CSS", "node-cron"],
      live: "not yet",
      github: "https://github.com/yamatadev/imobscan",
      gradient: "from-emerald-400 to-teal-600",
    },

    {
      title: "MailSense",
      description:
        "AI-powered corporate email triage system. Classifies emails as productive or unproductive using a custom NLP pipeline (tokenization → stopwords → RSLP stemming) combined with Claude AI. Supports free text, single file, batch upload (20x), and live Gmail IMAP integration. Returns classification, confidence score, priority level, key topics, and an auto-generated suggested reply. Fully bilingual (PT-BR / EN-US) with language-aware AI responses.",
      tech: [
        "FastAPI", "Python", "Claude AI (Haiku)", "NLTK", "RSLP",
        "React", "Vite", "Tailwind CSS",
        "Gmail IMAP", "Render", "Vercel"
      ],
      live: "https://email-classifier-flame.vercel.app/",
      github: "https://github.com/yamatadev/email-classifier",
      gradient: "from-emerald-500 to-blue-600",
    },
    {
      title: "ShiftMind",
      description:
        "AI-powered workforce scheduling system for senior care facilities, built as a production- ready demo for Sunrise Senior Living.Features a weekly shift calendar with morning / afternoon / night slots, worker CRUD with multi - select availability filtering across 8 roles(RN, CNA, Med Tech, etc.), and gap detection against staffing templates for weekday / weekend / holiday.Includes Aria, a conversational AI assistant powered by Claude with 10 specialized tool_use functions(auto- fill, gap filling, shift assignment, template adjustment) that manages the schedule through natural language.Auto - fill uses a weighted scoring algorithm balancing fairness(50 %), full - time preference(30 %), and seniority (20 %).",
      tech: [
        "React 19", "TypeScript", "Vite 6", "Tailwind CSS v4",
        "Express 5", "Node.js",
        "SQLite (better-sqlite3)", "Drizzle ORM",
        "Claude AI (Sonnet)", "Anthropic SDK (tool_use)",
        "React Router v7", "Vercel"
      ],
      live: "https://shift-mind-client.vercel.app/",
      github: "https://github.com/yamatadev/shift-mind",
      gradient: "from-emerald-600 to-teal-700",
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