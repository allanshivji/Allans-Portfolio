import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true
}) => {
  return (
    <div
      className={`
      bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl
      ${hoverEffect ? 'hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:-translate-y-1' : ''}
      transition-all duration-500 ease-out
      ${className}
    `}
    >
      {children}
    </div>
  );
};
