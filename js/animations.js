/**
 * Darsh Patel Portfolio — GSAP, ScrollTrigger & Physics Animation Engine
 * Reference Style: grigoletti.ch
 */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Custom Physics Mouse Cursor
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  if (dot && ring && !prefersReducedMotion) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      document.body.classList.add("cursor-active");
    });

    document.addEventListener("mouseleave", () => document.body.classList.remove("cursor-active"));
    document.addEventListener("mouseenter", () => document.body.classList.add("cursor-active"));
    window.addEventListener("mousedown", () => document.body.classList.add("cursor-click"));
    window.addEventListener("mouseup", () => document.body.classList.remove("cursor-click"));

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    const hoverTargets = document.querySelectorAll("a, button, .card-hover-effect, .tech-tag, .skill-chip, input, textarea, .project-case-card");
    hoverTargets.forEach(el => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
  }

  // 2. Magnetic Hover Effect on Buttons
  const magneticButtons = document.querySelectorAll(".btn, .menu-toggle");
  if (!prefersReducedMotion) {
    magneticButtons.forEach(btn => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = `translate(0px, 0px)`;
      });
    });
  }

  // 3. GSAP & ScrollTrigger Animations
  if (window.gsap && !prefersReducedMotion) {
    window.gsap.registerPlugin(window.ScrollTrigger);

    // Hero Entrance Sequence
    const heroTl = window.gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl.from(".hero-eyebrow", { opacity: 0, x: -30, duration: 0.8 })
          .from(".hero-title-main .text-line", { opacity: 0, y: 60, duration: 1, stagger: 0.15 }, "-=0.5")
          .from(".hero-role-line", { opacity: 0, y: 20, duration: 0.6 }, "-=0.6")
          .from(".hero-lead-text", { opacity: 0, y: 25, duration: 0.7 }, "-=0.5")
          .from(".hero-cta-group", { opacity: 0, y: 20, duration: 0.6 }, "-=0.5")
          .from(".hero-quick-stats", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
          .from(".hero-terminal", { opacity: 0, y: 40, scale: 0.97, duration: 1 }, "-=1");

    // ScrollTrigger Section Animations — staggered per parent container (hero handled above, skip it here)
    const revealGroups = new Map();
    document.querySelectorAll(".reveal-up").forEach(card => {
      if (card.closest("#hero")) return;
      const parent = card.closest("section") || document.body;
      if (!revealGroups.has(parent)) revealGroups.set(parent, []);
      revealGroups.get(parent).push(card);
    });

    revealGroups.forEach(cards => {
      cards.forEach(c => c.classList.add("js-animated"));
      window.gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: cards[0],
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );
    });

  } else {
    // Fallback IntersectionObserver if GSAP is unavailable
    const revealElements = document.querySelectorAll(".reveal-up:not(#hero .reveal-up)");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-inview");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach(el => {
      el.classList.add("js-animated");
      observer.observe(el);
    });
  }
});
