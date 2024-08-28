gsap.registerPlugin(ScrollTrigger)


let lenis = new Lenis({
    scrollTigger: {
        lerp: 0.1,
        smoothWheel: true
    }
})

lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add((timer) => lenis.raf(timer * 500))
gsap.ticker.lagSmoothing[0]