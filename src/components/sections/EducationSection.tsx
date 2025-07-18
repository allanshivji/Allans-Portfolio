import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { GlassCard } from '../ui/GlassCard';
import { GradientText } from '../ui/GradientText';
import { Education } from '../../types/portfolio.types';

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education
}) => {
  return (
    <section id='education' className='py-32 bg-gray-900/50'>
      <div className='max-w-7xl mx-auto px-6'>
        <AnimatedSection>
          <h2 className='text-6xl font-thin text-center mb-20'>
            <GradientText>Education</GradientText>
          </h2>
        </AnimatedSection>
        <div className='grid md:grid-cols-2 gap-8'>
          {education.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <GlassCard className='p-8 hover:border-blue-500/50 transition-all duration-300'>
                <h3 className='text-2xl font-semibold text-blue-400 mb-2'>
                  {edu.degree}
                </h3>
                <p className='text-xl text-white/80 mb-4'>{edu.institution}</p>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between text-white/60'>
                  <div className='flex items-center space-x-2 mb-2 sm:mb-0'>
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <div className='flex items-center space-x-2'>
                      <Calendar size={16} />
                      <span>{edu.graduation}</span>
                    </div>
                    <div className='px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm border border-green-800/50'>
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
