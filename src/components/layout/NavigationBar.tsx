import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { GradientText } from '../ui/GradientText';
import { PersonalInfo } from '../../types/portfolio.types';

interface NavigationBarProps {
  personalInfo: PersonalInfo;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  personalInfo
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollY = useScrollAnimation();

  useEffect(() => {
    setIsScrolled(scrollY > 100);
  }, [scrollY]);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`
      fixed w-full z-40 transition-all duration-700 ease-out
      ${
        isScrolled
          ? 'top-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl pt-10'
          : 'top-10 bg-transparent'
      }
    `}
    >
      <div className='max-w-7xl mx-auto px-6 py-2'>
        <div className='flex items-center justify-between'>
          <div
            className={`
            text-xl font-bold transition-all duration-500
            ${isScrolled ? 'scale-90' : 'scale-100'}
          `}
          >
            <GradientText>AS</GradientText>
          </div>

          {/* Navigation Links - Clean and simple */}
          <div className='flex items-center space-x-6'>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className='text-white/70 hover:text-white transition-all duration-300 hover:scale-105 relative group text-sm'
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full'></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
