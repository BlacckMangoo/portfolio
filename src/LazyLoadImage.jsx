import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

const LazyLoadImage = ({ src, alt, className = "", style = {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  
  // Set up Intersection Observer to only load when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { rootMargin: '200px' }); // Start loading 200px before it comes into view
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Handle image load complete
  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className="lazy-image-container"
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        ...style
      }}
    >
      {/* Loading placeholder/skeleton */}
      {!isLoaded && (
        <motion.div 
          className="image-placeholder"
          initial={{ opacity: 0.6 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            background: [
              'rgba(0, 255, 0, 0.05)',
              'rgba(0, 255, 0, 0.15)',
              'rgba(0, 255, 0, 0.05)'
            ]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}
        />
      )}
      
      {/* Only render image when scrolled into view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${className}`}
          onLoad={handleLoad}
          style={{ 
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 2,
            position: 'relative'
          }}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

export default LazyLoadImage;
