import React from 'react';
import { Download, Linkedin, Github } from 'lucide-react';
import { ActionButton } from './ui/ActionButton';
import { PersonalInfo } from '../types/portfolio.types';
import { downloadFile } from '../utils/downloadResume';

interface FloatingActionsProps {
  personalInfo: PersonalInfo;
  isVisible: boolean;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ personalInfo, isVisible }) => {
  // const downloadResume = () => {
  //   const link = document.createElement('a');
  //   link.href = '/resume.pdf';
  //   link.download = 'Allan_Shivji_Resume.pdf';
  //   link.click();
  // };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4 transition-opacity duration-500">
      <ActionButton
        onClick={() => downloadFile('Allan_Shivji_Resume.pdf', 'Allan_Shivji_Resume.pdf')}
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