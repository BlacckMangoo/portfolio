import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const LazyLoadVideo = ({ src, className = "" }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Track when the video is loaded
  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="video-container">
      {isLoading && (
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
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "4px solid rgba(0, 255, 0, 0.1)",
            borderTopColor: "#00ff00",
            margin: "0 auto"
          }}
        />
      )}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={className}
        onCanPlay={handleVideoLoad}
        onLoadedData={handleVideoLoad}
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LazyLoadVideo;
