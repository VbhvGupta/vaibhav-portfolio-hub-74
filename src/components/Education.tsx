
import React, { useEffect, useRef } from 'react';
import { School, Calendar } from 'lucide-react';

const Education: React.FC = () => {
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

  const educationData = [
    {
      degree: "Master of Technology (MTech)",
      field: "Computer Science",
      institution: "IIIT Hyderabad",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFFqyPr7qD6TQ/company-logo_400_400/company-logo_400_400/0/1700363204875?e=1748476800&v=beta&t=ZYJIv3j6GMYoR6K2K752VnDn4wrq15PCVwinzUHqqv0"
    },
    {
      degree: "Bachelor of Technology (BTech)",
      field: "Computer Science",
      institution: "DIT University",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQF8ozwMWXANIQ/company-logo_400_400/company-logo_400_400/0/1633755771002/dit_university_logo?e=1748476800&v=beta&t=wpA1YD5kmWZ3GK3JUGWDKboBVcqN3vL0v-yW2jGcwtc"
    },
    {
      degree: "12th Grade",
      field: "Science",
      institution: "Jawahar Navodaya Vidyalaya",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGK87VYL7oZLw/company-logo_400_400/company-logo_400_400/0/1630566378561?e=1748476800&v=beta&t=_IZmiDXoA-5E4_bRiinguUFeIOM-3HNDSqpdsaK87yU"
    }
  ];

  return (
    <section 
      id="education" 
      ref={sectionRef} 
      className="section-padding relative overflow-hidden opacity-0"
    >
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">Educational Background</h2>
          <h3 className="text-4xl font-display font-semibold">Academic Journey</h3>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-6 flex items-center">
                <School className="mr-2 text-primary" />
                Educational Qualifications
              </h4>
              
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <div 
                    key={index} 
                    className="glass p-6 rounded-xl transform transition-transform hover-lift"
                  >
                    <div className="flex items-start">
                      <div className="mr-4 bg-white rounded-lg p-2 shadow-sm">
                        <img 
                          src={item.logo} 
                          alt={item.institution} 
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <div>
                        <h5 className="text-xl font-semibold">{item.degree}</h5>
                        <p className="text-gray-600">{item.field}</p>
                        <p className="text-primary font-medium mt-1">{item.institution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="sticky top-32">
                <h4 className="text-lg font-medium mb-6 flex items-center">
                  <Calendar className="mr-2 text-primary" />
                  Skills & Specializations
                </h4>
                
                <div className="glass p-6 rounded-xl space-y-6">
                  <div>
                    <h5 className="font-medium text-primary mb-3">Technical Expertise</h5>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Generative AI</span>
                          <span>98%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '98%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>LLMOps</span>
                          <span>95%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>NLP</span>
                          <span>92%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>TypeScript/JavaScript</span>
                          <span>90%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-primary mb-3">Specialization Areas</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        Voice Intelligence
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        AI in Software Development
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        Generative AI Applications
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        Document Processing
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        AI Safety
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-primary mb-3">Languages</h5>
                    <div className="flex space-x-3">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm">English</div>
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm">Hindi</div>
                    </div>
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

export default Education;
