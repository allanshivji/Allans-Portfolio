import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { GlassCard } from '../ui/GlassCard';
import { GradientText } from '../ui/GradientText';
import { Project } from '../../types/portfolio.types';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects
}) => {
  return (
    <section id='projects' className='py-32 relative'>
      <div className='max-w-7xl mx-auto px-6'>
        <AnimatedSection>
          <h2 className='text-6xl font-thin text-center mb-20'>
            <GradientText>Projects</GradientText>
          </h2>
        </AnimatedSection>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <GlassCard className='p-8 h-full group'>
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-2 text-2xl font-semibold text-white mb-4 hover:text-blue-400 transition-colors duration-300'
                >
                  <span>{project.title}</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4 text-white/50 group-hover:text-white transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition duration-200'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M18 13V18H6V6h5M15 3h6v6M10 14L21 3'
                    />
                  </svg>
                </a>
                <p className='text-white/70 mb-6 leading-relaxed'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className='px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='space-y-2'>
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className='flex items-center space-x-3 text-white/60'
                    >
                      <div className='w-1.5 h-1.5 bg-purple-400 rounded-full' />
                      <span className='text-sm'>{highlight}</span>
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
