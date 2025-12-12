import  { useRef, useEffect } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    const chars = 'ABC⍾⍙⟒⍀⏁⊬⎍⟟⍜⏃⌇⎅⎎☌⊑⟊☍⌰⋉⌖☊⎐⏚⋏⋔D同学们好TU的一∑_{n=1}^{∞}(√(n²+π²)/e^(αn))∫₀^∞(sin(θ²)/(x²+1))dx+∇²∇²∇²∇²∇²∇²∇²∇²∇²∇²λ∇²φ(x)=σ(ω)是了我不人有在他VVXYZ0123456789@#$%^&*()अआइईउऊऋऍएऐऑओऔअंअःकखगघचछजझटठडढतथदधनपफबभमयरलवशषसहक्षत्रज्ञऩंःऽ';
    const charArray = chars.split('');
    const fontSize = 18;
    const columns = Math.ceil(canvas.width / fontSize);

    // Store drop positions as floating point numbers for smooth movement
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height / fontSize;
    }

    // Simple 2D Noise Function
    const noise = (x, y) => {
      const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453123;
      return n - Math.floor(n);
    };

    // Fractal Brownian Motion
    const fbm = (x, y) => {
      let total = 0;
      let amplitude = 0.5;
      let frequency = 1.0;
      for (let i = 0; i < 4; i++) {
        total += noise(x * frequency, y * frequency) * amplitude;
        amplitude *= 0.5;
        frequency *= 2.0;
      }
      return total;
    };

    let time = 0;

    const draw = () => {
      time += 0.005; // Increment time for noise animation

      // Fade effect
      // Use semi-transparent black to create trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Bright green text
      ctx.fillStyle = 'rgba(0, 255, 0, 0.26)';
      ctx.font = `${fontSize}px monospace`;
      
      // Add Bloom Effect
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(20, 20, 20, 1)';

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Calculate position
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Repulsion Distortion Logic
        const dx = x - mouseRef.current.x;
        const dy = y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 400; // Radius of effect

        let drawX = x;
        let drawY = y;

        if (distance < maxDist) {
          const angle = Math.atan2(dy, dx);
          const force = (maxDist - distance) / maxDist;
          const repulsion = force * force * 200; // Stronger push closer to center

          drawX += Math.cos(angle) * repulsion;
          drawY += Math.sin(angle) * repulsion;
        }

        // Apply FBM to opacity for "natural" shimmering
        const noiseVal = fbm(i * 0.1, time);
        ctx.globalAlpha = 0.6 + noiseVal * 0.4; // Vary opacity between 0.6 and 1.0
        ctx.fillText(char, drawX, drawY);
        ctx.globalAlpha = 1.0; // Reset

        // Reset drop if it goes off screen or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Natural speed variation using FBM
        // Columns near each other will have similar speeds (gusts of wind)
        const speedNoise = fbm(i * 0.05, time * 0.5);
        const speed = 0.5 + speedNoise * 1.5; // Speed varies between 0.5 and 2.0
        
        drops[i] += speed;
      }
    };

    const interval = setInterval(draw, 33); // ~30fps

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 1.0,
        pointerEvents: 'none' // Allow clicks to pass through
      }}
    />
  );
};

export default MatrixBackground;