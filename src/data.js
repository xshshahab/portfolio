import {
  SiReact,
  SiDocker,
  SiGithub,
  SiFastapi,
  SiLangchain,
  SiGooglegemini,
} from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'
import { LuActivity, LuBot, LuMail, LuSearch, LuShieldCheck } from 'react-icons/lu'

export const GITHUB_USER = 'xshshahab'

export const profile = {
  name: 'Md Shahabuddin',
  navName: 'Syphar',
  role: 'AI Engineer | Gen AI, Agentic AI, LLMs, LangGraph, LangChain, MCP, RAG, FastAPI, React, TypeScript',
  bio: 'AI Engineer based in Gurgaon, India focused on Generative AI, LLM applications, and agentic workflows. I build production web and mobile products alongside AI-enabled business and analytics applications — hands-on with Python, FastAPI, LangChain, LangGraph, MCP, tool calling, RAG, and multi-provider LLMs, with frontend experience in React and TypeScript and backend experience in Python services and Java Spring Boot (Hibernate/JPA).',
  location: 'Gurgaon, Haryana, India',
  email: 'work.mdshahabuddin@gmail.com',
  // Falls back to the GitHub avatar. Drop a file at public/avatar.jpg and set this to '/avatar.jpg' to use your own photo.
  avatar: `https://github.com/${GITHUB_USER}.png?size=256`,
  experienceLabel: '~2 yrs experience',
}

export const projectCount = () => companies.reduce((n, c) => n + c.projects.length, 0)

