import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <span className={`bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};