'use client';
import { useEffect, useRef } from 'react';

const count = 241;
const source = (n: number) => `/frames/my-frames/frame-${String(n).padStart(4, '0')}.webp`;

/** One chronological sequence: masked opening, profile turn, final reveal. */
export default function FrameSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = canvasRef.current, section = sectionRef.current, ctx = canvas?.getContext('2d');
    if (!canvas || !section || !ctx) return;
    const images: (HTMLImageElement | undefined)[] = new Array(count);
    const load = (i: number) => { if (images[i]) return images[i]; const image = new Image(); image.decoding = 'async'; image.src = source(i + 1); images[i] = image; return image; };
    for (let i = 0; i < count; i += 6) load(i);
    for (let i = 0; i < count; i++) window.setTimeout(() => load(i), 30 + i * 3);
    let alive = true, previous = -1, raf = 0;
    const render = () => {
      const rect = section.getBoundingClientRect(), progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height - innerHeight)));
      const frame = Math.round(progress * (count - 1));
      if (frame !== previous) {
        previous = frame;
        let image = images[frame];
        for (let d = 1; !image && d < count; d++) image = images[frame - d] || images[frame + d];
        if (image?.complete) {
          const dpr = Math.min(devicePixelRatio || 1, 2), w = canvas.clientWidth, h = canvas.clientHeight, ratio = image.naturalWidth / image.naturalHeight;
          canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h);
          const dh = Math.min(h * 1.08, w / ratio), dw = dh * ratio;
          ctx.drawImage(image, (w - dw) / 2, Math.max(0, h - dh), dw, dh);
        }
      }
      if (alive) raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);
    return () => { alive = false; cancelAnimationFrame(raf); };
  }, []);
  return <section className="sequence" ref={sectionRef} aria-label="Portrait animation: a mask lifts to reveal Rajendran"><div className="sequence-sticky"><canvas ref={canvasRef} /><img className="sequence-fallback" src={source(count)} alt="Illustrated portrait of Rajendran K." /></div></section>;
}
