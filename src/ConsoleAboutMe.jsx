import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Console = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // 50% of the element must be visible
  });

  return (
    <>
 

    <motion.img   ref={ref} src="src/console.png"   className='console' initial={{  opacity: 0 ,scale: 0.6} }
        
    animate={ inView? { opacity: 1,scale:0.8 } : {}}
    
    transition={{ duration: 1 }} />
    </>
  );
};

export default Console;
