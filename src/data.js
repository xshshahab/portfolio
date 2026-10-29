import {
  SiReact,
  SiRedux,
  SiExpo,
  SiNodedotjs,
  SiJsonwebtokens,
  SiJest,
  SiDocker,
  SiClaude,
  SiPython,
  SiGithub,
} from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'
import { LuMail } from 'react-icons/lu'

export const GITHUB_USER = 'xshshahab'

export const profile = {
  name: 'Md Shahabuddin',
  navName: 'Syphar',
  role: 'Full Stack Developer | React.js, React Native, Node.js',
  bio: 'Full Stack Developer from Patna, India with ~2 years of experience shipping production web and Android apps. I own features end to end, from requirements and UI prototypes to REST API integration, testing and release.',
  location: 'Patna, Bihar, India',
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
    role: 'Full Stack Developer',
    period: 'May 2025 – Present',
    status: 'current',
    projects: [
      {
        name: 'Hurry2Shop — Android App',
        date: 'Sep 2026 – Present',
        description:
          "E-commerce app for a women's ethnic-wear brand: browsing, search and filters, wishlist, cart, checkout and orders. OTP login with JWT, in-app Razorpay payments, and EAS release builds published on Google Play.",
        tech: ['React Native', 'Expo', 'TypeScript', 'TanStack Query', 'Redux', 'Razorpay'],
        href: 'https://play.google.com/store/apps/details?id=com.hurry2shop.app',
        domain: 'play.google.com',
      },
      {
        name: 'Hurry2Shop — Web Platform',
        date: 'Apr 2026 – Present',
        description:
          "B2C women's fashion e-commerce frontend with search and filtering, wishlist, cart, Razorpay checkout and OTP + JWT auth. Containerized with Docker and live in production on a VPS since August 2026.",
        tech: ['React.js', 'TypeScript', 'TanStack Query', 'Redux', 'Tailwind CSS', 'Docker'],
        href: 'https://hurry2shop.com',
        domain: 'hurry2shop.com',
      },
      {
        name: 'WISE BI — Revenue Assurance Platform',
        date: 'May 2025 – Present',
        description:
          'Business Intelligence platform that helps telecom operators monitor and validate revenue data through interactive dashboards, customizable reports and user management. Built with a 12-member team.',
        tech: ['React.js', 'TypeScript', 'Zustand', 'TanStack Query', 'Jest', 'Figma'],
      },
      {
        name: 'Viba Insurance — Management Platform',
        date: 'Oct 2025 – Nov 2025',
        description:
          'Centralized dashboard for managing employee insurance policies, records and renewals — from requirements and UI prototypes to the finished frontend.',
        tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
      },
    ],
  },
  {
    company: 'DataDimension LLP, Saudi Arabia',
    role: 'Frontend Developer Intern (Full-time, Remote)',
    period: 'Aug 2024 – Jan 2025',
    status: 'past',
    projects: [
      {
        name: 'Tajweed — Accreditation Management (NCAAA, ABET)',
        date: 'Aug 2024 – Jan 2025',
        description:
          'Accreditation system for Saudi higher-education institutions covering programs, learning outcomes, assessments, evidence documentation and reports.',
        tech: ['React.js', 'TypeScript', 'Redux', 'Tailwind CSS'],
      },
    ],
  },
  {
    company: 'Personal Projects',
    role: 'Built and deployed solo',
    period: '',
    status: 'personal',
    projects: [
      {
        name: 'SypharConnect — MERN Job Portal',
        date: 'Oct 2026',
        description:
          'Job portal with 20+ REST endpoints, JWT cookie auth and role-based access. Multi-filter search, saved and applied jobs, and a recruiter dashboard with a server-sanitised rich-text editor. Deployed behind Nginx with HTTPS and PM2.',
        tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'JWT', 'Nginx'],
        href: 'https://jobs.shahabuddin.in',
        domain: 'jobs.shahabuddin.in',
        secondaryHref: 'https://github.com/xshshahab/syphar-connect',
        secondaryLabel: 'github',
      },
    ],
  },
]

