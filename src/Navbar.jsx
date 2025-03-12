import { motion } from "framer-motion";
import React from "react";
import './App.css';
import Console from "./Console";

export default function Navabar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Add offset to account for sticky navbar
      const yOffset = -80; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <motion.button 
        initial={{ opacity: 0, y:-50, scale: 1.2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.6 }}
        className="nav-button"
        onClick={() => scrollToSection('blog-section')}
      >
        Blogs
      </motion.button>
      
      <motion.button
        initial={{ opacity: 0, y:-50, scale:1.2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.6 }}
        className="nav-button"
        onClick={() => scrollToSection('projects-section')}
      >
        Projects
      </motion.button>
      
      <motion.button
        initial={{ opacity: 0, y:-50, scale: 1.2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.6 }}
        className="nav-button"
        onClick={() => scrollToSection('artworks-section')}
      >
        Art Works
      </motion.button>
    </nav>
  );
}