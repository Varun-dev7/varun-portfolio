/**
 * Experience Data
 *
 * Edit this file to add, remove, or modify experience entries.
 * The UI components are rendered from this data.
 */

export const experiences = [
  {
    id: "experience-01",
    period: "Jul 2025 — Present",
    role: "Full Stack Developer",
    company: "Cubicle Eight India",
    location: "India",
    type: "Full-time",
    description: "Developed and maintained production-ready web applications using React.js, ASP.NET Core, C#, and MySQL in an Agile environment.",
    responsibilities: [
      "Developed and maintained production-ready web applications using React.js, ASP.NET Core, C#, and MySQL in an Agile environment.",
      "Integrated frontend applications with RESTful APIs.",
      "Implemented authentication, authorization, and role-based access.",
      "Fixed production issues and optimized existing features.",
      "Performed code reviews and collaborated with designers and backend developers.",
    ],
    technologies: ["React.js", "ASP.NET Core", "C#", "MySQL", "REST APIs", "SignalR"],
    current: true,
  },
  {
    id: "experience-02",
    period: "Jul 2024 — Jun 2025",
    role: "Full Stack Developer Trainee",
    company: "Coders Academy India",
    location: "India",
    type: "Training",
    description: "Completed a 1-year full-stack training program building applications end-to-end using React.js and .NET Core.",
    responsibilities: [
      "Completed a 1-year full-stack training program.",
      "Built applications end-to-end using React.js and .NET Core.",
      "Developed JWT-secured REST APIs using .NET Core and C#.",
      "Built 10+ CRUD endpoints and responsive React.js + Tailwind CSS interfaces.",
    ],
    technologies: ["React.js", ".NET Core", "C#", "JWT", "REST APIs", "Tailwind CSS"],
    current: false,
  },
]

export const getExperienceById = (id) => experiences.find((exp) => exp.id === id)
export const getCurrentExperience = () => experiences.find((exp) => exp.current)
