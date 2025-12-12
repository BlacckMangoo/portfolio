import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

const LazyLoadVideo = ({ src, className = "", poster = null }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [error, setError] = useState(false);
  const videoRef = useRef(null);
  const observerRef = useRef(null);
  
  // Intersection Observer for lazy loading and auto play/pause
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px', // Start loading 100px before viewport
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load video when close to viewport
          setShouldLoad(true);
          
          // Auto-play when in viewport
          if (videoRef.current && videoRef.current.paused) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Auto-play was prevented, user interaction needed
              });
            }
          }
        } else {
          // Pause when out of viewport to save resources
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      });
    }, options);

    if (videoRef.current) {
      observerRef.current.observe(videoRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  // Handle video load completion
  const handleVideoLoad = useCallback(() => {
    setIsLoading(false);
    setError(false);
  }, []);

  // Handle video load error
  const handleError = useCallback(() => {
    setIsLoading(false);
    setError(true);
  }, []);

  return (
    <div className="video-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
      {isLoading && !error && (
        <motion.div 
          className="loading-spinner"
          initial={{ opacity: 0.8 }}
          animate={{ 
            opacity: [0.2, 1, 0.2],
            rotate: 360
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "linear" 
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "4px solid rgba(0, 255, 0, 0.1)",
            borderTopColor: "#00ff00",
            zIndex: 2
          }}
        />
      )}
      
      {error && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#ff0000',
          textAlign: 'center',
          zIndex: 2
        }}>
          Failed to load video
        </div>
      )}
      
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload={shouldLoad ? "metadata" : "none"}
        poster={poster}
        className={className}
        onCanPlay={handleVideoLoad}
        onLoadedData={handleVideoLoad}
        onError={handleError}
        style={{ 
          opacity: isLoading || error ? 0 : 1, 
          transition: 'opacity 0.5s ease',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        {shouldLoad && <source src={src} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

LazyLoadVideo.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  poster: PropTypes.string
};

export default LazyLoadVideo;
