import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const heroTitle = SplitText.create('[data-hero-title]',{type: 'chars'})
const heroName = SplitText.create('[data-hero-name]',{type: 'chars'})

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
.from(heroName.chars, { stagger: 0.05, ease: 'back.out(1.7)'})
.from(heroTitle.chars, { stagger: 0.05, ease: 'back.out(1.7)'}, '<+=0.2s')
.from('[data-hero-cta]', { y: 60, stagger: 0.6, ease: 'back.out(1.7)'},'<+=0.3s')

document.addEventListener('astro:page-load', () => {
  tlHero.play();
});
