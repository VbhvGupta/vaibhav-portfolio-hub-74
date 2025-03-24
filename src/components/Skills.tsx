
import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
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

  const skillsData = [
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Generative AI", level: 98 },
        { name: "LLMOps", level: 95 },
        { name: "NLP", level: 92 },
        { name: "AI Safety", level: 90 },
        { name: "Voice Intelligence", level: 94 },
        { name: "Document Processing", level: 88 },
      ]
    },
    {
      category: "Programming & Development",
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "Python", level: 88 },
        { name: "Gradio", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 78 },
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Problem Solving", level: 93 },
        { name: "Communication", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Mentoring", level: 88 },
        { name: "Innovation", level: 92 },
      ]
    }
  ];

  const generateGradient = (level: number) => {
    if (level >= 90) return "from-blue-500 to-indigo-600";
    if (level >= 80) return "from-blue-400 to-blue-600";
    return "from-blue-300 to-blue-500";
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-blue-50 to-white opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">Expertise</h2>
          <h3 className="text-4xl font-display font-semibold">Skills & Proficiencies</h3>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {skillsData.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="glass p-6 rounded-xl"
              >
                <h4 className="text-xl font-semibold mb-6 text-center text-primary">{category.category}</h4>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${generateGradient(skill.level)} rounded-full transition-all duration-1000 ease-out`} 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 glass p-8 rounded-xl">
            <h4 className="text-xl font-semibold mb-6 text-center">Certifications</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Generative AI Certification (DeepLearning.AI)",
                "AI Safety Fundamentals (Microsoft)",
                "Advanced NLP Certification (LinkedIn)",
                "LLMOps Specialist Certification",
                "Voice Intelligence Expert",
                "Document Processing with AI"
              ].map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white/50 p-4 rounded-lg border border-gray-100 shadow-sm hover-lift"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-6 h-6 bg-primary rounded-full"></div>
                    </div>
                    <div className="text-gray-800 font-medium">{cert}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
