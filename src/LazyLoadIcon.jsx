import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define component with named export
export const LazyLoadIcon = ({ children, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate icon loading check
  useEffect(() => {
    // Check if the font icon is loaded
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {!isLoaded && (
        <motion.div 
          className="icon-loading-placeholder"
          initial={{ opacity: 0.6 }}
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
    </div>  );
};

// Add default export in addition to named export
export default LazyLoadIcon;
