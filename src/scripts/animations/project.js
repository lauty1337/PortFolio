import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectTitle = document.querySelector('[data-project-title]');
const projectCard = document.querySelectorAll('[data-project-card]');

const projectTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#projects',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
        markers: true,
    },
});


projectTl
.from(projectTitle, {y: 10, opacity: 0, delay: 0.5, duration: 2, ease: 'power3.out'})
.from(projectCard, {y: 30, opacity: 0, duration: 1, stagger: 0.3, ease: 'power3.out'}, '<+=0.4s')