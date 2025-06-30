import React, { useState, useEffect, useRef } from 'react';
import { Download, Github, Linkedin, Mail, Phone, MapPin, Calendar, Code, Server, Database, Cpu, Award, Users, TrendingUp, ChevronDown } from 'lucide-react';

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  graduation: string;
  gpa: string;
}

interface SkillCategory {
  [key: string]: string[];
}

const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
};

const AnimatedSection: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const GlassCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  hoverEffect?: boolean;
}> = ({ children, className = "", hoverEffect = true }) => {
  return (
    <div className={`
      bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl
      ${hoverEffect ? 'hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:-translate-y-1' : ''}
      transition-all duration-500 ease-out
      ${className}
    `}>
      {children}
    </div>
  );
};

const GradientText: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <span className={`bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

const ActionButton: React.FC<{
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  external?: boolean;
}> = ({ children, onClick, href, variant = 'primary', icon, external = false }) => {
  // Determine button type based on href
  const isLinkedIn = href && href.includes('linkedin');
  const isGitHub = href && href.includes('github');
  
  const baseClasses = `
    group relative px-8 py-4 rounded-full font-medium transition-all duration-300 
    hover:scale-105 active:scale-95 flex items-center space-x-3 overflow-hidden
    before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300
  `;
  
  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 to-purple-600 text-white
      hover:from-blue-500 hover:to-purple-500 hover:shadow-2xl hover:shadow-blue-500/25
      before:bg-gradient-to-r before:from-blue-400 before:to-purple-400
      before:opacity-0 hover:before:opacity-20 before:blur-xl before:-z-10
    `,
    secondary: `
      border border-white/20 text-white backdrop-blur-sm hover:shadow-2xl
      before:opacity-0 hover:before:opacity-100 before:-z-10
      ${isLinkedIn ? 'hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-200 before:bg-blue-500/5' : 
        isGitHub ? 'hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-200 before:bg-purple-500/5' : 
        'hover:border-white/40 hover:bg-white/5 hover:shadow-white/10 before:bg-white/5'}
    `
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { 
    href, 
    ...(external && { target: '_blank', rel: 'noopener noreferrer' })
  } : { onClick };

  const isIconOnly = !!icon && !children;

  return (
    <Component
    className={`
      group relative ${isIconOnly ? 'w-12 h-12 p-0 rounded-full' : 'px-6 py-3 rounded-full'} 
      font-medium transition-all duration-300 
      flex items-center justify-center space-x-2 overflow-hidden
      ${variants[variant]} ${baseClasses}
    `}
    {...props}
  >
    <span 
      className={`z-10 flex items-center justify-center ${isIconOnly ? 'text-xl' : ''}`}
    >
      {icon}
    </span>
    {!isIconOnly && (
      <span className="z-10 relative">{children}</span>
    )}

    {/* Animated overlay */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className={`
        absolute inset-0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
        transition-transform duration-700 ease-out 
        ${
          isLinkedIn
            ? 'bg-gradient-to-r from-transparent via-blue-300/10 to-transparent'
            : isGitHub
            ? 'bg-gradient-to-r from-transparent via-purple-300/10 to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
        }
      `} />
    </div>
  </Component>
  );
};

const TopBanner: React.FC = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-center space-x-2 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white/70">Available for new opportunities</span>
          <div className="hidden md:block">•</div>
          <span className="hidden md:inline text-white/50">Currently based in United States</span>
        </div>
      </div>
    </div>
  );
};

