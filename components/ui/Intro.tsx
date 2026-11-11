'use client';

import { PROFILE } from '@/lib/data';
import { scrollToId } from './SmoothScroll';

/** The opening shares CharacterStage with the hero, so scroll can rewind it. */
export default function Intro() {
  return (
    <section className="opening" id="opening" aria-label="Portfolio opening">
      <div className="opening-sticky">
        <div className="opening-caption">
          <p>{PROFILE.realName} · Software Engineer</p>
          <p>Scroll to begin</p>
        </div>
        <button className="opening-skip" onClick={() => scrollToId('billboard')}>
          Skip to portfolio
        </button>
      </div>
    </section>
  );
}
