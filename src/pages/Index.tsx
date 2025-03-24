
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

const Index: React.FC = () => {
  // Add smooth scrolling effect for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isAnchor = target.tagName === 'A' && target.getAttribute('href')?.startsWith('#');
      
      if (isAnchor) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <Contact />
    </Layout>
  );
};

export default Index;
