import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

// LazyLoadImage component to optimize image loading
const LazyLoadImage = ({ src, alt, className = "", style = {}, priority = false, fit = "contain" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Priority images load immediately
  const [error, setError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);
  
  // Set up Intersection Observer to only load when in viewport
  useEffect(() => {
    // Skip observer if priority (above fold images)
    if (priority) return;

    const options = {
      root: null,
      rootMargin: '150px', // Start loading 150px before viewport
      threshold: 0.01 // Trigger as soon as 1% is visible
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          // Disconnect observer after loading to save memory
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      });
    }, options);
    
    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, isInView]);
  
  // Handle image load complete
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setError(false);
  }, []);

  // Handle image load error
  const handleError = useCallback(() => {
    setIsLoaded(true);
    setError(true);
    console.error(`Failed to load image: ${src}`);
  }, [src]);

  // Memoize container styles to prevent unnecessary re-renders
  const containerStyle = useMemo(() => ({
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    ...style
  }), [style]);

  // Memoize image styles
  const imageStyle = useMemo(() => ({
    opacity: isLoaded && !error ? 1 : 0,
    transition: 'opacity 0.5s ease',
    width: '100%',
    height: 'auto',
    objectFit: fit,
    zIndex: 2,
    position: 'relative'
  }), [isLoaded, error, fit]);

  return (
    <div 
      ref={imgRef}
      className="lazy-image-container"
      style={containerStyle}
    >
      {/* Loading placeholder/skeleton */}
      {!isLoaded && !error && (
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
      
      {/* Error state */}
      {error && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#00ff00',
          textAlign: 'center',
          fontSize: '0.9rem',
          zIndex: 2
        }}>
          Image unavailable
        </div>
      )}
      
      {/* Only render image when scrolled into view or priority */}
      {isInView && !error && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          style={imageStyle}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      )}
    </div>
  );
};

LazyLoadImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  priority: PropTypes.bool,
  fit: PropTypes.oneOf(["contain", "cover", "fill", "none", "scale-down"]) 
};

export default React.memo(LazyLoadImage);
