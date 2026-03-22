import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;
let callbacks = [];

function lenisRaf(time) {
  lenisInstance?.raf(time * 1000);
}

export function initLenis() {
  import('lenis').then(({ default: Lenis }) => {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisInstance.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0);

    callbacks.forEach((cb) => cb(lenisInstance));
    callbacks = [];
  });
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
  gsap.ticker.remove(lenisRaf);
  callbacks = [];
}

export function onLenis(cb) {
  if (lenisInstance) {
    cb(lenisInstance);
  } else {
    callbacks.push(cb);
  }
}