export const socials = [
  { label: 'GitHub', href: `https://github.com/${GITHUB_USER}`, icon: SiGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mdshahabuddin82', icon: FaLinkedinIn },
  { label: 'Email', href: `mailto:${profile.email}`, icon: LuMail },
]

export const navLinks = [
  { label: 'experience', to: '/#experience' },
  { label: 'skills', to: '/#skills' },
  { label: 'new', to: '/new' },
]

// Projects grouped by the company they were built at (newest company first)
export const companies = [
  {
    company: 'CodeCompass LLP',
    role: 'AI Engineer',
    period: 'May 2025 – Present',
    status: 'current',
    projects: [
      {
        name: 'Hurry2Shop — E-commerce Platform (Web, Admin & Android)',
        date: 'Apr 2026 – Present',
        description:
          'Production B2C e-commerce platform across customer website, internal Admin Console, and Android app. Owned the React + TypeScript Admin Console backed by 19 REST endpoints across 4 Spring Boot controllers with Hibernate/JPA and PostgreSQL (campaigns, support inquiries, cart workflows, Recharts dashboards). Built and published the React Native (Expo) Android app with product discovery, search, filters, wishlist, cart, checkout, OTP/JWT auth, Razorpay payments, and Docker deployment.',
        tech: [
          'React.js',
          'TypeScript',
          'React Native',
          'Expo',
          'TanStack Query',
          'Redux Toolkit',
          'Recharts',
          'Java',
          'Spring Boot',
          'Hibernate / JPA',
          'PostgreSQL',
          'Razorpay',
          'Docker',
        ],
        href: 'https://hurry2shop.com',
        domain: 'hurry2shop.com',
        secondaryHref: 'https://play.google.com/store/apps/details?id=com.hurry2shop.app',
        secondaryLabel: 'google play',
      },
      {
        name: 'Billing & ERP Modernization — AI-Assisted Development and LLM Integration',
        date: 'Dec 2025 – Apr 2026',
        description:
          'Modernized a legacy Java Swing billing and ERP application into a secure web app using an AI-assisted workflow with Claude Code and architect/developer agents while preserving existing business rules. Built a Spring Boot REST API, PostgreSQL data layer, and React/TypeScript frontend with RBAC, session/CSRF security, and audit logging. Developed HYSEN, a FastMCP business assistant exposing 34 read-only tools across 7 LLM providers (Gemini, OpenAI, Anthropic, Groq, Mistral, OpenRouter, Ollama) with prompt-injection safeguards and a SELECT-only DB role, alongside WhatsApp invoicing (Meta Cloud API), scheduled Telegram summaries, Docker Compose packaging, and 500+ backend, 1,000+ frontend, and 45 Python automated tests.',
        tech: [
          'Java',
          'Spring Boot',
          'PostgreSQL',
          'React.js',
          'TypeScript',
          'FastMCP',
          'MCP',
          'Tool Calling',
          'Multi-Provider LLMs',
          'Claude Code',
          'Docker Compose',
          'JUnit',
          'Vitest',
          'pytest',
        ],
      },
      {
        name: 'WISE BI — Revenue Assurance Platform & NL2SQL Analytics Assistant',
        date: 'May 2025 – Nov 2025',
        description:
          'Developed React/TypeScript frontend features for a telecom Revenue Assurance platform — including dashboards, data visualization, customizable reports, user management, and Zustand state integration — as part of a 12-member Agile team. Built an LLM-powered Natural Language to SQL (NL2SQL) assistant with FastAPI, LangChain, and LangGraph featuring schema-aware SQL generation using database metadata and business context, query validation, read-only execution, result interpretation, and a React/TypeScript interface with database access controls.',
        tech: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'NL2SQL', 'React.js', 'TypeScript', 'Zustand', 'PostgreSQL', 'REST APIs'],
      },
      {
        name: 'Viba Insurance — Insurance Management Platform',
        date: 'Oct 2025 – Nov 2025',
        description:
          'Built the frontend of a centralized insurance management dashboard for employee policies, records, and renewals — from requirements and Figma prototypes to React/TypeScript implementation.',
        tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
      },
    ],
  },
  {
    company: 'DataDimension LLP',
    role: 'Frontend Developer Intern (Full-time, Remote)',
    period: 'Aug 2024 – Jan 2025',
    status: 'past',
    projects: [
      {
        name: 'Tajweed — Accreditation Management System',
        date: 'Aug 2024 – Jan 2025',
        description:
          'Developed frontend modules for Tajweed, an accreditation management system for Saudi higher-education institutions covering academic programs, learning outcomes, assessments, evidence, and reports. Handled requirements, prototype design, frontend implementation, REST API integration, and debugging UI and integration issues across modules.',
        tech: ['React.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'REST APIs'],
      },
    ],
  },
  {
    company: 'Personal Project',
    role: 'Built and deployed solo',
    period: '',
    status: 'personal',
    projects: [
      {
        name: 'Sypharis One — Multi-Agent AI Travel Planner',
        date: 'Personal Project',
        description:
          'Architected a 9-node stateful LangGraph workflow with an input guardrail and supervisor router dispatching specialist agents for flights, hotels, weather, and budget before itinerary generation. Implemented Human-in-the-Loop pause/resume with LangGraph interrupt() and PostgreSQL checkpointing (thread_id), integrated AviationStack, Tavily, and custom OpenWeather MCP servers with token-budget trimming, Groq rate-limit retries, and LangSmith tracing, and built a React 19/TypeScript UI with draft-versus-final plan comparison deployed via FastAPI, PostgreSQL, Nginx, and Docker Compose on an Ubuntu VPS with SSL.',
        tech: [
          'LangGraph',
          'Python',
          'FastAPI',
          'PostgreSQL',
          'MCP',
          'LangSmith',
          'React 19',
          'TypeScript',
          'Docker Compose',
          'Nginx',
        ],
        href: 'https://travel.shahabuddin.in',
        domain: 'travel.shahabuddin.in',
        secondaryHref: 'https://github.com/xshshahab/sypharis-one',
        secondaryLabel: 'github',
      },
    ],
  },
]

// "Courses" slot -> skills
export const skills = [
  {
    icon: SiGooglegemini,
    title: 'Generative AI & LLMs',
    description:
      'LLM Application Development, OpenAI API, Google Gemini API, Anthropic Claude API, Multi-Provider Integration, Prompt Engineering, Function/Tool Calling, Structured Outputs, and Streaming Responses.',
    meta: 'OpenAI · Gemini · Claude · Tool Calling',
  },
  {
    icon: SiLangchain,
    title: 'Agentic AI & Orchestration',
    description:
      'LangChain, LangGraph, Google ADK, AI Agents, Stateful Workflows, Human-in-the-Loop (HITL), MCP, FastMCP, and MCP Server/Client Integration.',
    meta: 'LangChain · LangGraph · Google ADK · FastMCP',
  },
  {
    icon: LuSearch,
    title: 'RAG & Retrieval',
    description:
      'Retrieval-Augmented Generation (RAG), Corrective RAG (CRAG), OpenAI/Gemini Embeddings, FAISS, pgvector, Semantic Search, and Vector Retrieval.',
    meta: 'RAG · CRAG · FAISS · pgvector',
  },
  {
    icon: LuActivity,
    title: 'Evaluation & Observability',
    description: 'LangSmith, LLM Tracing, Workflow Debugging, and AI Workflow Evaluation.',
    meta: 'LangSmith · Tracing · AI Evaluation',
  },
  {
    icon: SiFastapi,
    title: 'Backend & APIs',
    description: 'Python, FastAPI, Pydantic, SQLAlchemy, REST APIs, and Java with Spring Boot and Hibernate/JPA.',
    meta: 'Python · FastAPI · Java · Spring Boot',
  },
  {
    icon: SiReact,
    title: 'Frontend',
    description:
      'React.js, React 19, TypeScript, JavaScript (ES6+), Redux Toolkit, TanStack Query, Zustand, Tailwind CSS, and shadcn/ui.',
    meta: 'React 19 · TypeScript · TanStack Query · shadcn/ui',
  },
  {
    icon: LuShieldCheck,
    title: 'Data & Security',
    description:
      'PostgreSQL, SQL, Database Schema Design, Read-Only DB Access, JWT, OAuth 2.0, RBAC, CSRF Protection, and XSS Prevention.',
    meta: 'PostgreSQL · JWT · OAuth 2.0 · RBAC',
  },
  {
    icon: SiDocker,
    title: 'Testing & Delivery',
    description:
      'JUnit, Vitest, React Testing Library, pytest, Playwright, Postman, Swagger/OpenAPI, Docker, Docker Compose, AWS EC2/S3, Linux, Nginx, CI/CD, and Git.',
    meta: 'JUnit · Vitest · pytest · Docker · AWS',
  },
]

// Shown in the Skills section as a highlighted "learning" card
export const learning = [
  {
    icon: LuBot,
    title: 'Agentic AI Systems, CRAG & Evaluation',
    description:
      'Deepening multi-agent orchestration with LangGraph and Google ADK, Corrective RAG pipelines with pgvector and FAISS, and systematic LLM workflow tracing and evaluation in LangSmith.',
    since: 'Active focus',
  },
]

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  school: 'Maulana Mazharul Haque Arabic & Persian University, Patna, Bihar',
  years: '2022 – 2025',
  detail: 'Percentage: 76%',
  languages: 'English, Hindi',
  interests: 'Bike Riding, Watching Movies, Learning New Skills, Travelling',
}

