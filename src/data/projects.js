/**
 * Projects Data
 *
 * Media: Images are served from /images/projects/ (public folder)
 */

export const projects = [
  {
    id: "project-01",
    number: "01",
    title: "Doctora",
    shortTitle: "Doctora",
    subtitle: "Real-Time OPD & Clinic Queue Management Platform",
    period: "Aug 2024 — Present",
    description:
      "A digital OPD management system actively used in clinics, replacing manual patient registration and token-based workflows.",
    category: "Healthcare / Full Stack",
    technologies: ["React.js", "ASP.NET Core", "C#", "MySQL", "SignalR", "REST APIs"],
    features: [
      "Doctor discovery by state and city",
      "Real-time appointment booking",
      "Appointment availability",
      "QR-code patient registration",
      "Unique reference numbers",
      "Doctor dashboard",
      "Reception dashboard",
      "Display dashboard",
      "Real-time queue synchronization using SignalR",
      "Responsive web application",
      "Android application contribution",
    ],
    image: "/images/projects/Doctora.png",
    images: [
      "/images/projects/Doctora.png",
    ],
    video: null,
    github: null,
    live: "https://www.doctora.live/",
    playStore: "https://play.google.com/store/apps/details?id=live.doctora.app&pcampaignid=web_share",
    featured: true,
    year: 2024,
    // Case Study Content
    overview:
      "Doctora is a real-time OPD and clinic queue management platform designed to digitize patient registration, appointment booking, doctor discovery, and clinic queue workflows. The platform supports web and Android experiences and provides synchronized dashboards for doctors, reception staff, and display screens.",
    problem:
      "Traditional clinic OPD workflows rely on manual patient registration and token-based processes. This can make registration, queue coordination, appointment handling, and communication between clinic screens difficult to manage efficiently.",
    solution:
      "Doctora digitizes the entire OPD workflow through digital patient registration, doctor discovery, appointment booking, QR-based registration with unique reference numbers, and real-time queue synchronization across dedicated dashboards for doctors, reception staff, and display screens.",
    keyFeatures: [
      {
        title: "Doctor Discovery",
        description: "Doctors can be discovered by state and city with detailed profiles and specializations."
      },
      {
        title: "Appointment Booking",
        description: "Real-time appointment booking with live availability checks and instant confirmations."
      },
      {
        title: "QR Patient Registration",
        description: "QR-based patient registration generates unique reference numbers for faster verification."
      },
      {
        title: "Real-Time Queue",
        description: "SignalR keeps queue information synchronized across all screens and user roles."
      },
      {
        title: "Doctor Dashboard",
        description: "Dedicated dashboard for doctors to manage their queue and patient appointments."
      },
      {
        title: "Reception Dashboard",
        description: "Reception staff can manage patient registration and queue workflows efficiently."
      },
      {
        title: "Display Dashboard",
        description: "Synchronized display screens show live queue updates for patients."
      },
      {
        title: "Web + Android",
        description: "Responsive web application with Android app published on Google Play Store."
      }
    ],
    technicalImplementation: {
      frontend: "React.js",
      backend: "ASP.NET Core",
      language: "C#",
      database: "MySQL",
      realtime: "SignalR",
      api: "REST APIs"
    },
    realtimeArchitecture:
      "SignalR was used to synchronize Doctor, Reception, and Display dashboards so queue changes are reflected across all screens in real time. This enables instant updates when a patient is registered, queue position changes, or an appointment is completed.",
    platforms: ["Web", "Android"]
  },
  {
    id: "project-02",
    number: "02",
    title: "Enterprise AI Knowledge Bot",
    shortTitle: "AI Knowledge Bot",
    subtitle: "AI-Powered Knowledge Management Platform",
    period: "Jul 2026 — Aug 2026",
    description:
      "An intelligent chatbot system leveraging RAG architecture and LLMs to provide accurate, context-aware responses from enterprise knowledge bases.",
    category: "AI / RAG / Full Stack",
    technologies: [
      "React.js",
      "ASP.NET Core 8",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "RAG",
      "Gemini",
      "OpenAI",
      "Vector Embeddings",
      "Semantic Search",
    ],
    features: [
      "PDF ingestion",
      "Word document ingestion",
      "TXT document ingestion",
      "File validation",
      "Document chunking",
      "Embedding generation",
      "Semantic search",
      "RAG",
      "Persistent conversation history",
      "Source citations",
      "Context-aware responses",
      "Gemini/OpenAI integration",
      "Hybrid SQL Server + unstructured document architecture",
      "Repository / Unit of Work pattern",
    ],
    image: "/images/projects/Ai-knowledge-bot.png",
    video: null,
    github: null,
    live: "https://aiknowledgebot.netlify.app",
    playStore: null,
    featured: true,
    year: 2026,
  },
  {
    id: "project-03",
    number: "03",
    title: "AcademyGo",
    shortTitle: "AcademyGo",
    subtitle: "E-Learning Management System",
    period: "Oct 2024 — Jan 2025",
    description:
      "An e-learning management system with course, batch, and trainee management, MCQ testing, and role-based access.",
    category: "Education / Backend",
    technologies: [
      "ASP.NET Core Web API",
      "C#",
      "Entity Framework Core",
      "LINQ",
      "MySQL",
      "Azure DevOps",
    ],
    features: [
      "20+ REST API endpoints",
      "Course management",
      "Batch management",
      "Trainee management",
      "MCQ-based testing",
      "Subject management",
      "Payment management",
      "Test data",
      "Notice board",
      "ASP.NET Identity",
      "JWT",
      "Role-based access (Trainee, Instructor, Admin)",
      "Login activity logs",
    ],
    image: "/images/projects/Academy-go.png",
    video: null,
    github: null,
    live: null,
    playStore: null,
    featured: true,
    year: 2025,
  },
  {
    id: "project-04",
    number: "04",
    title: "Task Manager",
    shortTitle: "Task Manager",
    subtitle: "Full Stack Task Management Application",
    period: "2024",
    description:
      "A collaborative task management application with team workspaces and progress tracking.",
    category: "Web App",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    features: [],
    image: "/images/projects/Task-manager.png",
    video: null,
    github: null,
    live: null,
    playStore: null,
    featured: false,
    year: 2024,
  },
]

export const getFeaturedProjects = () => projects.filter((p) => p.featured)
export const getProjectById = (id) => projects.find((p) => p.id === id)
export const getAllProjects = () => projects
