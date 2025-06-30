import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, Linkedin } from 'lucide-react';
import GradientText from '../components/GradientText';
import ActionButton from '../components/ActionButton';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { PersonalInfo } from '../types';
import { downloadResume } from '../utils/downloadResume';

const HeroSection: React.FC<{ personalInfo: PersonalInfo }> = ({ personalInfo }) => {
  const scrollY = useScrollAnimation();
  const [typedText, setTypedText] = useState('Full Stack Developer');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
    const titles = ['Full Stack Developer', 'Front End Developer', 'Back End Developer'];
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
          setTimeout(() => (isDeleting = true), 2000);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const heroTransform = scrollY * 0.5;
  const titleScale = Math.max(0.7, 1 - scrollY * 0.001);
  const contentOpacity = Math.max(0, 1 - scrollY * 0.0012);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div
        className="text-center z-10 max-w-5xl mx-auto px-6 relative"
        style={{ transform: `translateY(${heroTransform}px) scale(${titleScale})`, opacity: contentOpacity }}
      >
        <div className={`mb-8 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-40 h-40 rounded-full mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-white/10 flex items-center justify-center">
            <div className="text-white/60 text-sm">Your Photo</div>
          </div>
          <h1 className="text-6xl sm:text-7xl font-thin mt-8 mb-4">
            <GradientText>Allan Michael Shivji</GradientText>
          </h1>
          <p className="text-3xl font-light text-white/80">{typedText}<span className="animate-pulse text-blue-400">|</span></p>
        </div>

        <div className={`mt-12 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ opacity: Math.max(0.2, contentOpacity * 0.8) }}>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Crafting scalable applications with modern technologies. Passionate about creating exceptional user experiences and robust backend systems.
          </p>
        </div>

        <div className={`mt-10 flex justify-center gap-4 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ opacity: Math.max(0.1, contentOpacity * 0.7) }}>
          <ActionButton onClick={downloadResume} icon={<Download size={20} />}>Resume</ActionButton>
          <ActionButton href={personalInfo.linkedin} variant="secondary" icon={<Linkedin size={20} />} external>LinkedIn</ActionButton>
          <ActionButton href={personalInfo.github} variant="secondary" icon={<Github size={20} />} external>GitHub</ActionButton>
        </div>

        {/* <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center">
            <span className="text-white/40 text-sm">Scroll to explore</span>
            <ChevronDown size={24} className="text-white/40 animate-bounce" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;