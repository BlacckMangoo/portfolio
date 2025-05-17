import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import console from '/src/console.png';

const Console = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Determine size based on screen width
  const getConsoleSize = () => {
    if (windowWidth <= 576) return 0.7; // Smaller on mobile
    if (windowWidth <= 992) return 0.8; // Medium on tablets
    return 1; // Full size on desktops
  };
  return (
    <div style={{ 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      margin: '1rem auto'
    }}>
      <motion.img
        ref={ref}
        src={console}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: getConsoleSize() } : {}}
        transition={{ duration: 1 }}
        style={{
          objectFit: "contain",
          maxWidth: "100%",
          height: "auto"
        }}
      />
    </div>
  );
};

export default Console;
