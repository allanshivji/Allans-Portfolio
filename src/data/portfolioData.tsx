import { TrendingUp, Award, Users, Code } from 'lucide-react';
import { PersonalInfo, WorkExperience, Project, SkillCategory, Education, StatItem } from '../types/portfolio.types';

export const personalInfo: PersonalInfo = {
  name: "Allan Michael Shivji",
  title: "Full Stack Developer",
  email: "allanmshj@gmail.com",
  phone: "551-227-0064",
  location: "United States",
  linkedin: "https://www.linkedin.com/in/allan-shivji-a14a18a7/",
  github: "https://github.com/allanshivji"
};

export const workExperience: WorkExperience[] = [
  {
    title: "SOFTWARE DEVELOPER",
    company: "Aggio, LLC",
    location: "St. Louis, MO",
    duration: "August 2020 - Present",
    achievements: [
      "Developed scalable full-stack application using React, TypeScript, Material-UI, and Redux, ensuring high performance and seamless user experiences for the poultry and veterinary industries.",
      "Architected and implemented micro frontend-based UI, enabling modular and maintainable application structures.",
      "Optimized API performance by designing and improving GraphQL endpoints, reducing response times by 35%.",
      "Created Python scripts to automate billing reports using Apache Airflow, streamlining internal processes.",
      "Enhanced web accessibility (WCAG compliance) and performance optimization for front-end applications.",
      "Led unit and integration testing using Jest, Cypress, and React Testing Library, reducing bugs by 40%.",
      "Mentored junior developers and conducted code reviews, fostering growth within the development team."
    ]
  },
  {
    title: "SOFTWARE SPECIALIST",
    company: "eClinicalWorks",
    location: "Westborough, MA",
    duration: "June 2017 - July 2018",
    achievements: [
      "Developed front-end features using JavaScript, HTML5 and CSS3, improving software usability for US hospitals.",
      "Customized and optimized complex database queries in MySQL for thousands of patient records.",
      "Resolved server-side issues using Node.js, ensuring smooth system functionality and reduced downtime.",
      "Conducted thorough software testing using Chai and Mocha, enhancing code reliability."
    ]
  }
];

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

export const skills: SkillCategory = {
  "Programming Languages": ["JavaScript (ES6+)", "TypeScript", "Python", "Java"],
  "Frontend Development": ["React.js", "Redux", "Material-UI", "HTML", "CSS/SASS", "D3.js"],
  "Backend Development": ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  "Database Systems": ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
  "Tools & Technologies": ["Git", "Jest", "Cypress", "Google Cloud Platform", "CI/CD"]
};

export const education: Education[] = [
  {
    degree: "Master of Science, Computer Science",
    institution: "Stevens Institute of Technology",
    location: "Hoboken, NJ",
    graduation: "May 2020",
    gpa: "3.93"
  },
  {
    degree: "Bachelor of Science, Computer Science",
    institution: "University of Mumbai",
    location: "Mumbai, India",
    graduation: "May 2017",
    gpa: "3.20"
  }
];

export const aboutStats: StatItem[] = [
  { 
    icon: <TrendingUp className="text-blue-400" size={24} />, 
    title: "Performance", 
    value: "35% improvement" 
  },
  { 
    icon: <Award className="text-purple-400" size={24} />, 
    title: "Quality", 
    value: "40% bug reduction" 
  },
  { 
    icon: <Users className="text-green-400" size={24} />, 
    title: "Leadership", 
    value: "Team mentoring" 
  },
  { 
    icon: <Code className="text-orange-400" size={24} />, 
    title: "Innovation", 
    value: "Micro frontends" 
  }
];