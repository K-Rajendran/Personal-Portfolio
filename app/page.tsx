'use client';

import { useEffect } from 'react';
import Backdrop from '@/components/stage/Backdrop';
import CharacterStage from '@/components/stage/CharacterStage';
import Billboard from '@/components/sections/Billboard';
import About, { Flight } from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Arsenal from '@/components/sections/Arsenal';
import Missions from '@/components/sections/Missions';
import Honors from '@/components/sections/Honors';
import Journey from '@/components/sections/Journey';
import Finale from '@/components/sections/Finale';
import Intro from '@/components/ui/Intro';
import TopNav from '@/components/ui/TopNav';
import Cursor from '@/components/ui/Cursor';
import SmoothScroll from '@/components/ui/SmoothScroll';
import { loadFrames } from '@/lib/frames';
import { live } from '@/lib/store';

export default function Home() {
  useEffect(() => {
    loadFrames();
    window.history.scrollRestoration = 'manual';
    if (!window.location.hash) window.scrollTo(0, 0);
    const move = (e: PointerEvent) => {
      live.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      live.mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <>
      <SmoothScroll />
      <Backdrop />
      <Cursor />
      <TopNav show />
      <main className="content" id="top">
        <CharacterStage />
        <Intro />
        <Billboard ready />
        <Flight />
        <About />
        <div className="solid-zone">
          <Experience />
          <Arsenal />
          <Missions />
          <Honors />
          <Journey />
          <Finale />
        </div>
      </main>
    </>
  );
}
