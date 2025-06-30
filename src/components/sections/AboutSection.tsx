import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { GlassCard } from '../ui/GlassCard';
import { GradientText } from '../ui/GradientText';
import { aboutStats } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
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
              {aboutStats.map((stat, index) => (
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