import React from 'react';

const GradientText: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => (
  <span className={`bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

export default GradientText;
