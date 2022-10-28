gsap.from('.navbar', {
    delay: 2.5,
    duration: 1,
    opacity: 0,
    y: '-50px',
    ease: 'power1'
})
gsap.from('.navlogo', {
    delay: 1,
    duration: 1,
    opacity: 0,
    y: '-50px',
    ease: 'power1'
})
gsap.from('.maintitle', {
    duration: 1.5,
    x: '-500px',
    delay: 1,
    opacity: 0,
    ease: 'power1'
})
gsap.from('.musicart', {
    duration: 1,
    y: '-50px',
    delay: 2.5,
    opacity: 0,
    ease: 'power1'
})
gsap.from('.icon-scroll', {
    duration: 1,
    y: '-50px',
    delay: 3,
    opacity: 0,
    ease: 'power1'
})
gsap.timeline({
    scrollTrigger: {
        trigger: ".aboutme",
        start: "center center",
        end: "bottom top",
        pin: true,
    }

})
    .to(".abouttxt p", {
        backgroundPositionX: "0%",
        stagger: 1,
        scrollTrigger: {
            trigger: ".abouttxt",
            scrub: 1,
            start: "top center",
            end: "bottom top",
            pin: true,
        }
    })

gsap.timeline({
    scrollTrigger: {
        trigger: ".albums",
        start: "center center",
        end: "bottom top",
        pin: true,
    }

})
    .from(".newrel", { y: innerWidth * 1 })
    .from(".covers", {
        duration: 0.3,
        y: '100px',
        opacity: 0,
        ease: 'power1',
        markers:true
    })
gsap.set(".albums", { xPercent: -50, yPercent: -50 });
gsap.to(".albums", {
    scale: 0.1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".parent",
        pin: ".albums",
        scrub: true,
    }
})

gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom top",
        scrub: true,
    }
})
.to(".bgtxt",{
    x:innerWidth*1.6,
    ease: 'power1',
})

