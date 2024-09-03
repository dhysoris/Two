gsap.registerPlugin(ScrollTrigger)
const lerp = (a, b, n) => (1 - n) * a + n * b;

const lenis = new Lenis()

lenis.on('scroll', (e) => {

})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 600)
})

gsap.ticker.lagSmoothing(0)
