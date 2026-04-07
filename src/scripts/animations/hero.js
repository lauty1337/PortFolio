import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const heroTitle = SplitText.create('[data-hero-title]',{type: 'lines', mask: "lines"})
const heroName = SplitText.create('[data-hero-name]',{type: 'lines', mask: "lines"})

const tlHero = gsap.timeline({
  defaults: {
    autoAlpha: 0,
    y: -80,
    ease: 'power4.out',
    duration: 0.5,
  },
});

tlHero
.from('[data-hero-tagline]', {})
.from(heroName.lines, { stagger: 0.05, y: 100})
.from(heroTitle.lines, { stagger: 0.05,  ease: 'back.out(1.7)', y: 100}, '<+=0.2s')
.from('[data-hero-cta]', { y: 60, stagger: 0.6, ease: 'back.out(1.7)'},'<+=0.3s')

document.addEventListener('astro:page-load', () => {
  tlHero.play();
});
