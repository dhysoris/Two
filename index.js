document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin()
    gsap.registerPlugin(ScrollTrigger)

    // const counter3 = document.querySelector('.counter-3')


    // for (let i = 0; i < 2; i++) {
    //     for (let j = 0; j < 10; j++) {
    //         const div = document.createElement("div")
    //         div.className = "num"
    //         div.textContent = j;
    //         counter3.appendChild(div)
    //     }
    // }

    // const finalDiv = document.createElement("div")
    // finalDiv.className = 'num'
    // finalDiv.textContent = "0"
    // counter3.appendChild(finalDiv)

    // function animate(counter, duration, delay = 0) {
    //     const numHeight = counter.querySelector(".num").clientHeight;
    //     const totalDistance = (counter.querySelectorAll(".num").length -1) * numHeight

    //     gsap.to(counter, {
    //         y: -totalDistance,
    //         duration: duration,
    //         delay: delay,
    //         ease: "power2.inOut"
    //     }) 
    // }

    // animate(counter3, 5) 
    // animate(document.querySelector(".counter-2"), 6 )
    // animate(document.querySelector(".counter-1"), 2, 4)

    // gsap.to(".digit", {
    //     top: "-150px",
    //     stagger: {
    //         amount: 0.25
    //     },
    //     delay: 6,
    //     duration: 1,
    //     ease: "power4.inOut"
    // })

    // const squareContainer = document.querySelector(".square__container")
    // let arr = []
    // const boxes = 150

    // const screenHeight = window.innerHeight
    // const screenWidth = window.innerWidth

    // const numCol = Math.ceil(screenHeight / boxes)
    // const numRow = Math.ceil(screenWidth / boxes)
    // const numSquares = numCol * numRow

    // squareContainer.style.gridTemplate= `repeat(${numCol}, 1fr) / repeat(${numRow}, 1fr)`

    // function createBoxes() {
    //     for (let i = 0; i < numSquares; i++) {
    //         const div = document.createElement("div")
    //         div.classList.add("square")
    //         squareContainer.appendChild(div)
    //         arr.push(div)
    //     }
    // }

    // function animateBoxes () {
    //     gsap.to(arr, {
    //         opacity: 0,
    //         delay: 7,
    //         duration: 0.0005,
    //         stagger: {
    //             each: 0.007,
    //             from: "random"
    //         }
    //     })
    // }

    // squareContainer.innerHTML = ""
    // arr = []
    // createBoxes()
    // animateBoxes()


    gsap.utils.toArray(".image__container.left img").forEach((img) => {
        gsap.to(img, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                trigger: img,
                start: "top 45%",
                end: "bottom 75%",
                scrub: true,
                once: true
            }
        })
    })

    gsap.utils.toArray(".image__container.right img").forEach((img) => {
        gsap.to(img, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                trigger: img,
                start: "top 55%",
                end: "bottom 75%",
                scrub: true,
                once: true
            }
        })
    })

    gsap.utils.toArray(".image__container p").forEach((text)=> {
        gsap.from(text, {
            opacity: 0,
            y: 20,
            scrollTrigger: {
                trigger: text, 
                start: "top 70%",
                ease: "power4.inOut",
                toggleActions: "play none none reverse",

            }
        });
    });

    const paragraphs = document.querySelectorAll(".image__details")

    paragraphs.forEach((char, i) => {
        const text = new SplitType(char, {types: "chars"})

        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: "top 65%",
                end: "top 10%", 
                scrub: true,
            },
            opacity: 0.1,
            stagger: 0.03
        })
    })
})




