'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PROFILE, SKILL_GENRES, STATS } from '@/lib/data';
import { live, seg } from '@/lib/store';

/** The gap the character leaps through on his way down. */
export function Flight() {
  return (
    <section className="flight" id="flight" aria-hidden>
      <div className="flight-card">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.6 }} transition={{ duration: 0.6 }}>
          CHAPTER II
        </motion.span>
        <motion.b initial={{ opacity: 0, letterSpacing: '0.5em', filter: 'blur(10px)' }} whileInView={{ opacity: 1, letterSpacing: '0.04em', filter: 'blur(0px)' }} viewport={{ amount: 0.6 }} transition={{ duration: 1.2 }}>
          ORIGIN
        </motion.b>
      </div>
    </section>
  );
}

function useLive() {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0, prev = -1;
    const t = () => {
      const x = live.about;
      if (Math.abs(x - prev) > 0.002) {
        prev = x;
        setV(x);
      }
      raf = requestAnimationFrame(t);
    };
    raf = requestAnimationFrame(t);
    return () => cancelAnimationFrame(raf);
  }, []);
  return v;
}

const step = (p: number, a: number) => ({ opacity: seg(p, a, a + 0.08), transform: `translateY(${(1 - seg(p, a, a + 0.08)) * 30}px)` });

const STORY =
  "I don't just build software. I enjoy understanding what makes it work at scale. I'm a Software Engineer with a foundation in software engineering from Vellore Institute of Technology and hands-on industry experience at Tanla Platforms. My engineering journey revolves around one question: How do we make software faster, more reliable, secure, and scalable? From building concurrent Java services processing 242 TPS to evaluating distributed storage with 2 million records and exploring cloud-native infrastructure on AWS EKS, I enjoy solving problems where performance and reliability matter. Beyond engineering, I've explored innovation through a published Springer research chapter, an Indian patent application, and competitive technical achievements. I believe great engineering comes from curiosity, experimentation, and measurable results. I'm now looking to bring that mindset to challenging backend and distributed systems problems.";

/** Ring dial for a stat — fills as you scroll. */
function Dial({ value, suffix, label, k }: { value: number; suffix: string; label: string; k: number }) {
  const C = 2 * Math.PI * 34;
  return (
    <div className="dial">
      <svg viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="34" className="d-bg" />
        <circle cx="40" cy="40" r="34" className="d-fg" style={{ strokeDasharray: C, strokeDashoffset: C * (1 - k) }} />
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={i} x1="40" y1="2" x2="40" y2={i % 6 === 0 ? 7 : 4.5} transform={`rotate(${i * 15} 40 40)`} className="d-tick" />
        ))}
      </svg>
      <b>
        {Math.round(value * k)}
        <i>{suffix}</i>
      </b>
      <span>{label}</span>
    </div>
  );
}

export default function About() {
  const p = useLive();
  const words = STORY.split(' ');
  const inkP = seg(p, 0.16, 0.55);
  return (
    <section className="about" id="about">
      <div className="about-sticky">
        <div className="about-glow" />
        <div className="about-panel">
          <div className="ab-kicker">
            <i /> CHAPTER II · ORIGIN
          </div>
          <h2 className="ab-title">
            From curiosity
            <br />
            <span>to engineering at scale.</span>
          </h2>
          <p className="ab-ink">
            {words.map((w, i) => {
              const lit = seg(inkP * words.length, i - 1, i + 1);
              return (
                <span key={i} style={{ opacity: 0.72 + lit * 0.28, color: lit > 0.9 && /242|million|AWS|scale\./.test(w) ? 'var(--accent-text)' : undefined }}>
                  {w}{' '}
                </span>
              );
            })}
          </p>
          <div className="ab-dials" style={step(p, 0.5)}>
            {STATS.map((s, i) => (
              <Dial key={s.label} {...s} k={seg(p, 0.52 + i * 0.04, 0.7 + i * 0.04)} />
            ))}
          </div>
          <div className="ab-tags" style={step(p, 0.72)}>
            {SKILL_GENRES.map((g, i) => (
              <span key={g.name}>
                <i>{String(i + 1).padStart(2, '0')}</i>
                {g.name}
              </span>
            ))}
          </div>
          <a className="ab-resume" href={PROFILE.resume} target="_blank" rel="noreferrer" style={step(p, 0.78)}>
            Read the full résumé <span>↗</span>
          </a>
        </div>
        <div className="ab-progress">
          <i style={{ transform: `scaleY(${p})` }} />
        </div>
      </div>
    </section>
  );
}
