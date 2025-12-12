import React, { useState, useEffect } from 'react';
import './App.css';
import SocialIcons from './Icon';

const navItems = [
  { id: 'home-section', label: 'Home' },
  { id: 'education-section', label: 'Education' },
  { id: 'blog-section', label: 'Blogs' },
  { id: 'projects-section', label: 'Projects' },
  { id: 'courses-section', label: 'Courses' },
  { id: 'artworks-section', label: 'Artworks' }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of navbar approx
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Trigger at 1/3 down the screen

      // Find the current section
      let current = '';
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          // Check if we have scrolled past the top of this section
          if (element.offsetTop <= scrollPosition) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-scroll-container">
        {navItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <button
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
            {index < navItems.length - 1 && (
              <span className={`nav-arrow ${
                navItems.findIndex(i => i.id === activeSection) > index ? 'active' : ''
              }`}>
                →
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      <SocialIcons />
    </nav>
  );
};

export default Navbar;