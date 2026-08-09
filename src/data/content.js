// ---------------------------------------------------------------------------
// Site content — all copy lives here so components stay purely presentational.
// Every fact below is drawn from Hatoon's resume and existing portfolio copy.
// ---------------------------------------------------------------------------

import qrmChat1 from "../assets/projects/qrm/chat1.webp";
import qrmIphone from "../assets/projects/qrm/iphone-chat1.webp";

import bayanAgent from "../assets/projects/bayan/agent.webp";
import bayanAgent2 from "../assets/projects/bayan/agent2.webp";
import bayanChat1 from "../assets/projects/bayan/chat1.webp";
import bayanChat2 from "../assets/projects/bayan/chat2.webp";
import bayanIphone1 from "../assets/projects/bayan/iphone-chat1.webp";
import bayanIphone2 from "../assets/projects/bayan/iphone-chat2.webp";

import cafmDashboard from "../assets/projects/cafm/dashboard.webp";
import cafmAbyan1 from "../assets/projects/cafm/abyan1.webp";
import cafmAbyan2 from "../assets/projects/cafm/abyan2.webp";

import triageWorkflow from "../assets/projects/ai-triage/n8n-workflow.webp";
import triageResult1 from "../assets/projects/ai-triage/result1.webp";
import triageResult2 from "../assets/projects/ai-triage/result2.webp";
import triageGwr from "../assets/projects/ai-triage/gwr-certificate.webp";

import mixcareDashboard from "../assets/projects/mixcare/dashboard.webp";
import contract1 from "../assets/projects/contracts/report1.webp";
import contract2 from "../assets/projects/contracts/report2.webp";
import careerIndex from "../assets/projects/career/index.webp";
import careerForms from "../assets/projects/career/forms.webp";
import cpjCover from "../assets/projects/cpj/cpj.webp";

import aiJobCover from "../assets/projects/ai-job-copilot/cover.webp";
import momentumCover from "../assets/projects/momentum/cover.webp";
import bakeryCover from "../assets/projects/hatoon-bakery/cover.webp";
import showlogCover from "../assets/projects/showlog/cover.webp";
import eidCover from "../assets/projects/eid/cover.webp";
import ramadanCover from "../assets/projects/ramadan/cover.webp";
import birthdayCover from "../assets/projects/happy-birthday/cover.webp";

export const profile = {
  name: "Hatoon Alsaihati",
  title: "Software Engineer",
  email: "hetoon_j@icloud.com",
  linkedin: "https://www.linkedin.com/in/hatoon-alsaihati",
  github: "https://github.com/hatoonj",
  cvPath: "/documents/Hatoon-Alsaihati-CV.pdf",
  location: "Saudi Arabia",
};

export const hero = {
  eyebrow: "Software Engineering × APIs × Automation × AI",
  headline: "I build the systems that run behind the scenes.",
  subhead:
    "Software Engineer specializing in APIs, integrations, and automation — powering everything from internal dashboards to AI-driven chatbots.",
};

export const intro = {
  eyebrow: "About",
  heading: "Real systems, not just interfaces.",
  paragraphs: [
    "I'm a Software Engineer at Alansari Holding, where I design and build the backend systems, APIs, and automation that real business operations depend on — from ERP-integrated chatbots to internal platforms used across dozens of branches.",
    "My background is Management Information Systems, which is why I care as much about how a system fits into a business process as how it's coded. I build full-stack, but the part I care most about is what happens between the request and the response.",
  ],
  pillars: [
    { label: "Backend & APIs", detail: "PHP, C#, .NET / ASP.NET Core, Entity Framework, REST APIs" },
    { label: "Automation & AI", detail: "n8n, ManyChat, Twilio, AI-driven workflows" },
    { label: "Data", detail: "MySQL, SQL Server, IIS, Azure" },
    { label: "Frontend", detail: "JavaScript, HTML, CSS, Bootstrap" },
  ],
};

// ---------------------------------------------------------------------------
// Case studies — the four deep-dive projects
// ---------------------------------------------------------------------------

