import React, { useRef, useEffect,useState } from 'react';




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
      const fontSize = 29;
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
  
      const interval = setInterval(draw, 40);
  
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
          opacity: 0.3
        }}
      />
    );
  };
  ;

  export default MatrixBackground;