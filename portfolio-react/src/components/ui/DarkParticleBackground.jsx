import { useEffect, useRef } from 'react';

export default function DarkParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Generate lightweight floating star particles
    const count = 120;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.25 + 0.05,
      twinklePhase: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.02 + 0.008,
      color: Math.random() > 0.4 ? '216, 180, 254' : '147, 197, 253', // fuchsia-300 / sky-300
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep space background with fully opaque dark purple glow
      const bgGradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.3,
        100,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      bgGradient.addColorStop(0, 'rgb(12, 10, 20)');
      bgGradient.addColorStop(0.5, 'rgb(5, 5, 10)');
      bgGradient.addColorStop(1, 'rgb(0, 0, 0)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Subtle tech grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Floating star particles
      const now = Date.now() * 0.001;
      for (let i = 0; i < count; i++) {
        const p = particles[i];
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        const alpha = Math.max(0.1, Math.min(0.95, p.alpha + Math.sin(now * 2 + p.twinklePhase) * 0.25));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
        ctx.shadowBlur = p.radius > 1 ? 6 : 0;
        ctx.shadowColor = `rgba(${p.color}, 0.6)`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full transform-gpu"
    />
  );
}
