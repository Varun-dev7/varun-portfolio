/**
 * AI Experiments Data
 *
 * Edit this file to add, remove, or modify experiments.
 * The UI components are rendered from this data.
 */

export const aiExperiments = [
  {
    id: "ai-01",
    number: "01",
    title: "AI Assistant",
    shortTitle: "Assistant",
    category: "AI Assistant",
    description: "An intelligent assistant built with large language models for natural language understanding and task automation.",
    technologies: ["Python", "OpenAI API", "FastAPI", "React"],
    status: "Exploring",
    image: null,
    video: null,
    link: null,
    featured: true,
  },
  {
    id: "ai-02",
    number: "02",
    title: "Voice Interface",
    shortTitle: "Voice UI",
    category: "Voice Interface",
    description: "Voice-controlled interface for hands-free interaction with applications.",
    technologies: ["Python", "Web Speech API", "React"],
    status: "Prototype",
    image: null,
    video: null,
    link: null,
    featured: false,
  },
  {
    id: "ai-03",
    number: "03",
    title: "Workflow Automation",
    shortTitle: "Automation",
    category: "Automation",
    description: "Automated workflows that connect APIs and handle repetitive tasks intelligently.",
    technologies: ["Python", "AI APIs", "Node.js"],
    status: "Building",
    image: null,
    video: null,
    link: null,
    featured: false,
  },
]

export const getFeaturedExperiment = () => aiExperiments.find((exp) => exp.featured)
export const getExperimentById = (id) => aiExperiments.find((exp) => exp.id === id)
