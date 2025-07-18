import React from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { TopBanner } from './components/layout/TopBanner';
import { NavigationBar } from './components/layout/NavigationBar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { EducationSection } from './components/sections/EducationSection';
import { ContactSection } from './components/sections/ContactSection';
import { FloatingActions } from './components/FloatingActions';
import {
  personalInfo,
  workExperience,
  projects,
  skills,
  education
} from './data/portfolioData';

const App: React.FC = () => {
  const scrollY = useScrollAnimation();

  return (
    <div className='min-h-screen bg-black text-white overflow-x-hidden relative'>
      {/* Global Constant Animated Background */}
      <div className='fixed inset-0 pointer-events-none z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5' />

        <div
          className='absolute w-96 h-96 rounded-full opacity-10 animate-pulse'
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            left: '20%',
            top: '10%'
          }}
        />

        <div
          className='absolute w-80 h-80 rounded-full opacity-10 animate-pulse'
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            right: '20%',
            bottom: '20%',
            animationDelay: '1s'
          }}
        />

        <div
          className='absolute w-64 h-64 rounded-full opacity-10 animate-pulse'
          style={{
            background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
            left: '10%',
            bottom: '30%',
            animationDelay: '2s'
          }}
        />

        <div
          className='absolute w-72 h-72 rounded-full opacity-8 animate-pulse'
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            right: '10%',
            top: '30%',
            animationDelay: '3s'
          }}
        />

        <div
          className='absolute w-56 h-56 rounded-full opacity-8 animate-pulse'
          style={{
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            left: '50%',
            top: '60%',
            animationDelay: '4s'
          }}
        />

        {/* Additional floating particles throughout */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className='absolute w-2 h-2 bg-white rounded-full opacity-20'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>

      <TopBanner />
      <NavigationBar personalInfo={personalInfo} />
      <HeroSection personalInfo={personalInfo} />
      <AboutSection />
      <ExperienceSection experiences={workExperience} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <EducationSection education={education} />
      <ContactSection personalInfo={personalInfo} />

      <FloatingActions personalInfo={personalInfo} isVisible={scrollY > 400} />

      <Footer />
    </div>
  );
};

export default App;