const NavigationBar: React.FC<{ personalInfo: PersonalInfo }> = ({ personalInfo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollY = useScrollAnimation();

  useEffect(() => {
    setIsScrolled(scrollY > 100);
  }, [scrollY]);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`
      fixed w-full z-40 transition-all duration-700 ease-out
      ${isScrolled 
        ? 'top-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl pt-10' 
        : 'top-10 bg-transparent'
      }
    `}>
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className={`
            text-xl font-bold transition-all duration-500
            ${isScrolled ? 'scale-90' : 'scale-100'}
          `}
          >
            <GradientText>AS</GradientText>
          </div>
          
          {/* Navigation Links - Clean and simple */}
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-105 relative group text-sm"
                style={{ 
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroSection: React.FC<{ personalInfo: PersonalInfo }> = ({ personalInfo }) => {
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

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Allan_Shivji_Resume.pdf';
    link.click();
  };

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
            onClick={downloadResume} 
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
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/40 text-sm">Scroll to explore</span>
            <ChevronDown size={24} className="text-white/40 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  const stats = [
    { icon: <TrendingUp className="text-blue-400" size={24} />, title: "Performance", value: "35% improvement" },
    { icon: <Award className="text-purple-400" size={24} />, title: "Quality", value: "40% bug reduction" },
    { icon: <Users className="text-green-400" size={24} />, title: "Leadership", value: "Team mentoring" },
    { icon: <Code className="text-orange-400" size={24} />, title: "Innovation", value: "Micro frontends" }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-6xl font-thin text-center mb-20">
            <GradientText>About Me</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={200}>
            <div className="space-y-6">
              <p className="text-2xl text-white/80 leading-relaxed">
                I'm a passionate Full Stack Developer with over 4 years of experience building 
                scalable applications that serve thousands of users in the healthcare and 
                agricultural technology sectors.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                My expertise spans modern web technologies including React, TypeScript, Node.js, 
                and cloud platforms. I believe in writing clean, maintainable code and creating 
                intuitive user experiences that make a real difference.
              </p>
              <div className="flex flex-wrap gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-blue-400" />
                  <span className="text-white/70">United States</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-purple-400" />
                  <span className="text-white/70">allanmshj@gmail.com</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <GlassCard key={index} className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{stat.title}</h3>
                  <p className="text-white/60 text-sm">{stat.value}</p>
                </GlassCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection: React.FC<{ experiences: WorkExperience[] }> = ({ experiences }) => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-6xl font-thin text-center mb-20">
            <GradientText>Experience</GradientText>
          </h2>
        </AnimatedSection>

        <div className="space-y-12">
          {experiences.map((job, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <GlassCard className="p-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-semibold mb-2">
                      <GradientText>{job.title}</GradientText>
                    </h3>
                    <p className="text-xl text-white/80">{job.company} • {job.location}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-white/60 mt-4 lg:mt-0">
                    <Calendar size={18} />
                    <span>{job.duration}</span>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {job.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-4 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-6xl font-thin text-center mb-20">
            <GradientText>Projects</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <GlassCard className="p-8 h-full group">
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-white/60">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection: React.FC<{ skills: SkillCategory }> = ({ skills }) => {
  const getIconForCategory = (category: string) => {
    if (category.includes('Programming')) return <Code className="text-blue-400" size={24} />;
    if (category.includes('Frontend')) return <Cpu className="text-purple-400" size={24} />;
    if (category.includes('Backend')) return <Server className="text-green-400" size={24} />;
    if (category.includes('Database')) return <Database className="text-orange-400" size={24} />;
    return <Award className="text-red-400" size={24} />;
  };

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-6xl font-thin text-center mb-20">
            <GradientText>Skills & Technologies</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, skillList], index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <GlassCard className="p-8 h-full">
                <div className="flex items-center space-x-3 mb-6">
                  {getIconForCategory(category)}
                  <h3 className="text-xl font-semibold text-white">{category}</h3>
                </div>
                <div className="space-y-3">
                  {skillList.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-white/70 group-hover:text-white transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationSection: React.FC<{ education: Education[] }> = ({ education }) => {
  return (
    <section id="education" className="py-32 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-6xl font-thin text-center mb-20">
            <GradientText>Education</GradientText>
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <GlassCard className="p-8 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">{edu.degree}</h3>
                <p className="text-xl text-white/80 mb-4">{edu.institution}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-white/60">
                  <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{edu.graduation}</span>
                    </div>
                    <div className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm border border-green-800/50">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection: React.FC<{ personalInfo: PersonalInfo }> = ({ personalInfo }) => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-6xl font-thin mb-8">
            <GradientText>Let's Work Together</GradientText>
          </h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's create something amazing together.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-wrap justify-center gap-6">
            <ActionButton 
              href={`mailto:${personalInfo.email}`}
              icon={<Mail size={20} />}
            >
              Get In Touch
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
        </AnimatedSection>
      </div>
    </section>
  );
};

const Portfolio: React.FC = () => {
  const personalInfo: PersonalInfo = {
    name: "Allan Michael Shivji",
    title: "Full Stack Developer",
    email: "allanmshj@gmail.com",
    phone: "551-227-0064",
    location: "United States",
    linkedin: "https://linkedin.com/in/allan-shivji",
    github: "https://github.com/allanshivji"
  };

  const workExperience: WorkExperience[] = [
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

  const projects: Project[] = [
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

  const skills: SkillCategory = {
    "Programming Languages": ["JavaScript (ES6+)", "TypeScript", "Python", "Java"],
    "Frontend Development": ["React.js", "Redux", "Material-UI", "HTML", "CSS/SASS", "D3.js"],
    "Backend Development": ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    "Database Systems": ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
    "Tools & Technologies": ["Git", "Jest", "Cypress", "Google Cloud Platform", "CI/CD"]
  };

  const education: Education[] = [
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

  const scrollY = useScrollAnimation();

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Allan_Shivji_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Global Constant Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5" />
        
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 animate-pulse" 
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            left: '20%',
            top: '10%'
          }} 
        />
        
        <div 
          className="absolute w-80 h-80 rounded-full opacity-10 animate-pulse" 
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            right: '20%',
            bottom: '20%',
            animationDelay: '1s'
          }} 
        />
        
        <div 
          className="absolute w-64 h-64 rounded-full opacity-10 animate-pulse" 
          style={{
            background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
            left: '10%',
            bottom: '30%',
            animationDelay: '2s'
          }} 
        />
        
        <div 
          className="absolute w-72 h-72 rounded-full opacity-8 animate-pulse" 
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            right: '10%',
            top: '30%',
            animationDelay: '3s'
          }} 
        />
        
        <div 
          className="absolute w-56 h-56 rounded-full opacity-8 animate-pulse" 
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
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
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
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <EducationSection education={education} />
      <ContactSection personalInfo={personalInfo} />
      {scrollY > 400 && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4 transition-opacity duration-500">
          <ActionButton
            onClick={downloadResume}
            icon={<Download size={18} />}
            variant="primary"
          />
          <ActionButton
            href={personalInfo.linkedin}
            variant="secondary"
            icon={<Linkedin size={18} />}
            external
          />
          <ActionButton
            href={personalInfo.github}
            variant="secondary"
            icon={<Github size={18} />}
            external
          />
        </div>
      )}

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

export default Portfolio;