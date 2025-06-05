import React, { useState, useEffect } from 'react';
import 'devicon/devicon.min.css';
import { motion } from 'framer-motion';

// Inline LazyLoadIcon component to avoid import issues
const IconLoader = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {!isLoaded && (
        <motion.div 
          initial={{ opacity: 0.6 }}]
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ 
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{
            width: "100%",
            height: "100%",
            minWidth: "30px",
            minHeight: "30px",
            background: "linear-gradient(90deg, rgba(0, 255, 0, 0.1), rgba(0, 255, 0, 0.3), rgba(0, 255, 0, 0.1))",
            borderRadius: "6px",
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
      )}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Function to preload specific fonts or assets
const preloadDevIcons = () => {
  // Create link preload for devicon font
  const linkPreload = document.createElement('link');
  linkPreload.rel = 'preload';
  linkPreload.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon.svg';
  linkPreload.as = 'font';
  linkPreload.type = 'font/svg';
  linkPreload.crossOrigin = 'anonymous';
  document.head.appendChild(linkPreload);
};

// Execute preload immediately
if (typeof window !== 'undefined') {
  preloadDevIcons();
}

const IconListComponent = ({ icons, gap = '10px', size = '24px' }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1rem 0',
      }}
    >
      {icons.map((icon, index) => (
        <div
          key={index}
          style={{
            fontSize: size,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#00ff00', // Green color for the icons
            margin: '5px',
          }}
        >          <IconLoader>
            {React.cloneElement(icon, { className: `${icon.props.className || ""} icon-element` })}
          </IconLoader>
        </div>
      ))}
    </div>
  );
};

export default function IconTray({ iconlist }) {
  // Use responsive size based on viewport width
  const iconSize = window.innerWidth < 576 ? '50px' : '70px';
  return (
    <IconListComponent icons={iconlist} gap="15px" size={iconSize} />
  );
}
