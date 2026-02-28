export const personalInfo = {
  name: "Hiro Tanaka",
  title: "Senior Full-Stack Engineer",
  location: "Hokkaido, Japan",
  email: "seniordev8859@gmail.com",
  telegram: "@dreamhigh8859",
  calendly: "https://calendly.com/seniordev8859/30min",
  summary:
    "Senior Full-Stack Engineer with 8+ years of experience designing, building, and scaling production web applications across frontend, backend, and cloud infrastructure. Strong background in JavaScript and TypeScript ecosystems with deep hands-on experience in React, Next.js, Node.js, and cloud-native architectures. Proven ability to own features end to end — from UI and APIs to databases, CI/CD, and production monitoring.",
};

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 93 },
      { name: "TypeScript", level: 92 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux / Zustand", level: 88 },
      { name: "Framer Motion", level: 85 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 93 },
      { name: "Express.js", level: 90 },
      { name: "NestJS", level: 88 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 87 },
      { name: "WebSockets", level: 85 },
      { name: "Auth & RBAC", level: 90 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "MongoDB", level: 88 },
      { name: "Redis", level: 87 },
      { name: "MySQL", level: 85 },
      { name: "Prisma", level: 88 },
      { name: "Sequelize", level: 83 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 88 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "CI/CD", level: 90 },
      { name: "GitHub Actions", level: 90 },
      { name: "Terraform", level: 80 },
      { name: "Nginx", level: 82 },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Jest / Vitest", level: 90 },
      { name: "Cypress", level: 88 },
      { name: "Playwright", level: 85 },
      { name: "Integration Testing", level: 88 },
    ],
  },
  {
    title: "Architecture & Practices",
    skills: [
      { name: "System Design", level: 90 },
      { name: "Microservices", level: 88 },
      { name: "API Design", level: 92 },
      { name: "Performance Optimization", level: 90 },
      { name: "Agile / Scrum", level: 90 },
      { name: "Code Reviews", level: 95 },
    ],
  },
];

export const experiences: {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
}[] = [];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  images: string[];
  color: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "cosmic-clock",
    title: "Cosmic Clock",
    subtitle: "Interactive Data Visualization",
    description:
      "An immersive, real-time time visualization built with HTML5 Canvas rendering 9 concentric rings — from seconds to seasons — with 80+ world event markers, category filtering, time-lapse controls, and interactive tooltips. A blend of creative coding and data engineering.",
    technologies: [
      "HTML5 Canvas",
      "JavaScript",
      "CSS3",
      "Real-time Animation",
      "Data Visualization",
      "Responsive Design",
    ],
    highlights: [
      "9 animated concentric time rings with live updates",
      "80+ world events with category filtering",
      "Time-lapse controls (1x to 1 day/second)",
      "Interactive tooltips and hover states",
    ],
    images: [],
    color: "#8b5cf6",
    demoUrl: "/cosmic-clock/index.html",
    featured: true,
  },
  {
    id: "xpromo",
    title: "XPromo",
    subtitle: "E-Commerce Platform",
    description:
      "Built a full-featured wholesale promotional merchandise e-commerce platform with product management, custom ordering, brand partnerships, and a complete admin dashboard. The storefront supports thousands of SKUs across multiple categories with real-time inventory and fast search.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "REST API",
      "Tailwind CSS",
      "Redis",
      "Stripe",
    ],
    highlights: [
      "Full storefront with 50,000+ product catalog",
      "Admin dashboard with product & order management",
      "Brand partner integrations (Adidas, BIC, BLUNT)",
      "Real-time inventory and order tracking",
    ],
    images: [
      "/projects/xpromo/1.png",
      "/projects/xpromo/2.png",
      "/projects/xpromo/3.png",
      "/projects/xpromo/4.png",
      "/projects/xpromo/5.png",
      "/projects/xpromo/6.png",
      "/projects/xpromo/7.png",
      "/projects/xpromo/8.png",
      "/projects/xpromo/9.png",
    ],
    color: "#3b82f6",
  },
  {
    id: "pacific",
    title: "Pacific Global Health",
    subtitle: "Healthcare Organization Platform",
    description:
      "Developed a comprehensive web platform for a global health think tank focused on healthcare improvement across the Asia-Pacific region. Features include primary care resources, research publication management, partnership coordination, training programs, and leadership directories.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "AWS",
      "CMS Integration",
    ],
    highlights: [
      "Multi-section platform with research & training portals",
      "Dynamic content management system",
      "Responsive design with immersive space-themed UI",
      "SEO-optimized with server-side rendering",
    ],
    images: [
      "/projects/pacific/1.png",
      "/projects/pacific/2.png",
      "/projects/pacific/3.png",
      "/projects/pacific/4.png",
      "/projects/pacific/5.png",
      "/projects/pacific/6.png",
      "/projects/pacific/7.png",
      "/projects/pacific/8.png",
      "/projects/pacific/9.png",
    ],
    color: "#06b6d4",
  },
  {
    id: "healthcare",
    title: "Health.IO",
    subtitle: "Mobile Health App & Landing Page",
    description:
      "Designed and developed a premium landing page for a health monitoring mobile application. Features a sleek dark-themed UI showcasing app capabilities including activity tracking, exercise monitoring, and health analytics with a modern, conversion-optimized design.",
    technologies: [
      "React",
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Figma",
      "Responsive Design",
    ],
    highlights: [
      "Conversion-optimized landing page design",
      "Interactive UI with smooth animations",
      "Mobile-first responsive implementation",
      "App showcase with feature highlights",
    ],
    images: [
      "/projects/healthcare/1.png",
      "/projects/healthcare/2.png",
      "/projects/healthcare/3.png",
    ],
    color: "#8b5cf6",
  },
  {
    id: "aws",
    title: "AWS ML Pipeline",
    subtitle: "LLM Fine-Tuning Infrastructure",
    description:
      "Architected and deployed a machine learning infrastructure on AWS SageMaker for fine-tuning Meta LLaMA 2 large language models. Built end-to-end pipelines covering notebook instances, model training, endpoint deployment, and real-time inference with production-grade monitoring.",
    technologies: [
      "AWS SageMaker",
      "Python",
      "LLaMA 2",
      "Docker",
      "Jupyter",
      "REST API",
      "CloudWatch",
    ],
    highlights: [
      "Fine-tuned Meta LLaMA 2 7B model",
      "Automated training and deployment pipelines",
      "Real-time inference endpoint with monitoring",
      "Cost-optimized instance management",
    ],
    images: [
      "/projects/AWS/1.jpeg",
      "/projects/AWS/2.png",
      "/projects/AWS/3.jpeg",
      "/projects/AWS/4.png",
      "/projects/AWS/5.png",
      "/projects/AWS/6.jpeg",
      "/projects/AWS/7.jpeg",
      "/projects/AWS/8.png",
      "/projects/AWS/9.jpeg",
      "/projects/AWS/10.png",
    ],
    color: "#f59e0b",
  },
];

export const education = {
  institution: "University of Tokyo",
  degree: "Bachelor of Science in Computer Science",
  period: "2014 — 2018",
  gpa: "3.9",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Showcase", href: "#showcase" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