export const caseStudies = [
  {
    id: "qrm-chatbot",
    name: "QRM Chatbot",
    tag: "WhatsApp × ERP Integration",
    oneLiner:
      "A WhatsApp chatbot that gives Qanbar Ready Mix customers instant account answers, in their own language, without waiting on manual support.",
    role: "Sole developer — designed and built end-to-end, including the ERP/CRM integration",
    problem:
      "Qanbar Ready Mix customers needed a fast way to check balances, receive invoices, and get support in more than one language, without relying on manual, one-off replies from staff.",
    solution:
      "I built a WhatsApp chatbot on Twilio, backed by a .NET Core API that talks directly to Qanbar Ready Mix's ERP and CRM. It handles invoice delivery, balance checks, and multilingual conversations, and automatically requests feedback right after an invoice is paid — closing the loop on service quality without any manual follow-up.",
    features: [
      "Instant invoice delivery over WhatsApp",
      "Real-time balance checks against the ERP",
      "Multilingual conversation support",
      "Automated post-payment feedback collection",
    ],
    results: null,
    stack: ["Twilio", ".NET Core API", "C#", "Entity Framework", "MySQL", "Bootstrap", "Azure Microservice", "SMTP", "VCF"],
    images: [
      { src: qrmChat1, alt: "QRM WhatsApp chatbot conversation" },
      { src: qrmIphone, alt: "QRM chatbot on iPhone" },
    ],
    links: [],
  },
  {
    id: "bayan-assistant",
    name: "Bayan Virtual Assistant",
    tag: "WhatsApp × CAFM × 24/7 Support",
    oneLiner:
      "A bilingual WhatsApp assistant that gives Abyan Real Estate's tenants and guests round-the-clock support, integrated straight into the CAFM platform.",
    role: "Sole developer — built the chatbot flows and the .NET API integration with the CAFM system",
    problem:
      "Tenants and guests at Abyan Real Estate needed a way to reach support, log complaints, and get help in Arabic or English at any hour — not just during staffed business hours.",
    solution:
      "I built Bayan on ManyChat with a .NET API backend integrated into Abyan's CAFM (Computer-Aided Facility Management) system. It recognizes keywords to route conversations in Arabic or English, manages complaints and feedback, handles guest services, and hands off to a live agent when a conversation needs a human.",
    features: [
      "24/7 bilingual (Arabic/English) support",
      "Keyword-based conversation routing",
      "Complaint management tied to the CAFM system",
      "Guest services and live-chat handoff",
      "Tenant feedback collection",
    ],
    results: null,
    stack: ["ManyChat", ".NET Core API", "C#", "MySQL", "Twilio", "MailKit"],
    images: [
      { src: bayanChat1, alt: "Bayan Virtual Assistant WhatsApp conversation" },
      { src: bayanIphone1, alt: "Bayan Virtual Assistant on iPhone" },
      { src: bayanChat2, alt: "Bayan Virtual Assistant conversation flow" },
      { src: bayanAgent, alt: "Bayan Virtual Assistant live agent handoff" },
    ],
    links: [],
  },
  {
    id: "abyan-cafm",
    name: "ABYAN CAFM",
    tag: "Facility Management Platform",
    oneLiner:
      "A full facility-management platform for Abyan Real Estate Services — tenant and admin portals, SLA tracking, and ERP integration in one system.",
    role: "Led the project — sole developer, owned architecture through delivery and ongoing optimization",
    problem:
      "Abyan Real Estate Services needed a single platform to run facility operations: separate portals for tenants and admins, maintenance requests that didn't fall through the cracks, and visibility into SLAs and costs.",
    solution:
      "I built a CRM/CAFM platform in PHP and MySQL with distinct tenant and admin portals, maintenance-request management with automated email notifications, SLA tracking, cost and financial oversight, tenant feedback collection, and integration with Abyan's ERP APIs. I continue to lead the project, optimizing performance and efficiency.",
    features: [
      "Separate tenant and admin portals",
      "Maintenance request management with automated emails",
      "SLA tracking and cost oversight",
      "Tenant feedback collection",
      "ERP API integration",
    ],
    results: [
      { metric: "40%", label: "increase in operational efficiency" },
      { metric: "30%", label: "boost in tenant satisfaction" },
      { metric: "15%", label: "reduction in operating costs" },
    ],
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML", "CSS", "REST API", "IIS", "SMTP"],
    images: [
      { src: cafmDashboard, alt: "ABYAN CAFM dashboard" },
      { src: cafmAbyan1, alt: "ABYAN CAFM tenant portal" },
      { src: cafmAbyan2, alt: "ABYAN CAFM admin portal" },
    ],
    links: [],
  },
  {
    id: "ai-maintenance-triage",
    name: "AI Maintenance Photo Triage",
    tag: "Kanz AI Hackathon 2026 — Guinness World Records™ Title",
    oneLiner:
      "Send a photo of a facility issue over WhatsApp, and AI vision categorizes it, assesses hazard level, and drafts the report — part of a verified Guinness World Records™ title for the most users in an AI video lesson (14,075 participants).",
    role: "Sole developer — official submission for the Kanz AI Hackathon 2026",
    problem:
      "Manual maintenance report forms are slow and inconsistent — someone has to describe the issue, categorize it, and judge how urgent it is, every time.",
    solution:
      "I built a WhatsApp flow on ManyChat and n8n that replaces the form entirely: send a photo of the issue, and Claude Vision categorizes the problem, assesses the hazard level, and drafts a professional description. When confidence is high, it files the report automatically through a .NET Core API on Azure; when it's not, it asks for confirmation instead of guessing.",
    features: [
      "Photo-based intake over WhatsApp — no forms",
      "AI vision categorization and hazard-level assessment",
      "Auto-drafted professional descriptions",
      "Confidence-based auto-filing with human confirmation fallback",
    ],
    results: [
      { metric: "GWR™", label: "part of a Guinness World Records™ title (14,075 participants), with Kanz and Saudi Arabia's Ministry of Human Resources and Social Development" },
      { metric: "Passport", label: "graded by AI judges and awarded a verified Competency Passport (Certificate ID KANZ-ADV-0254)" },
    ],
    stack: ["ManyChat", "n8n", "Claude Vision", ".NET Core API", "Azure"],
    images: [
      { src: triageWorkflow, alt: "AI Maintenance Photo Triage n8n workflow" },
      { src: triageResult1, alt: "AI Maintenance Photo Triage result example" },
      { src: triageResult2, alt: "AI Maintenance Photo Triage result example" },
      { src: triageGwr, alt: "Guinness World Records certificate" },
    ],
    links: [
      { label: "Competency Passport", href: "https://try.ka.nz/ai/hatoonalsaihati" },
      { label: "Workshop Certificate", href: "/documents/kanz-ai-workshop-certificate.pdf" },
      { label: "GWR Certificate", href: "/documents/guinness-world-records.pdf" },
    ],
  },
];

