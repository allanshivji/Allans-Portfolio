import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Ask Overflow",
    description: "A Q&A web application for technical questions with real-time interaction capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Firebase"],
    highlights: ["Team collaboration", "Responsive UI", "Redis caching optimization"]
  },
  {
    title: "Food Diaries",
    description: "Recipe-sharing platform with dynamic user interface and scalable backend architecture.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    highlights: ["CRUD operations", "Scalable architecture", "Team development"]
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive bar chart visualizing USD vs. INR growth from 1947-2018.",
    technologies: ["D3.js", "JavaScript"],
    highlights: ["Hover effects", "Data insights", "Interactive design"]
  },
  {
    title: "Mail Me Meeting",
    description: "Meeting transcription tool with real-time speech-to-text and email delivery.",
    technologies: ["Node.js", "Angular.js", "IBM Watson API"],
    highlights: ["Real-time transcription", "Email automation", "AI integration"]
  }
];