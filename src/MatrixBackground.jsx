import  { useRef, useEffect } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const isMobile = window.innerWidth <= 768;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resize);
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    resize();

    // Use simpler charset, looks cleaner
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
    const charArray = chars.split('');
    const fontSize = isMobile ? 14 : 16;
    const columns = Math.ceil(canvas.width / fontSize);

    // Each drop has position + speed + brightness
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * canvas.height / fontSize,
        speed: 0.3 + Math.random() * 0.8,
        brightness: 0.15 + Math.random() * 0.2
      };
    }

    let time = 0;
    let animId;

    const draw = () => {
      time += 0.003;

      // Trail fade — slightly darker for crisper trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      ctx.shadowBlur = 0;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const char = charArray[Math.floor(Math.random() * charArray.length)];

        const x = i * fontSize;
        const y = drop.y * fontSize;

        // Mouse repulsion (desktop only)
        let drawX = x;
        let drawY = y;
        if (!isMobile) {
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;
          if (distance < maxDist) {
            const angle = Math.atan2(dy, dx);
            const force = ((maxDist - distance) / maxDist);
            const repulsion = force * force * 120;
            drawX += Math.cos(angle) * repulsion;
            drawY += Math.sin(angle) * repulsion;
          }
        }

        // Bright head character
        const headAlpha = 0.9 + Math.sin(time * 2 + i) * 0.1;
        ctx.fillStyle = `rgba(180, 255, 180, ${headAlpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(0, 255, 0, 0.6)';
        ctx.fillText(char, drawX, drawY);

        // Trail characters (dimmer)
        ctx.shadowBlur = 0;
        const trailAlpha = drop.brightness * (0.7 + Math.sin(time + i * 0.3) * 0.3);
        ctx.fillStyle = `rgba(0, 255, 0, ${trailAlpha})`;

        // Reset drop
        if (drop.y * fontSize > canvas.height && Math.random() > 0.98) {
          drop.y = 0;
          drop.speed = 0.3 + Math.random() * 0.8;
          drop.brightness = 0.15 + Math.random() * 0.2;
        }

        drop.y += drop.speed;
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
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
        pointerEvents: 'none'
      }}
    />
  );
};

export default MatrixBackground;