// ---------------------------------------------------------------------------
// More projects — real business work, lighter card treatment
// ---------------------------------------------------------------------------

export const moreProjects = [
  {
    id: "mixcare",
    name: "MixCare",
    description:
      "A web-based CRM portal for Qanbar Ready Mix to manage customer interactions, complaints, and tickets. Admins reply inside the portal; responses reach customers on WhatsApp automatically.",
    stack: [".NET Core API", "C#", "Entity Framework", "Azure Microservice", "MySQL", "REST API"],
    image: mixcareDashboard,
  },
  {
    id: "readymix-portal",
    name: "Readymix Document Portal",
    description:
      "A document portal for Qanbar Ready Mix. Admins and customer admins upload customer documents; customers log in to see only their own.",
    stack: [".NET Core API", "C#", "MySQL"],
    image: null,
  },
  {
    id: "contracts-automation",
    name: "Automated Tenant Contracts Reports",
    description:
      "Monthly contract-status reports, generated and emailed automatically by region and unit type, with Excel attachments and embedded HTML summaries for ended and ending contracts.",
    stack: ["PHP", "MySQL", "Excel", "PhpSpreadsheet", "SMTP"],
    image: contract1,
    image2: contract2,
  },
  {
    id: "n8n-automation-suite",
    name: "Business Process Automation with n8n & AI",
    description:
      "A suite of six automated workflows: bulk email campaigns, certificate generation, invoice creation, an AI accounting assistant, a customer-service chatbot with meeting booking, and automated PDF invoice extraction.",
    stack: ["n8n", "OpenAI", "LangChain", "Google Workspace", "PDF Processing"],
    image: null,
    link: { label: "GitHub", href: "https://github.com/hatoonj/n8n-workflow" },
  },
  {
    id: "career-forms",
    name: "Career & Co-op Forms",
    description:
      "Bilingual job and co-op application forms for Al Ansari Holding's career site, with an automated PHP system generating real-time Excel reports for admins.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    image: careerIndex,
    image2: careerForms,
    link: { label: "View Live", href: "https://alansari.com.sa/career" },
  },
  {
    id: "cpj",
    name: "CPJ",
    description:
      "My graduation project: a full-stack platform connecting students looking for part-time work with café owners through an online resume system.",
    stack: ["PHP", "MySQL", "Bootstrap", "Apache"],
    image: cpjCover,
    link: { label: "Documentation", href: "/documents/cpj-docs.pdf" },
  },
];

// ---------------------------------------------------------------------------
// Experiments & side projects — lighter, playful, for range
// ---------------------------------------------------------------------------

