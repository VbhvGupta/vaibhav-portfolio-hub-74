
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    'Senior Software Engineer',
    'AI Enthusiast',
    'Voice Intelligence Expert',
    'LLM Specialist'
  ];

  useEffect(() => {
    setLoaded(true);
    
    const typeText = () => {
      const currentText = texts[textIndex];
      let i = 0;
      
      const typing = setInterval(() => {
        if (i <= currentText.length) {
          setTypedText(currentText.slice(0, i));
          i++;
        } else {
          clearInterval(typing);
          
          // Wait before erasing
          setTimeout(() => {
            const erasing = setInterval(() => {
              if (i > 0) {
                i--;
                setTypedText(currentText.slice(0, i));
              } else {
                clearInterval(erasing);
                setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
              }
            }, 50);
          }, 2000);
        }
      }, 100);
    };
    
    typeText();
    
    return () => {
      // Clear any intervals on unmount
    };
  }, [textIndex]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <div 
        className="absolute top-0 right-0 w-full h-full -z-10 bg-gradient-to-br from-blue-50 to-white opacity-50"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${loaded ? 'animate-slide-up' : 'opacity-0'}`}>
            <div>
              <h4 className="text-lg font-medium text-primary mb-3">Hello, I'm</h4>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
                Vaibhav Gupta
              </h1>
              <div className="h-16">
                <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
                  {typedText}
                  <span className="animate-pulse-soft">|</span>
                </h2>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Passionate about AI and software engineering, specializing in voice intelligence, 
              generative AI applications, and LLMOps. Currently building innovative solutions at Samsung R&D.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <a 
                href="#about" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium flex items-center transition-colors group"
              >
                Learn More 
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </a>
              <a 
                href="#contact" 
                className="border border-gray-300 hover:border-primary hover:text-primary px-8 py-3 rounded-full font-medium transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className={`relative ${loaded ? 'animate-fade-in' : 'opacity-0'} animation-delay-300`}>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-soft bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQGu76LdZC5X6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706169602682?e=1748476800&v=beta&t=-ilVoo9hSfayhLVrsWlaexSK9MN6RkfLZlbYvYbJHQ0" 
                  alt="Vaibhav Gupta" 
                  className="object-cover w-full h-full rounded-2xl animate-float"
                  loading="eager"
                />
              </div>
              <div 
                className="absolute -right-4 -bottom-4 w-full h-full border-2 border-primary rounded-3xl -z-10"
                aria-hidden="true"
              />
            </div>
            
            <div className="absolute -right-6 top-12 glass p-4 rounded-xl shadow-soft animate-float animation-delay-700">
              <img 
                src="https://media.licdn.com/dms/image/v2/D560BAQFhkwNLmYJr9A/company-logo_400_400/company-logo_400_400/0/1725008298192/samsungrndindiabangalore_logo?e=1748476800&v=beta&t=M4FZkeaSZBMxWG1oAoC_lHmg0EVyKKPEAgeh5NJrs-U" 
                alt="Samsung R&D" 
                className="w-16 h-16 object-contain"
              />
            </div>
            
            <div className="absolute -left-10 bottom-20 glass p-4 rounded-xl shadow-soft animate-float animation-delay-1000">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">AI Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
