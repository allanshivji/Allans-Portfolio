import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ActionButton from '../components/ActionButton';
import GradientText from '../components/GradientText';
import { PersonalInfo } from '../types';

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

export default ContactSection;