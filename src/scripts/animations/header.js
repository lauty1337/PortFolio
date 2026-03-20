import gsap from 'gsap';

const header = document.getElementById('header');


gsap.fromTo(header, {autoAlpha: 0, y: -100}, {autoAlpha: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)'})