// "Courses" slot -> skills
export const skills = [
  {
    icon: SiReact,
    title: 'Frontend',
    description: 'React.js, Hooks, React Router, Tailwind CSS, Shadcn UI and responsive design.',
    meta: 'JavaScript · TypeScript · HTML5 · CSS3',
  },
  {
    icon: SiRedux,
    title: 'State & Data Fetching',
    description: 'Redux Toolkit, Zustand and TanStack Query for client and server state.',
    meta: 'React Hook Form · Zod',
  },
  {
    icon: SiExpo,
    title: 'Mobile',
    description: 'React Native with Expo, EAS Build, React Navigation and Google Play Console releases.',
    meta: 'React Native · Android',
  },
  {
    icon: SiNodedotjs,
    title: 'Backend & Database',
    description: 'Node.js and Express.js REST APIs backed by MongoDB.',
    meta: 'Node.js · Express · MongoDB',
  },
  {
    icon: SiJsonwebtokens,
    title: 'Auth & Payments',
    description: 'JWT and OTP authentication, role-based access control and Razorpay checkout.',
    meta: 'JWT · OTP · RBAC · Razorpay',
  },
  {
    icon: SiJest,
    title: 'Testing & Debugging',
    description: 'Jest, React Testing Library, Vitest, MSW, Postman, Chrome DevTools, React Profiler and Lighthouse.',
    meta: 'Jest · Vitest · MSW',
  },
  {
    icon: SiDocker,
    title: 'DevOps & Tools',
    description: "Docker, Nginx, PM2, Let's Encrypt HTTPS and VPS deployment on Linux, with Git, Jira and Figma.",
    meta: 'Docker · Nginx · Linux',
  },
  {
    icon: SiClaude,
    title: 'AI-Assisted Development',
    description:
      'Using Claude Code and Google Antigravity for debugging and refactoring while owning architecture and implementation.',
    meta: 'Claude Code · Google Antigravity',
  },
]

// Shown in the Skills section as a highlighted "learning" card
export const learning = [
  {
    icon: SiPython,
    title: 'Python for AI Engineering',
    description:
      'Learning Python as the foundation for AI engineering — adding it to my JavaScript and TypeScript toolkit to build AI-powered applications.',
    since: 'Started Oct 2026',
  },
]

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  school: 'Maulana Mazharul Haque Arabic & Persian University',
  years: '2022 – 2025',
  detail: 'Percentage: 76%',
  languages: 'English, Hindi',
}

// What's new feed, newest first. Add a line here to show it on the home page and /new.
export const currentlyLearning = {
  title: 'AI Engineering',
  description:
    'I have started learning AI Engineering — building on my full-stack foundation in React, Node.js and TypeScript to go from shipping apps to shipping AI-powered ones.',
  since: 'Started Oct 2026',
}

export const updates = [
  {
    date: 'Oct 2026',
    tag: 'Learning',
    title: 'Started learning AI Engineering',
    summary: 'Beginning a new chapter beyond full-stack web and mobile development.',
  },
  {
    date: 'Oct 2026',
    tag: 'Shipped',
    title: 'Deployed SypharConnect, a MERN job portal',
    summary: 'Live on a Linux VPS behind Nginx with HTTPS, PM2 and a password-protected MongoDB.',
    href: 'https://jobs.shahabuddin.in',
  },
  {
    date: 'Sep 2026',
    tag: 'Shipped',
    title: 'Hurry2Shop Android app on Google Play',
    summary: 'Built with React Native (Expo), released with EAS Build and a Google Play listing.',
    href: 'https://play.google.com/store/apps/details?id=com.hurry2shop.app',
  },
  {
    date: 'Aug 2026',
    tag: 'Shipped',
    title: 'Hurry2Shop web platform live in production',
    summary: 'Dockerized React frontend running on a VPS with Razorpay checkout and OTP + JWT auth.',
    href: 'https://hurry2shop.com',
  },
]
