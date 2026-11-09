export const clamp = (value: number, minimum = 0, maximum = 1) => Math.min(maximum, Math.max(minimum, value));
export const segment = (progress: number, start: number, end: number) => clamp((progress - start) / (end - start));
export const seg = segment;

export const live = {
  mouse: { x: 0, y: 0 },
  hero: 0,
  transition: 0,
  about: 0,
  aboutExit: 0,
  frameProgress: 0,
};

export const FRAME_COUNTS = {
  opening: 42,
  hero: 60,
  transition: 70,
  about: 69,
} as const;

export type FrameSequence = keyof typeof FRAME_COUNTS;
