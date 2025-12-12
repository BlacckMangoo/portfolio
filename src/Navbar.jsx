import React from "react";
import './App.css';
import SocialIcons from './Icon';

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
      <div className="nav-buttons">
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
      </div>

      {/* Social Icons aligned to the right */}
      <SocialIcons />
    </nav>
  );
};

export default Navbar;