export const experiments = [
  {
    id: "ai-job-copilot",
    name: "AI Job Application Co-pilot",
    description: "Paste a CV and job description; an n8n workflow behind a Lovable front end analyzes the match and tailors the application.",
    tag: "Hackathon",
    image: aiJobCover,
  },
  {
    id: "momentum",
    name: "Momentum",
    description: "A bilingual (EN/AR, native RTL) bedtime habit tracker with streaks and a 14-day history — built client-side with Claude Code.",
    tag: "Hackathon",
    image: momentumCover,
  },
  {
    id: "hatoon-bakery",
    name: "Hatoon Bakery",
    description: "A concept bakery storefront built in Replit, exploring how fast a full site can go from prompt to live.",
    tag: "Hackathon",
    image: bakeryCover,
  },
  {
    id: "showlog",
    name: "ShowLog",
    description: "A self-hosted, ad-free alternative to TV Time — watch history, an “Up Next” calendar, ratings, and custom lists. Currently in architecture/design.",
    tag: "Design Spec",
    image: showlogCover,
  },
  {
    id: "eid-cards",
    name: "Eid Card Generators",
    description: "Two Eid greeting-card tools for Al Ansari Holding — one customized per subsidiary, one unified across the holding group.",
    tag: "Creative",
    image: eidCover,
    link: { label: "Al-Adha", href: "http://alansari.com.sa/greeting-cards/al-Adha" },
  },
  {
    id: "ramadan-card",
    name: "Ramadan Greeting Card",
    description: "An interactive Ramadan greeting card for Al Ansari Holding, built to share warm wishes with a polished, on-brand experience.",
    tag: "Creative",
    image: ramadanCover,
    link: { label: "View Card", href: "https://alansari.com.sa/greeting-cards/ramadan/" },
  },
  {
    id: "happy-birthday",
    name: "Happy Birthday Pages",
    description: "A personal collection of interactive birthday pages — a matrix-rain balloon pop, a hacker-terminal reveal — deployed on GitHub Pages.",
    tag: "Personal",
    image: birthdayCover,
  },
];

// ---------------------------------------------------------------------------
// Stack
// ---------------------------------------------------------------------------

export const stack = {
  "Languages": ["PHP", "C#", "JavaScript", "SQL", "HTML", "CSS", "Visual Basic"],
  "Frameworks & Data": ["ASP.NET Core", "Entity Framework", "Bootstrap", "MySQL", "IIS", "Azure"],
  "APIs & Automation": ["REST APIs", "Twilio", "WhatsApp API", "ManyChat", "n8n", "MailKit"],
  "Tools": ["Git", "CI/CD", "Draw.io", "UML", "Windows Task Scheduler"],
};

// ---------------------------------------------------------------------------
// Experience & education
// ---------------------------------------------------------------------------

export const experience = [
  {
    role: "Software Engineer",
    org: "Alansari Holding",
    period: "Jul 2024 — Present",
    points: [
      "Building WhatsApp chatbots (QRM Chatbot, Bayan Virtual Assistant) integrated with ERP/CAFM systems using Twilio and ManyChat",
      "Leading the ABYAN CAFM facility-management platform",
      "Managing Azure cloud deployment, virtual machines, and storage for internal web apps",
      "Automating monthly CAFM contract reports and career/co-op data exports to Excel",
      "Managing domains, SSL certificates, and secure access across internal platforms",
      "Supported IT Ops during a cyberattack, coordinating device scans across 15+ branches",
    ],
  },
  {
    role: "Application Developer — Tamheer",
    org: "Alansari Holding",
    period: "Dec 2023 — Jun 2024",
    points: [
      "Developed career and co-op application forms, cutting application processing time by 50%",
      "Built two web-based Eid card generators, boosting engagement by 25%",
      "Created MS Forms surveys for New Year's wishes and training evaluations",
      "Provided IT support across platform operations and data management",
    ],
  },
  {
    role: "IT Demand Analyst — Co-op",
    org: "Aramco",
    period: "Jun 2022 — Aug 2022",
    points: [
      "Conducted usage-scenario analysis across 21 applications, 2 hosting/computing systems, and 1 connectivity solution",
      "Optimized demand-analysis processes using the IT Demand Planning system",
    ],
  },
];

export const education = {
  degree: "Bachelor's Degree, Management Information Systems",
  school: "Imam Abdulrahman bin Faisal University",
  period: "Jan 2019 — Mar 2023",
  detail: "GPA 4.35 — Second Honorary Degree",
};

export const recognition = {
  heading: "Guinness World Records™",
  detail:
    "Part of the Guinness World Records™ title for the most users in an AI video lesson (14,075 participants), from the Kanz AI Hackathon 2026, organized with Saudi Arabia's Ministry of Human Resources and Social Development.",
  cta: { label: "View Certificate", href: "/documents/guinness-world-records.pdf" },
};

export const contact = {
  heading: "Let's build something real.",
  detail: "Available for freelance work and full-time opportunities — especially anything involving APIs, automation, or AI.",
};