// What's new feed, newest first. Add a line here to show it on the home page and /new.
export const currentlyLearning = {
  title: 'Agentic AI Systems, CRAG & Evaluation',
  description:
    'Building stateful multi-agent workflows with LangGraph, Google ADK, and MCP servers, Corrective RAG retrieval with pgvector and FAISS, and end-to-end LLM evaluation in LangSmith.',
  since: 'Active focus',
}

export const updates = [
  {
    date: 'Personal Project',
    tag: 'Shipped',
    title: 'Launched Sypharis One, a Multi-Agent AI Travel Planner',
    summary:
      '9-node stateful LangGraph workflow with HITL checkpointing, AviationStack/Tavily/OpenWeather MCP servers, LangSmith tracing, and a React 19 + FastAPI stack on Ubuntu VPS.',
    href: 'https://travel.shahabuddin.in',
  },
  {
    date: 'Apr 2026 – Present',
    tag: 'Shipped',
    title: 'Shipping Hurry2Shop across Web, Admin Console & Android',
    summary:
      'React + TypeScript Admin Console on 19 Spring Boot REST endpoints and a React Native (Expo) Android app published on Google Play with OTP/JWT auth and Razorpay payments.',
    href: 'https://hurry2shop.com',
  },
  {
    date: 'Dec 2025 – Apr 2026',
    tag: 'Shipped',
    title: 'Delivered Billing & ERP Modernization and HYSEN AI Assistant',
    summary:
      'Modernized a legacy Java Swing ERP with Spring Boot, React/TypeScript, and HYSEN — a 34-tool FastMCP assistant supporting 7 LLM providers, WhatsApp invoicing, and 500+ backend, 1,000+ frontend, and 45 Python tests.',
  },
  {
    date: 'May – Nov 2025',
    tag: 'Shipped',
    title: 'Built WISE BI Revenue Assurance & NL2SQL Analytics Assistant',
    summary:
      'Telecom Revenue Assurance dashboards in React/TypeScript paired with a schema-aware FastAPI NL2SQL assistant with read-only execution safeguards.',
  },
]
