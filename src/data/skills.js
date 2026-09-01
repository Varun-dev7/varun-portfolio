/**
 * Skills Data
 *
 * Edit this file to add, remove, or modify skills.
 * The UI components are generated from this data.
 */

export const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript (Basic)" },
      { name: "C#" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "Ionic" },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    icon: "⚙️",
    skills: [
      { name: "ASP.NET Core Web API" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "SignalR" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MySQL" },
      { name: "SQL Server" },
      { name: "Entity Framework Core" },
      { name: "LINQ" },
    ],
  },
  {
    id: "ai-ml",
    name: "AI & ML",
    icon: "🤖",
    skills: [
      { name: "RAG" },
      { name: "LLM Integration" },
      { name: "OpenAI" },
      { name: "Gemini" },
      { name: "Prompt Engineering" },
      { name: "Vector Embeddings" },
      { name: "Semantic Search" },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    icon: "🔧",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Azure DevOps" },
      { name: "Postman" },
    ],
  },
]

export const getSkillCategoryById = (id) => skillCategories.find((cat) => cat.id === id)
