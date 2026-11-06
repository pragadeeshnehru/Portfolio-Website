import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const ref = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    document.documentElement.classList.add("has-trail");
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w, h, raf;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const pts = [];
    const mouse = { x: -100, y: -100, rx: -100, ry: -100 };
    let hue = 180;
    const move = (e) => {
      mouse.x = e.clientX; mouse.y = e.clientY;
      pts.push({ x: e.clientX, y: e.clientY, life: 1, hue: (hue = (hue + 3) % 360) });
      if (pts.length > 60) pts.shift();
    };
    window.addEventListener("pointermove", move);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1], b = pts[i];
        b.life *= 0.93; a.life *= 0.93;
        ctx.strokeStyle = `hsla(${b.hue},100%,60%,${b.life * 0.8})`;
        ctx.lineWidth = 2 + b.life * 10;
        ctx.lineCap = "round";
        ctx.shadowColor = `hsl(${b.hue},100%,60%)`;
        ctx.shadowBlur = 18;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
      while (pts.length && pts[0].life < 0.03) pts.shift();
      mouse.rx += (mouse.x - mouse.rx) * 0.2;
      mouse.ry += (mouse.y - mouse.ry) * 0.2;
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(255,255,255,.7)";
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(mouse.rx, mouse.ry, 16, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.beginPath(); ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2); ctx.fill();
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("has-trail");
    };
  }, []);

  return <canvas ref={ref} className="trail-canvas" aria-hidden="true" />;
}
