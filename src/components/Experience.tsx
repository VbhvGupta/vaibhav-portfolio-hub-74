
import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
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

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-blue-50 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">Professional Journey</h2>
          <h3 className="text-4xl font-display font-semibold">Work Experience</h3>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="mr-4">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D560BAQFhkwNLmYJr9A/company-logo_400_400/company-logo_400_400/0/1725008298192/samsungrndindiabangalore_logo?e=1748476800&v=beta&t=M4FZkeaSZBMxWG1oAoC_lHmg0EVyKKPEAgeh5NJrs-U" 
                    alt="Samsung R&D Institute" 
                    className="w-12 h-12 object-contain rounded-full bg-white shadow-soft p-1"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Senior Software Engineer</h4>
                  <div className="flex items-center text-gray-600">
                    <span className="flex items-center">
                      <Briefcase size={16} className="mr-2" />
                      Samsung R&D Institute India - Bangalore
                    </span>
                    <span className="mx-3">•</span>
                    <span>May 2022 - Present</span>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-xl mt-4">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-primary mb-2">Key Responsibilities</h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Lead development of voice intelligence solutions and generative AI applications</li>
                      <li>Implement and optimize Large Language Model operations (LLMOps)</li>
                      <li>Develop document processing systems using advanced NLP techniques</li>
                      <li>Ensure AI safety and responsible implementation of AI technologies</li>
                      <li>Leverage TypeScript and JavaScript for building robust frontend applications</li>
                      <li>Provide technical leadership and mentorship to team members</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-primary mb-2">Technologies & Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Gradio</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">LLMOps</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Generative AI</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AI Safety</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">NLP</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-primary mb-2">Achievements</h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>MD Special Recognition Award (Samsung Annual Awards 2024)</li>
                      <li>Samsung Excellence Award 2024</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
