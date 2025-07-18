export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  url: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduation: string;
  gpa: string;
}

export interface SkillCategory {
  [key: string]: string[];
}

export interface StatItem {
  icon: React.ReactNode;
  title: string;
  value: string;
}
