import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initProjectAnimations() {
  const section = document.getElementById('projects');
  if (!section) return;

  const title = document.querySelector('[data-project-title]');
  if (title) {
    gsap.from(title, {
      y: 36,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 88%',
        toggleActions: 'play none none reverse',
      },
    });
  }

  gsap.utils.toArray('[data-project-card]').forEach((card) => {
    gsap.from(card, {
      y: 48,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 92%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}

document.addEventListener('astro:page-load', initProjectAnimations);
