import React from 'react';

const ActionButton: React.FC<{
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  external?: boolean;
}> = ({ children, onClick, href, variant = 'primary', icon, external = false }) => {
  const isLinkedIn = href?.includes('linkedin');
  const isGitHub = href?.includes('github');
  const isIconOnly = !!icon && !children;

  const baseClasses = 'transition-all duration-300 flex items-center justify-center overflow-hidden';

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 to-purple-600 text-white
      hover:from-blue-500 hover:to-purple-500 hover:shadow-2xl hover:shadow-blue-500/25
    `,
    secondary: `
      border border-white/20 text-white backdrop-blur-sm hover:shadow-2xl
      ${isLinkedIn ? 'hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-200' :
        isGitHub ? 'hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-200' :
        'hover:border-white/40 hover:bg-white/5 hover:shadow-white/10'}
    `
  };

  const Component = href ? 'a' : 'button';
  const props = href ? {
    href,
    ...(external && { target: '_blank', rel: 'noopener noreferrer' })
  } : { onClick };

  return (
    <Component
      className={`
        ${baseClasses} ${variants[variant]}
        ${isIconOnly ? 'w-12 h-12 p-0 rounded-full' : 'px-6 py-3 rounded-full space-x-2'}
      `}
      {...props}
    >
      {icon && <span className="z-10 flex items-center justify-center text-xl">{icon}</span>}
      {!isIconOnly && children && <span className="z-10 relative">{children}</span>}
    </Component>
  );
};

export default ActionButton;