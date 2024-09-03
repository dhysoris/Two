gsap.registerPlugin(ScrollTrigger)
const lerp = (a, b, n) => (1 - n) * a + n * b;

const lenis = new Lenis()

lenis.on('scroll', (e) => {

})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
