import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  color: string;
  tilt: number;
  tiltAngle: number;
  tiltAngleInc: number;
  opacity: number;
}

interface ConfettiProps {
  trigger?: boolean;
}

const COLORS = ['#2563EB', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

export default function Confetti({ trigger = false }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const hasTriggered = useRef(false);

  const fireConfetti = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2 + 100,
        r: Math.random() * 6 + 2,
        dx: (Math.random() - 0.5) * 16,
        dy: Math.random() * -14 - 4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngle: 0,
        tiltAngleInc: Math.random() * 0.07 + 0.05,
        opacity: 1,
      });
    }

    const startTime = Date.now();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const elapsed = Date.now() - startTime;

      if (elapsed > 3000) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      particles.forEach((p, index) => {
        p.tiltAngle += p.tiltAngleInc;
        p.y += (Math.cos(p.tiltAngle) + 1 + p.r / 2) / 2;
        p.x += Math.sin(p.tiltAngle) * 2;
        p.dy += 0.12;
        p.x += p.dx * 0.5;
        p.y += p.dy;
        p.opacity = Math.max(0, 1 - elapsed / 3000);

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
        ctx.stroke();
        ctx.restore();

        if (p.y > canvas.height + 20) {
          particles.splice(index, 1);
        }
      });

      if (particles.length > 0) {
        animationRef.current = requestAnimationFrame(render);
      }
    };

    render();
  }, []);

  useEffect(() => {
    if (trigger && !hasTriggered.current) {
      hasTriggered.current = true;
      fireConfetti();
    }
  }, [trigger, fireConfetti]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 500 }}
    />
  );
}
