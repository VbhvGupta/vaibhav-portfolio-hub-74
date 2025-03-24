
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-blue-50 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">Get In Touch</h2>
          <h3 className="text-4xl font-display font-semibold">Contact Me</h3>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-2xl font-medium mb-6">Let's Connect</h4>
              <p className="text-gray-600 mb-8">
                Feel free to reach out for collaborations, opportunities, 
                or just to say hello. I'm always open to discussing new projects, 
                creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Email</h5>
                    <p className="text-gray-600">contact@vaibhavgupta.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Phone</h5>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Location</h5>
                    <p className="text-gray-600">Bangalore, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h5 className="font-medium mb-4">Social Profiles</h5>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-soft hover-lift text-gray-700 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-soft hover-lift text-gray-700 hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="glass p-8 rounded-xl">
                <h4 className="text-2xl font-medium mb-6">Send Me a Message</h4>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                    <h5 className="font-semibold text-lg mb-2">Message Sent!</h5>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Subject"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-colors disabled:opacity-70"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send size={18} className="ml-2" />
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
