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
import Projects from './myProjects.jsx';
import ProjectsTwo from './MyProjectsTwo.jsx';
import ProjectsThree from './MyProjectsThree.jsx';



import pfp from '/src/pfp_image.png'
import ArtGallery from './Gallery.jsx';
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
         
 
        </div>

        {/* Right: Text Content */}
        <div className="text-container">
          <div className='text-content'>

          <h1> Hey, I am </h1> <br />
          <motion.h1  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }} > <strong>Satvik Gupta.</strong></motion.h1>      <motion.div className='taglines'initial={{ x: "vw" }} 
        animate={{ x: "0vw" }} 
        transition={{ type: "spring", stiffness: 100, damping: 15 }}>
      <p> <small>I Love learning and building stuff</small></p> <br />
       <p><strong>A</strong>rt | <strong>G</strong>amedev | <strong>P</strong>hilosophy | <strong>C</strong>oding</p>
       </motion.div>

       </div>

       {/* CONSOLE IMAGE SECTION */}
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.3 }}
         style={{ width: '100%', margin: '2rem 0' }}
       >
         <Console />
       </motion.div>
   
       {/* BLOGS SECTION */}
       <div className="section-container">
         <motion.h1 
           id="blog-section" 
           className="simple-heading"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
         >
           <strong>MY BLOGS</strong>
         </motion.h1>

         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
         > 
           <BlogCardsList />
         </motion.div>
       </div>

       {/* PROJECTS SECTION */}
       <div className="section-container">
         <motion.h1 
           id="projects-section" 
           className="simple-heading"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
         >         <strong>MY PROJECTS</strong>
         </motion.h1>
         <Projects />
         <ProjectsTwo />
         <ProjectsThree />
       </div>
        
       {/* ARTWORKS SECTION */}
       <div className="section-container">
         <motion.h1 
           id="artworks-section" 
           className="simple-heading"
           initial={{ opacity: 1 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }} 
         >
           <strong>MY ARTWORKS</strong>
         </motion.h1>
         <ArtGallery />
       </div>

       <motion.button
  className="back-to-top"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{ scale: 1.1 }}
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'black',
    color: '#00ff00',
    border: '2px solid #00ff00',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
    zIndex: 100
  }}
>
  ↑
</motion.button>
        </div>
      </div>  
    </div>
    </div>
    </div>
  );
};


export default App;
