import React from 'react';
import { Calendar } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import GradientText from '../components/GradientText';
import { WorkExperience } from '../types';

const ExperienceSection: React.FC<{ workExperiences: WorkExperience[] }> = ({ workExperiences }) => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-6xl font-thin text-center mb-20">
            <GradientText>Experience</GradientText>
          </h2>
        </AnimatedSection>

        <div className="space-y-12">
          {workExperiences.map((job, index) => (
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

export default ExperienceSection;