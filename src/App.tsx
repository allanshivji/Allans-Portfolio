// import Portfolio from './Portfolio';

// function App() {
//   return (
//     <div>
//       <Portfolio />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import EducationSection from './sections/EducationSection';
import ContactSection from './sections/ContactSection';
import NavigationBar from './components/NavigationBar';
import TopBanner from './components/TopBanner';
import FloatingCTA from './components/FloatingCTA';
import useScrollAnimation from './hooks/useScrollAnimation';
import { personalInfo } from './data/personalInfo';
import { workExperience } from './data/workExperience';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { education } from './data/education';

const App: React.FC = () => {
  const scrollY = useScrollAnimation();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <TopBanner />
      <NavigationBar personalInfo={personalInfo} />
      <HeroSection personalInfo={personalInfo} />
      <AboutSection />
      <ExperienceSection workExperiences={workExperience} />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <EducationSection education={education} />
      <ContactSection personalInfo={personalInfo} />
      <FloatingCTA scrollY={scrollY} personalInfo={personalInfo} />

      <footer className="py-12 border-t border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/40">
            © 2025 Allan Michael Shivji. Crafted with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
