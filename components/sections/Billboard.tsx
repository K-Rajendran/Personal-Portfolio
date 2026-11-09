'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Grid2X2, Home, Mail, Search } from 'lucide-react';
import { PROFILE } from '@/lib/data';
import { scrollToId } from '@/components/ui/SmoothScroll';

export default function Billboard({ ready }: { ready: boolean }) {
  return (
    <section className="hero-ref" id="billboard">
      <div className="hero-ref-sky" />
      <div className="hero-ref-rail" aria-label="Hero navigation">
        <button onClick={() => scrollToId('billboard')} aria-label="Home"><Home size={17} /></button>
        <button onClick={() => scrollToId('about')} aria-label="About"><Search size={17} /></button>
        <button onClick={() => scrollToId('skills')} aria-label="Technical arsenal"><Grid2X2 size={16} /></button>
        <button onClick={() => scrollToId('contact')} aria-label="Contact"><Mail size={16} /></button>
      </div>
      <motion.div className="hero-ref-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 28 }} transition={{ duration: 0.75 }}>
        <p className="hero-ref-label">Rajendran K. · Software Engineer</p>
        <h1>A backend engineer with a <span>researcher&apos;s curiosity</span> and a builder&apos;s mindset.</h1>
        <p className="hero-ref-lead">Someone who doesn&apos;t stop at making software work — but wants to understand its performance, reliability, security, and ability to scale.</p>
      </motion.div>
      <motion.aside className="hero-ref-availability" initial={{ opacity: 0, x: -20 }} animate={{ opacity: ready ? 1 : 0, x: ready ? 0 : -20 }} transition={{ delay: 0.25, duration: 0.65 }}>
        <p>Engineering focus</p>
        <strong>Distributed systems<br />Cloud-native infrastructure<br />Performance engineering</strong>
        <span><i /> Open to full-time SDE-1 opportunities</span>
      </motion.aside>
      <motion.aside className="hero-ref-social" initial={{ opacity: 0, x: 24 }} animate={{ opacity: ready ? 1 : 0, x: ready ? 0 : 24 }} transition={{ delay: 0.35, duration: 0.65 }}>
        <p>Let&apos;s connect</p>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
        <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
        <a href={`mailto:${PROFILE.email}`}>Email <ArrowUpRight size={15} /></a>
        <a href={PROFILE.resume} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={15} /></a>
      </motion.aside>
      <button className="hero-ref-scroll" onClick={() => scrollToId('about')}>Explore my work <ArrowDown size={16} /></button>
    </section>
  );
}
