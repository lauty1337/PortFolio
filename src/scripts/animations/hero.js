import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const heroTagline = document.querySelector('[data-hero-tagline]');
const split = new SplitText('[data-split]', { type: 'chars, words' });
const heroCta = document.querySelector('[data-hero-cta]');
const heroImage = document.querySelector('[data-hero-image]')


const heroTl = gsap.timeline();

//Seteos iniciales
gsap.set(heroTagline, {y: -40, autoAlpha: 0});

heroTl
.to(heroTagline, {y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out', delay: 0.2})
.from(split.chars, {y: -40, opacity: 0, duration: 0.3,stagger: 0.08, ease: 'power3.out'}, '<+=0.1s')
.from(heroImage, {autoAlpha: 0, y: 50, duration: 0.6, ease: 'power3.out'}, '<+=0.4s')
.from(heroCta, { y: 50, opacity: 0, duration: 0.3, ease: 'back.out(1.7)', stagger: 0.6}, '<+=0.2s')



