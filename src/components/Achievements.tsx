
import React, { useEffect, useRef } from 'react';
import { Award, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const achievements = [
    {
      title: "MD Special Recognition Award",
      organization: "Samsung Annual Awards 2024",
      description: "Recognized for exceptional contributions to voice intelligence and AI innovations.",
      icon: Award
    },
    {
      title: "Samsung Excellence Award 2024",
      organization: "Samsung Quarterly Awards 2024 (Q3)",
      description: "Awarded for outstanding performance and technical leadership in AI projects.",
      icon: Star
    }
  ];

  return (
    <section 
      id="achievements" 
      ref={sectionRef}
      className="section-padding relative overflow-hidden opacity-0"
    >
      <div 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">Recognition</h2>
          <h3 className="text-4xl font-display font-semibold">Awards & Achievements</h3>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="glass p-8 rounded-xl hover-lift"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <achievement.icon size={32} />
                </div>
                <h4 className="text-xl font-semibold mb-1">{achievement.title}</h4>
                <p className="text-primary font-medium mb-3">{achievement.organization}</p>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="text-center max-w-3xl mx-auto">
              <h4 className="text-2xl font-display font-medium mb-6">Professional Certifications</h4>
              <p className="text-gray-600 mb-10">
                Continuously enhancing my skills through professional development and certifications 
                from leading institutions in the field of AI and software engineering.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-soft">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-100 rounded-full">
                    <img 
                      src="https://media.licdn.com/dms/image/C4E0BAQHiKfIfzq6P0w/company-logo_100_100/0/1647618816994?e=1751032800&v=beta&t=Cd0HlKMJw8aweNhsNGPvE8d0QS54kSJb3DqbY25qcBE" 
                      alt="DeepLearning.AI" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h5 className="font-semibold mb-2">DeepLearning.AI</h5>
                  <p className="text-gray-600 text-sm">Advanced certifications in Generative AI and LLM applications</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-soft">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-100 rounded-full">
                    <img 
                      src="https://media.licdn.com/dms/image/D560BAQE0mUQ8YvhV9g/company-logo_100_100/0/1688380718196?e=1751032800&v=beta&t=EK5bO9lr-WXwI6FdMdL95uzEQ1QBqzaQKQbfUHlGHYo" 
                      alt="Microsoft" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h5 className="font-semibold mb-2">Microsoft</h5>
                  <p className="text-gray-600 text-sm">Specialized training in AI safety and responsible AI development</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-soft">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-100 rounded-full">
                    <img 
                      src="https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1751032800&v=beta&t=v_6qBrGwgCnGw3MhNAB8kgylkSPFVskGzxAzxCk9F5s" 
                      alt="LinkedIn" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h5 className="font-semibold mb-2">LinkedIn</h5>
                  <p className="text-gray-600 text-sm">Professional certifications in NLP and document processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
