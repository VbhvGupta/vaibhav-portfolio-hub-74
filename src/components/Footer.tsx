
import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-16 bg-gradient-to-b from-blue-50 to-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-2xl font-display font-semibold tracking-tight">
                <span className="text-primary">V</span>aibhav Gupta
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-primary transition-colors">Experience</a>
              <a href="#education" className="text-gray-600 hover:text-primary transition-colors">Education</a>
              <a href="#skills" className="text-gray-600 hover:text-primary transition-colors">Skills</a>
              <a href="#achievements" className="text-gray-600 hover:text-primary transition-colors">Achievements</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-600 mb-4 md:mb-0">
                © {new Date().getFullYear()} Vaibhav Gupta. All rights reserved.
              </p>
              
              <div className="flex items-center">
                <span className="text-gray-600 flex items-center">
                  Built with <Heart size={16} className="mx-1 text-red-500" /> and modern web technologies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover-lift"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
