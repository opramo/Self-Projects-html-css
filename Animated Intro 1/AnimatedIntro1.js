const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

timeline.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
timeline.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
timeline.to(".intro", { y: "-100%", duration: 1.5 }, "-=1.5");
timeline.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
timeline.fromTo(
  ".main-text",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "-=1"
);
