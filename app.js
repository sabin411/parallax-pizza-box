gsap.registerPlugin(ScrollTrigger);

// Path: app.js
gsap.to("#blury-tomato", {
    scrollTrigger: {
        trigger: "#blury-tomato",
        scrub: true,
        // pin: false,
        // pinSpacing: false
    },
    y: -150
});
gsap.to("#tomatos", {
    scrollTrigger: {
        trigger: "#tomatos",
        scrub: true,
        // pin: false,
        // pinSpacing: false
    },
    y: -150
});

gsap.to("#leaf-1", {
    scrollTrigger: {
        trigger: "#leaf-1",
        scrub: true,
        // pin: false,
        // pinSpacing: false
    },
    y: -150
});
gsap.to("#leaf-2", {
    scrollTrigger: {
        trigger: "#leaf-2",
        scrub: true,
        // pin: false,
        // pinSpacing: false
    },
    y: -120
});
gsap.to("#leaf-3", {
    scrollTrigger: {
        trigger: "#leaf-3",
        scrub: true,
        // pin: false,
        // pinSpacing: false
    },
    y: -100
});

