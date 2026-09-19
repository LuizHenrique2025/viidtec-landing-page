"use client";
import { useEffect, useRef } from "react";

export function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let width = 0;
    let height = 0;
    const points = Array.from({ length: 30 }, (_, i) => ({ x: ((i * 73 + 19) % 101) / 101, y: ((i * 43 + 7) % 97) / 97 }));
    const resize = () => {
      width = canvas.clientWidth; height = canvas.clientHeight;
      const ratio = Math.min(devicePixelRatio, 2);
      canvas.width = width * ratio; canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const t = motion.matches ? 0 : time / 7000;
      const coords = points.map((p, i) => ({ x: p.x * width + Math.sin(t + i) * 12, y: p.y * height + Math.cos(t + i) * 12 }));
      coords.forEach((p, i) => {
        coords.slice(i + 1).forEach(q => {
          const distance = Math.hypot(p.x - q.x, p.y - q.y);
          if (distance < 155) {
            ctx.strokeStyle = `rgba(130,65,220,${(1 - distance / 155) * 0.2})`;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        });
        ctx.fillStyle = "rgba(145,73,224,.45)";
        ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2); ctx.fill();
      });
      if (!motion.matches) frame = requestAnimationFrame(draw);
    };
    const reset = () => { cancelAnimationFrame(frame); resize(); draw(0); };
    const observer = new ResizeObserver(reset); observer.observe(canvas);
    motion.addEventListener("change", reset);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); motion.removeEventListener("change", reset); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className="particle-field" />;
}
