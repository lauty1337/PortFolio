import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initSections() {
  if (!document.querySelector('[data-hero-section]')) return;

  gsap.to('[data-hero-section]', {
    scale: 0.95,
    filter: 'brightness(0.4)',
    ease: 'none',
    scrollTrigger: {
      trigger: '[data-project-section]',
      start: 'top 90%',
      end: 'top 20%',
      scrub: true,
    },
  });
}

document.addEventListener('astro:page-load', initSections);
