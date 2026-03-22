import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

let splitTitle = null;

function initHero() {
  const heroTagline = document.querySelector('[data-hero-tagline]');
  if (!heroTagline) return; // no estamos en el Hero

  // Revierte el split anterior para evitar spans dobles al volver a la página
  if (splitTitle) splitTitle.revert();
  splitTitle = new SplitText('[data-split]', { type: 'chars, words' });

  const heroCta   = document.querySelector('[data-hero-cta]');
  const heroImage = document.querySelector('[data-hero-image]');

  gsap.set(heroTagline, { y: -40, autoAlpha: 0 });

  gsap.timeline()
    .to(heroTagline, { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out', delay: 0.2 })
    .from(splitTitle.chars, { y: -40, opacity: 0, duration: 0.3, stagger: 0.08, ease: 'power3.out' }, '<+=0.1s')
    .from(heroImage, { autoAlpha: 0, y: 50, duration: 0.6, ease: 'power3.out' }, '<+=0.4s')
    .from(heroCta,   { y: 50, opacity: 0, duration: 0.3, ease: 'back.out(1.7)', stagger: 0.6 }, '<+=0.2s');
}

// astro:page-load dispara en la carga inicial Y en cada navegación con View Transitions
document.addEventListener('astro:page-load', initHero);
