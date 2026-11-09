'use client';

import { useEffect, useRef } from 'react';
import { frames, nearest } from '@/lib/frames';
import { clamp, FRAME_COUNTS, live } from '@/lib/store';

type Placement = { x: number; y: number; height: number };
const aspect = 16 / 9;

const interpolate = (a: number, b: number, progress: number) => a + (b - a) * progress;

function placementForHero(width: number, height: number, compact: boolean): Placement {
  if (compact) return { x: width * 0.68, y: height * 0.48, height: height * 0.58 };
  return { x: width * 0.73, y: height * 0.56, height: Math.min(height * 0.94, width * 0.56) };
}

function placementForAbout(width: number, height: number, compact: boolean): Placement {
  if (compact) return { x: width * 0.5, y: height * 0.31, height: height * 0.48 };
  return { x: width * 0.27, y: height * 0.61, height: Math.min(height * 0.94, width * 0.56) };
}

/** Shared canvas for the four supplied chronological sequences. */
export default function CharacterStage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let previousKey = '';

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      previousKey = '';
    };

    const progressFor = (id: string) => {
      const element = document.getElementById(id);
      if (!element) return 0;
      const rect = element.getBoundingClientRect();
      return clamp(-rect.top / Math.max(1, rect.height - height));
    };

    const transitionProgress = () => {
      const flight = document.getElementById('flight');
      if (!flight) return 0;
      const rect = flight.getBoundingClientRect();
      return clamp((height - rect.top) / Math.max(1, rect.height + height));
    };

    const draw = (image: HTMLImageElement | null, place: Placement) => {
      if (!image) return;
      const imageWidth = place.height * aspect;
      context.drawImage(image, place.x - imageWidth / 2, place.y - place.height / 2, imageWidth, place.height);
    };

    const render = () => {
      const compact = width < 820;
      live.hero = progressFor('billboard');
      live.transition = transitionProgress();
      live.about = progressFor('about');
      const about = document.getElementById('about');
      live.aboutExit = about ? Math.max(0, -(about.getBoundingClientRect().bottom - height)) : 0;

      const heroPlace = placementForHero(width, height, compact);
      const aboutPlace = placementForAbout(width, height, compact);
      let sequence: keyof typeof frames = 'hero';
      let index = Math.round(live.hero * (FRAME_COUNTS.hero - 1));
      let place = heroPlace;

      if (live.transition > 0 && live.about === 0) {
        sequence = 'transition';
        index = Math.round(live.transition * (FRAME_COUNTS.transition - 1));
        place = {
          x: interpolate(heroPlace.x, aboutPlace.x, live.transition),
          y: interpolate(heroPlace.y, aboutPlace.y, live.transition),
          height: interpolate(heroPlace.height, aboutPlace.height, live.transition),
        };
      }

      if (live.about > 0) {
        sequence = 'about';
        index = Math.round(live.about * (FRAME_COUNTS.about - 1));
        place = { ...aboutPlace, y: aboutPlace.y - live.aboutExit };
      }

      const key = `${sequence}-${index}-${Math.round(place.x)}-${Math.round(place.y)}`;
      if (key !== previousKey) {
        previousKey = key;
        context.clearRect(0, 0, width, height);
        draw(nearest(frames[sequence], index), place);
      }

      canvas.style.visibility = live.aboutExit > height * 0.9 ? 'hidden' : 'visible';
      raf = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <div className="stage" aria-hidden><canvas ref={canvasRef} /></div>;
}
