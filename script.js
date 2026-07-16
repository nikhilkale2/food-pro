// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});

// nav links smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = link.getAttribute("href");
    lenis.scrollTo(target);
  });
});

const mm = gsap.matchMedia();

// mm.add("(min-width:300px)", () => {});

gsap.from(".hero-section .hero-info", {
  opacity: 0,
  x: -50,
  duration: 0.9,
  delay: 0.3,
});

gsap.from(".hero-section .hero-img", {
  opacity: 0,
  x: 50,
  duration: 0.9,
  delay: 0.3,
});

// about section animation

gsap.from(".about-section .about-h1, .about-para", {
  opacity: 0,
  scale: 0,
  duration: 0.9,
  delay: 0.3,
  stagger: 0.4,

  scrollTrigger: {
    trigger: ".about-h1",
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from(".about-box .food-box", {
  opacity: 0,
  x: -200,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,

  scrollTrigger: {
    trigger: ".food-box",
    scroller: "body",
    start: "top 90%",
    end: "top 40%",
    scrub: 2,
  },
});

// hotel section styling

gsap.from(".hotel-food-img img", {
  rotate: -360,
  duration: 8,
  ease: "none",
  repeat: -1,

  scrollTrigger: {
    trigger: ".hotel-food-img img",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from(".hotel-section .hotel-info", {
  opacity: 0,
  duration: 0.8,
  x: 120,

  scrollTrigger: {
    trigger: ".hotel-info",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});

// hotel service section

gsap.from(".hotel-news .news", {
  opacity: 0,
  scale: 0,
  duration: 0.9,
  stagger: 0.2,

  scrollTrigger: {
    trigger: ".news",
    scroller: "body",
    start: "top 90%",
    end: "top 40%",
    scrub: 2,
  },
});

// hotel chef section

gsap.from(".chef-section .chef-info", {
  opacity: 0,
  x: -150,
  duration: 1.1,

  scrollTrigger: {
    trigger: ".chef-info",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from(".chef-section .chef-img", {
  opacity: 0,
  scale: 0,
  duration: 1.1,

  scrollTrigger: {
    trigger: ".chef-info",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});

// User opinion section

gsap.from(".users-review", {
  scale: 0,
  opacity: 0,
  duration: 0.9,
  scrollTrigger: {
    trigger: ".users-review",
    scroller: "body",
    start: "top 100%",
    end: "top 60%",
    scrub: 2,
  },
});
