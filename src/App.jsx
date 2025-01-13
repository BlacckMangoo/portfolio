import React, { useRef, useEffect,useState } from 'react';
import TypingEffect from './TypeEffect';
import { color, motion } from "framer-motion";
import './App.css';
import Navbar from './GithubIcon';
import BlogCardsList from './Blog';



const MatrixBackground = () => {
  const canvasRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const chars = 'ABCDEFGHIJKLMNOPQRS同学们好TU的一是了我不人有在他VXYZABCDEFGHIJKLMNOPQRSTUVXYZ0123456789@#$%^&*()अआइईउऊऋऍएऐऑओऔअंअःकखगघचछजझटठडढतथदधनपफबभमयरलवशषसहक्षत्रज्ञऩंःऽ';
    const charArray = chars.split('');
    const fontSize = 30;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97331472) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100',
        height: '100',
        zIndex: 0,
        opacity: 0.4
      }}
    />
  );
};


const App = () => {
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
    
      
       <nav className="navbar">


       <Navbar className="navbar"></Navbar>
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
    

      {/* Main Content */}
      <div className="main-content">
        
        {/* Left: 3D Mesh */}
        <div className="mesh-container">
         <motion.img src="pfp_image.png" initial={{ opacity: 0, scale: 0.3 }}
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
          <TypingEffect text='HHi My Name Is'></TypingEffect>
          <motion.h1  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }} > <strong>Satvik Gupta.</strong></motion.h1>
      <motion.div className='taglines'initial={{ x: "100vw" }} // Start off-screen to the right
        animate={{ x: "0vw" }} // Move to the center of the screen
        transition={{ type: "spring", stiffness: 100, damping: 15 }}>
      <p> <small>I Love learning and making new things</small></p> <br />
       <p><strong>A</strong>rt | <strong>G</strong>amedev | <strong>P</strong>hilosophy</p>
       </motion.div>
        </div>
        <motion.img  src="src/console.png"   className='console' initial={{ left: '100px' ,opacity: 0 ,scale: 0.3} }
        
      animate={{ opacity: 1,scale:0.8 }}
      
      transition={{ duration: 1 }} />
      <h1 style={{fontSize:'10rem', color:'#00ff00' , textShadow:'green'}}><strong>BLOGS</strong></h1>

      <BlogCardsList></BlogCardsList>
      </div>  
    </div>
    </div>
    </div>
  );
};


export default App;
