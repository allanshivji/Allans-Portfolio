import React from 'react';
import { Code, Server, Database, Cpu, Award } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { GlassCard } from '../ui/GlassCard';
import { GradientText } from '../ui/GradientText';
import { SkillCategory } from '../../types/portfolio.types';

interface SkillsSectionProps {
  skills: SkillCategory;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const getIconForCategory = (category: string) => {
    if (category.includes('Programming'))
      return <Code className='text-blue-400' size={24} />;
    if (category.includes('Frontend'))
      return <Cpu className='text-purple-400' size={24} />;
    if (category.includes('Backend'))
      return <Server className='text-green-400' size={24} />;
    if (category.includes('Database'))
      return <Database className='text-orange-400' size={24} />;
    return <Award className='text-red-400' size={24} />;
  };

  return (
    <section id='skills' className='py-32 relative'>
      <div className='max-w-7xl mx-auto px-6'>
        <AnimatedSection>
          <h2 className='text-6xl font-thin text-center mb-20'>
            <GradientText>Skills & Technologies</GradientText>
          </h2>
        </AnimatedSection>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {Object.entries(skills).map(([category, skillList], index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <GlassCard className='p-8 h-full'>
                <div className='flex items-center space-x-3 mb-6'>
                  {getIconForCategory(category)}
                  <h3 className='text-xl font-semibold text-white'>
                    {category}
                  </h3>
                </div>
                <div className='space-y-3'>
                  {skillList.map((skill, idx) => (
                    <div
                      key={idx}
                      className='flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300'
                    >
                      <div className='w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300' />
                      <span className='text-white/70 group-hover:text-white transition-colors duration-300'>
                        {skill}
                      </span>
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
