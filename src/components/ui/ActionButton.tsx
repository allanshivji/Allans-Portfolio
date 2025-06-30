import React from 'react';

interface ActionButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  external?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  icon, 
  external = false 
}) => {
  // Determine button type based on href
  const isLinkedIn = href && href.includes('linkedin');
  const isGitHub = href && href.includes('github');
  
  const baseClasses = `
    group relative px-8 py-4 rounded-full font-medium transition-all duration-300 
    hover:scale-105 active:scale-95 flex items-center space-x-3 overflow-hidden
    before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300
  `;
  
  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 to-purple-600 text-white
      hover:from-blue-500 hover:to-purple-500 hover:shadow-2xl hover:shadow-blue-500/25
      before:bg-gradient-to-r before:from-blue-400 before:to-purple-400
      before:opacity-0 hover:before:opacity-20 before:blur-xl before:-z-10
    `,
    secondary: `
      border border-white/20 text-white backdrop-blur-sm hover:shadow-2xl
      before:opacity-0 hover:before:opacity-100 before:-z-10
      ${isLinkedIn ? 'hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-200 before:bg-blue-500/5' : 
        isGitHub ? 'hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-200 before:bg-purple-500/5' : 
        'hover:border-white/40 hover:bg-white/5 hover:shadow-white/10 before:bg-white/5'}
    `
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { 
    href, 
    ...(external && { target: '_blank', rel: 'noopener noreferrer' })
  } : { onClick };

  const isIconOnly = !!icon && !children;

  return (
    <Component
      className={`
        group relative ${isIconOnly ? 'w-12 h-12 p-0 rounded-full' : 'px-6 py-3 rounded-full'} 
        font-medium transition-all duration-300 
        flex items-center justify-center space-x-2 overflow-hidden
        ${variants[variant]} ${baseClasses}
      `}
      {...props}
    >
      <span 
        className={`z-10 flex items-center justify-center ${isIconOnly ? 'text-xl' : ''}`}
      >
        {icon}
      </span>
      {!isIconOnly && (
        <span className="z-10 relative">{children}</span>
      )}

      {/* Animated overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`
          absolute inset-0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
          transition-transform duration-700 ease-out 
          ${
            isLinkedIn
              ? 'bg-gradient-to-r from-transparent via-blue-300/10 to-transparent'
              : isGitHub
              ? 'bg-gradient-to-r from-transparent via-purple-300/10 to-transparent'
              : 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
          }
        `} />
      </div>
    </Component>
  );
};