import gsap from 'gsap';
import { onLenis } from '../lenis.js';

let isFirstLoad = true;

function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  // La animación de entrada solo corre la primera vez
  if (isFirstLoad) {
    gsap.fromTo(
      header,
      { autoAlpha: 0, y: -100 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
    );
    isFirstLoad = false;
  } else {
    // En navegaciones posteriores solo asegura que sea visible
    gsap.set(header, { autoAlpha: 1, y: 0 });
  }

  let lastY = 0;

  onLenis((lenis) => {
    // Handler nombrado para poder removerlo en la próxima navegación
    function onScroll({ scroll }) {
      const scrollingDown = scroll > lastY;

      if (scrollingDown && scroll > 80) {
        gsap.to(header, { y: '-150%', duration: 0.4, ease: 'power2.in', overwrite: true });
      } else {
        gsap.to(header, { y: '0%', duration: 0.4, ease: 'power2.out', overwrite: true });
      }

      lastY = scroll;
    }

    lenis.on('scroll', onScroll);

    // Limpia el listener cuando Astro navega a otra página
    document.addEventListener('astro:before-preparation', () => {
      lenis.off('scroll', onScroll);
      lastY = 0;
    }, { once: true }); // `once: true` evita que se acumule el listener de cleanup
  });
}

document.addEventListener('astro:page-load', initHeader);
