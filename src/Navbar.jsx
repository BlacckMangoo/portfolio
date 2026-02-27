import React, { useState, useEffect, useRef } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = '';
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="nav-brand">SG</div>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
        <div className="nav-socials-mobile">
          <SocialIcons />
        </div>
      </div>

      <div className="nav-socials-desktop">
        <SocialIcons />
      </div>
    </nav>
  );
};

export default Navbar;