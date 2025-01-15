import React from 'react';
import TypingEffect from './TypeEffect';
import {  motion } from "framer-motion";
import './App.css';
import { useInView } from 'react-intersection-observer';

import Console from './Console.jsx';
import Navabar from './Navbar.jsx'
import Socials from './GithubIcon.jsx'
import MatrixBackground from './MatrixBackground.jsx';
import BlogCardsList  from './Blog.jsx';


const App = () => {
   const { ref, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5, // 50% of the element must be visible
    });
  return (

    <div className="app-container">
       <div style={{ 
      position: 'relative',
      minHeight: '100vh',
      background: 'black',
      color: 'white'
    }}>
      <MatrixBackground />
      
      {/* Content Container - This ensures content appears above the matrix background */}
      <div style={{ 
        position: 'relative',
        zIndex: 0
      }}>
        
     <Socials ></Socials>
      <Navabar></Navabar>
   
  
      {/* Main Content */}
      <div className="main-content">
        
        {/* Left: 3D Mesh */}
        <div className="mesh-container">
         <motion.img src="/public/Images/pfp_image.png" initial={{ opacity: 0, scale: 0.3 }}
    animate={{ opacity: 1, scale: 0.85 }}
    transition={{ duration: 0.5 }}
           style={{
    width: '450px', // Set desired width
    height: 'auto',
    
    boxShadow: '2px 2px 50px rgb(81, 255, 0,0.4)' // Maintains aspect ratio
  }}  />
        </div>

        {/* Right: Text Content */}
        <div className="text-container">
          <TypingEffect text="   My Name is"></TypingEffect>
          
          <motion.h1  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }} > <strong>Satvik Gupta.</strong></motion.h1>
      <motion.div className='taglines'initial={{ x: "50vw" }} 
        animate={{ x: "0vw" }} 
        transition={{ type: "spring", stiffness: 100, damping: 15 }}>
      <p> <small>I Love learning and making new things</small></p> <br />
       <p><strong>A</strong>rt | <strong>G</strong>amedev | <strong>P</strong>hilosophy</p>
       </motion.div>
       <Console></Console>
       <motion.h1  ref={ref}  initial={{  opacity: 0 ,scale: 0} }
        
        animate={ inView? { opacity: 1,scale:1 } : {}}
       
        transition={{ duration: 1 }}><strong> MY BLOGS</strong></motion.h1>
       <BlogCardsList></BlogCardsList>
       
        </div>
      </div>  
    </div>
    </div>
    </div>
  );
};


export default App;
