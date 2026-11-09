import { FRAME_COUNTS, FrameSequence, live } from './store';

type ImageSequence = (HTMLImageElement | null)[];

const directories: Record<FrameSequence, string> = {
  opening: 'portfolio-opening-frames',
  hero: 'hero-section-frames',
  transition: 'hero-to-about-section-transition-frames',
  about: 'about-section-frames',
};

const firstFrame: Record<FrameSequence, number> = {
  opening: 1,
  hero: 43,
  transition: 103,
  about: 173,
};

export const frames: Record<FrameSequence, ImageSequence> = Object.fromEntries(
  Object.entries(FRAME_COUNTS).map(([name, count]) => [name, new Array(count).fill(null)]),
) as Record<FrameSequence, ImageSequence>;

const listeners = new Set<(progress: number) => void>();
let started = false;

const framePath = (sequence: FrameSequence, index: number) => {
  const number = String(firstFrame[sequence] + index).padStart(4, '0');
  return `/frames/${directories[sequence]}/frame-${number}.webp`;
};

export function onFrameProgress(listener: (progress: number) => void) {
  listeners.add(listener);
  listener(live.frameProgress);
  return () => {
    listeners.delete(listener);
  };
}

/** Load sparse chronological frames first, then backfill without blocking interaction. */
export function loadFrames() {
  if (started || typeof window === 'undefined') return;
  started = true;
  const jobs: { sequence: FrameSequence; index: number }[] = [];
  const seen = new Set<string>();

  (Object.keys(FRAME_COUNTS) as FrameSequence[]).forEach((sequence) => {
    const count = FRAME_COUNTS[sequence];
    [8, 4, 2, 1].forEach((step) => {
      for (let index = 0; index < count; index += step) {
        const key = `${sequence}-${index}`;
        if (!seen.has(key)) {
          seen.add(key);
          jobs.push({ sequence, index });
        }
      }
    });
  });

  let complete = 0;
  let cursor = 0;
  const total = jobs.length;
  const next = () => {
    const job = jobs[cursor++];
    if (!job) return;
    const image = new Image();
    image.decoding = 'async';
    image.src = framePath(job.sequence, job.index);
    const finish = () => {
      complete += 1;
      live.frameProgress = complete / total;
      listeners.forEach((listener) => listener(live.frameProgress));
      next();
    };
    image.onload = () => {
      frames[job.sequence][job.index] = image;
      finish();
    };
    image.onerror = finish;
  };

  for (let worker = 0; worker < 6; worker += 1) next();
}

export function nearest(sequence: ImageSequence, index: number) {
  const rounded = Math.round(index);
  if (sequence[rounded]) return sequence[rounded];
  for (let distance = 1; distance < sequence.length; distance += 1) {
    if (sequence[rounded - distance]) return sequence[rounded - distance];
    if (sequence[rounded + distance]) return sequence[rounded + distance];
  }
  return null;
}
