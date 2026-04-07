import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

  const section = document.getElementById('projects');
  const title = SplitText.create('[data-project-title]',{type: 'lines', mask: "lines"});

  
    gsap.from(title.lines, {
      y: 36,
      opacity: 0,
      duration: 0.8,  
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        markers: true,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

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

document.addEventListener('astro:page-load', initProjectAnimations);
