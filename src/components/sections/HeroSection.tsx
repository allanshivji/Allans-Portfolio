import React, { useState, useEffect } from 'react';
import { Download, Linkedin, Github, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { GradientText } from '../ui/GradientText';
import { ActionButton } from '../ui/ActionButton';
import { PersonalInfo } from '../../types/portfolio.types';
import { downloadFile } from '../../utils/downloadResume';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo }) => {
  const scrollY = useScrollAnimation();
  const [typedText, setTypedText] = useState('Full Stack Developer');
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    setShowContent(true);
    
    const titles = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const interval = setInterval(() => {
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        charIndex--;
        setTypedText(currentTitle.substring(0, charIndex));
        
        if (charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
        }
      } else {
        charIndex++;
        setTypedText(currentTitle.substring(0, charIndex));
        
        if (charIndex === currentTitle.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  // const downloadResume = () => {
  //   const link = document.createElement('a');
  //   link.href = '/resume.pdf';
  //   link.download = 'Allan_Shivji_Resume.pdf';
  //   link.click();
  // };

  // Apple-style scroll calculations
  const heroTransform = scrollY * 0.5;
  const titleScale = Math.max(0.7, 1 - scrollY * 0.001);
  const contentOpacity = Math.max(0, 1 - scrollY * 0.003);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ paddingTop: '60px' }}>
      <div 
        className="text-center z-10 max-w-5xl mx-auto px-6 relative"
        style={{ 
          transform: `translateY(${heroTransform}px) scale(${titleScale})`,
          opacity: contentOpacity
        }}
      >
        {/* Profile Photo */}
        <div className={`mb-8 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-white/30">
                {/* Placeholder - Replace src with your actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 flex items-center justify-center text-white/60 text-sm">
                  Your Photo
                </div>
                {/* Uncomment and add your photo:
                <img 
                  src="/path-to-your-photo.jpg" 
                  alt="Allan Michael Shivji" 
                  className="w-full h-full object-cover"
                />
                */}
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
          
          <h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-thin mb-4 tracking-tight leading-none"
            style={{ 
              transform: `scale(${titleScale})`,
              filter: `blur(${Math.max(0, (scrollY - 200) * 0.01)}px)`
            }}
          >
            <GradientText>Allan Michael Shivji</GradientText>
          </h1>
          <div className="h-12 sm:h-16 flex items-center justify-center">
            <p 
              className="text-2xl sm:text-3xl md:text-4xl font-light text-white/80"
              style={{ opacity: Math.max(0.3, contentOpacity) }}
            >
              {typedText}
              <span className="animate-pulse text-blue-400">|</span>
            </p>
          </div>
        </div>

        <div 
          className={`mb-12 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ 
            opacity: Math.max(0.2, contentOpacity * 0.8),
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Crafting scalable applications with modern technologies. 
            Passionate about creating exceptional user experiences and robust backend systems.
          </p>
        </div>

        <div 
          className={`flex flex-wrap justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ 
            opacity: Math.max(0.1, contentOpacity * 0.7),
            transform: `translateY(${scrollY * 0.4}px) scale(${Math.max(0.8, titleScale)})`
          }}
        >
          <ActionButton 
            onClick={() => downloadFile('Allan_Shivji_Resume.pdf', 'Allan_Shivji_Resume.pdf')} 
            icon={<Download size={20} />}
          >
            Download Resume
          </ActionButton>
          <ActionButton 
            href={personalInfo.linkedin}
            variant="secondary"
            icon={<Linkedin size={20} />}
            external
          >
            LinkedIn
          </ActionButton>
          <ActionButton 
            href={personalInfo.github}
            variant="secondary"
            icon={<Github size={20} />}
            external
          >
            GitHub
          </ActionButton>
        </div>

        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ opacity: Math.max(0, 1 - scrollY * 0.01) }}
        >
          {/* <div className="flex flex-col items-center space-y-2">
            <span className="text-white/40 text-sm">Scroll to explore</span>
            <ChevronDown size={24} className="text-white/40 animate-bounce" />
          </div> */}
        </div>
      </div>
    </section>
  );
};