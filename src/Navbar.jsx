import React from "react";
// Remove the react-scroll import temporarily
import './App.css';

const Navbar = () => {
  // Function to scroll to section using native JavaScript
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      {/* Navigation buttons aligned to the left */}
      <button 
        className="nav-button" 
        onClick={() => scrollToSection("blog-section")}
      >
        Blogs
      </button>
      <button 
        className="nav-button" 
        onClick={() => scrollToSection("projects-section")}
      >
        Projects
      </button>
      <button 
        className="nav-button" 
        onClick={() => scrollToSection("artworks-section")}
      >
        Artworks
      </button>
      {/* Other navigation buttons */}
    </nav>
  );
};

export default Navbar;