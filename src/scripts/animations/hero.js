import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const heroTagline = document.querySelector('[data-hero-tagline]');
const split = new SplitText('[data-split]', { type: 'chars, words' });

const heroTl = gsap.timeline();

//Seteos iniciales
gsap.set(heroTagline, {y: -40, autoAlpha: 0});

heroTl
.to(heroTagline, {y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out', delay: 0.2})
.from(split.chars, {y: 50, opacity: 0, duration: 0.6,stagger: 0.08, ease: 'power3.out',}, '<+=0.1s')




