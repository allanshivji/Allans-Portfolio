import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollY = useScrollAnimation();

  useEffect(() => {
    setIsScrolled(scrollY > 100);
  }, [scrollY]);

  // Close mobile menu when clicking on a nav item
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
          {/* Logo */}
          <div
            className={`
              text-xl font-bold transition-all duration-500 z-50 relative
              ${isScrolled ? 'scale-90' : 'scale-100'}
            `}
          >
            <GradientText>AS</GradientText>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6'>
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

          {/* Mobile Hamburger Button */}
          <button
            className='md:hidden z-50 relative p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle mobile menu'
          >
            <div className='w-6 h-6 flex items-center justify-center'>
              {isMobileMenuOpen ? (
                <X
                  size={20}
                  className='text-white transition-transform duration-300 rotate-90'
                />
              ) : (
                <Menu
                  size={20}
                  className='text-white transition-transform duration-300'
                />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/50 transition-opacity duration-500 md:hidden z-30
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
        style={{ top: isScrolled ? '0' : '40px' }}
      />

      {/* Mobile Menu Slide Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-4/5 max-w-sm bg-black/95 backdrop-blur-2xl 
          border-l border-white/10 shadow-2xl transition-transform duration-500 ease-out md:hidden z-40
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{
          top: isScrolled ? '0' : '40px',
          height: isScrolled ? '100vh' : 'calc(100vh - 40px)'
        }}
      >
        {/* Mobile Menu Content */}
        <div className='flex flex-col h-full pt-20 px-8'>
          {/* Navigation Links */}
          <div className='flex flex-col space-y-6'>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`
                  text-xl font-light text-white/80 hover:text-white 
                  transition-all duration-300 hover:translate-x-2 relative group
                  ${
                    isMobileMenuOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-4'
                  }
                `}
                style={{
                  transitionDelay: `${(index + 1) * 50}ms`
                }}
              >
                <span className='relative'>
                  {item.label}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full'></span>
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className='mt-auto pb-8'>
            <div
              className={`
                transition-all duration-500 delay-500
                ${
                  isMobileMenuOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4'
                }
              `}
            >
              <div className='w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6'></div>
              <p className='text-white/40 text-sm mb-3'>
                © 2025 Allan Michael Shivji
              </p>
              <div className='flex items-center space-x-2'>
                <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                <span className='text-white/60 text-xs'>
                  Available for new opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
