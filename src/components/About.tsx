
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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
      id="about" 
      ref={sectionRef} 
      className="section-padding relative overflow-hidden opacity-0"
    >
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">About Me</h2>
            <h3 className="text-4xl font-display font-semibold">Passionate About AI & Innovation</h3>
          </div>
          
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              I'm Vaibhav Gupta, a Senior Software Engineer at Samsung R&D Institute India - Bangalore, 
              where I've been crafting innovative solutions since May 2022. My expertise lies at the 
              intersection of software engineering and artificial intelligence, with a particular focus 
              on voice intelligence and generative AI applications.
            </p>
            
            <p>
              With a strong educational foundation in Computer Science, including a Master's degree 
              from IIIT Hyderabad and a Bachelor's from DIT University, I've developed a deep 
              understanding of both theoretical principles and practical applications in the field.
            </p>
            
            <p>
              I specialize in LLMOps, AI safety, and document processing, utilizing my skills in NLP, 
              TypeScript, and JavaScript to build sophisticated solutions. My work in the voice 
              intelligence domain has been recognized with prestigious accolades, including the 
              MD Special Recognition Award and Samsung Excellence Award in 2024.
            </p>
            
            <p>
              As a team leader, I believe in fostering collaboration and innovation, consistently 
              pushing the boundaries of what's possible in AI-driven applications. I'm fluent in 
              English and Hindi, which helps me communicate effectively with diverse teams.
            </p>
            
            <p>
              I'm committed to continuous learning, as evidenced by my numerous certifications in 
              Generative AI and related domains from institutions like DeepLearning.AI, Microsoft, 
              and LinkedIn. My goal is to leverage emerging technologies to create meaningful impact 
              in the software industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
