import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import console from '/src/console.png';

const Console = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  // Check if mobile view
  const isMobile = window.innerWidth <= 576;

  return (
    <motion.img
      ref={ref}
      src={console}
      className="console"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={inView ? { opacity: 1, scale: 2 } : {}}
      transition={{ duration: 1 }}
      style={{
        objectFit: "contain",
        maxHeight: isMobile ? "1000x" : "auto"
      }}
    />
  );
};

export default Console;
