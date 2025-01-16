
import { motion } from "framer-motion";
import React from "react";
import './App.css';


export default function Navabar()
{
  
  const handleScroll = (scrollAmount) => {
    window.scrollTo({
      top: scrollAmount, // Scroll to the specified position
      behavior: "smooth", // Smooth scrolling effect
    });
  };

return(


 <nav className="navbar">
    
   <motion.button 
    
     initial={{ opacity: 0, y:-50,scale: 1.2}}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.2 }}
     whileHover={{ scale: 1.6}}
     className="nav-button"
   >
     Blogs
   </motion.button>
   <motion.button
   
      initial={{ opacity: 0, y:-50 ,scale:1.2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.6}}
      className="nav-button"
      
      
   >
     Projects
   </motion.button>
   <motion.button
      initial={{ opacity: 0, y:-50 ,scale: 1.2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.6}}
      
      className="nav-button"
   >
     Art Works
   </motion.button>
 </nav>
)

    
}