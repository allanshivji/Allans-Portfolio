import React from 'react';
import { Download, Github, Linkedin } from 'lucide-react';
import ActionButton from './ActionButton';
import { downloadResume } from '../utils/downloadResume';
import { PersonalInfo } from '../types';

interface Props {
  scrollY: number;
  personalInfo: PersonalInfo;
}

const FloatingCTA: React.FC<Props> = ({ scrollY, personalInfo }) => {
  if (scrollY <= 400) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4 transition-all duration-500">
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
  );
};

export default FloatingCTA;