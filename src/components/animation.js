import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";



gsap.from("#intro1", {
    x: -100
});

gsap.to("#intro1", {
    scrollTrigger: {
        trigger: "#intro1",
        start: "top center",
        toggleAction: "restart none none none"
    },
    x: 100,
    ease: "power4.out"
})