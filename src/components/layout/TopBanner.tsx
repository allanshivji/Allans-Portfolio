import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-center space-x-2 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white/70">Available for new opportunities</span>
          <div className="hidden md:block">•</div>
          <span className="hidden md:inline text-white/50">Currently based in United States</span>
        </div>
      </div>
    </div>
  );
};