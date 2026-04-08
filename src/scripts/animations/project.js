import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

  const section = document.getElementById('projects');
  const title = SplitText.create('[data-project-title]',{type: 'lines', mask: "lines"});
  const cards = document.querySelectorAll('[data-project-card]');

  const tlProject = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      markers: true,
      toggleActions: 'play none none reverse',
      duration: 0.5,
    }
  })

  tlProject.
  from(title.lines, {y: 100,  duration: 0.8, ease: 'power3.out'})
  cards.forEach((card) => 
    gsap.from(card, {y: 40, autoAlpha: 0, stagger: 0.3, ease: 'power3.out'}, '<+=0.4s')
  )


document.addEventListener('astro:page-load', tlProject.play);
