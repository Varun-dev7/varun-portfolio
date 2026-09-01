/**
 * Services Data
 *
 * Edit this file to add, remove, or modify service offerings.
 * The UI components are rendered from this data.
 */

export const services = [
  {
    id: "service-01",
    number: "01",
    title: "Web Application Development",
    shortTitle: "Web Apps",
    description:
      "Building modern, responsive web applications from concept to deployment. Specializing in React.js and Node.js ecosystems with focus on performance and user experience.",
    icon: "web",
    features: [
      "Custom web application development",
      "Responsive design implementation",
      "Performance optimization",
      "API integration and development",
    ],
  },
  {
    id: "service-02",
    number: "02",
    title: "AI & LLM Integration",
    shortTitle: "AI Integration",
    description:
      "Integrating artificial intelligence capabilities into existing systems or building AI-powered features from scratch. Experience with LLMs, RAG architectures, and automation.",
    icon: "ai",
    features: [
      "LLM integration and fine-tuning",
      "RAG-based knowledge systems",
      "AI-powered feature development",
      "Automation workflows with AI",
    ],
  },
  {
    id: "service-03",
    number: "03",
    title: "Backend & API Development",
    shortTitle: "Backend",
    description:
      "Creating robust server-side solutions with Node.js and Python. Database design, API architecture, authentication systems, and scalable backend infrastructure.",
    icon: "server",
    features: [
      "RESTful and GraphQL API development",
      "Database design and optimization",
      "Authentication and security",
      "Microservices architecture",
    ],
  },
  {
    id: "service-04",
    number: "04",
    title: "Technical Consultation",
    shortTitle: "Consultation",
    description:
      "Providing technical guidance on architecture decisions, technology stack selection, code reviews, and best practices for development teams.",
    icon: "consultation",
    features: [
      "Architecture and technology consulting",
      "Code review and optimization",
      "Team mentoring and training",
      "Technical project planning",
    ],
  },
]

export const getServiceById = (id) => services.find((s) => s.id === id)
