import gsap from 'gsap';

gsap.from('#header',{ autoAlpha:0, y: -80, duration:0.5, ease: 'back.out(1.7)'})


let lastScrollY = window.scrollY; 



document.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if(currentScrollY > lastScrollY) {
    gsap.to('#header', { autoAlpha:1, y: -100, duration:0.5})
  } else {
    gsap.to('#header', { autoAlpha:1, y: 0, duration:0.5})
  }
  lastScrollY = currentScrollY;
})