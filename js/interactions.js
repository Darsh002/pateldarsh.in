/**
 * Darsh Patel Portfolio — User Interactions & Interactive Engine Module
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Project Case Study Modal Drawer
  const modal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBackdrop = modal?.querySelector(".modal-backdrop");

  function openProjectModal(projectId) {
    if (!window.siteData || !window.siteData.projects) return;
    const proj = window.siteData.projects.find(p => p.id === projectId);
    if (!proj) return;

    document.getElementById("modal-category").textContent = proj.category || "CASE STUDY";
    document.getElementById("modal-title").textContent = proj.title;
    document.getElementById("modal-subtitle").textContent = proj.subtitle;
    document.getElementById("modal-description").textContent = proj.description;
    document.getElementById("modal-problem").textContent = proj.fullDetails.problem || "N/A";
    document.getElementById("modal-solution").textContent = proj.fullDetails.solution || "N/A";

    const featuresList = document.getElementById("modal-features-list");
    featuresList.innerHTML = proj.fullDetails.keyFeatures.map(f => `<li>${f}</li>`).join('');

    const techRow = document.getElementById("modal-tech-stack");
    techRow.innerHTML = proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');

    const achievementBadge = document.getElementById("modal-achievement");
    achievementBadge.textContent = proj.fullDetails.achievement || "";

    const modalActions = document.getElementById("modal-actions");
    const actionLinks = [
      proj.liveUrl ? { href: proj.liveUrl, label: "Live Demo", icon: "external-link" } : null,
      proj.githubUrl ? { href: proj.githubUrl, label: "View Repository", icon: "github" } : null,
      proj.linkedinUrl ? { href: proj.linkedinUrl, label: "LinkedIn Post", icon: "linkedin" } : null
    ].filter(Boolean);

    modalActions.innerHTML = actionLinks.map((link, idx) => `
      <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="btn ${idx === 0 ? 'btn-primary' : 'btn-secondary'}" style="padding: 0.75rem 1.5rem;">
        ${link.label} <i data-lucide="${link.icon}" style="width: 16px; height: 16px;"></i>
      </a>
    `).join('');

    if (window.lucide) window.lucide.createIcons();

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".open-case-study-btn");
    if (btn) {
      const projectId = btn.getAttribute("data-project-id");
      if (projectId) openProjectModal(projectId);
    }
  });

  modalCloseBtn?.addEventListener("click", closeProjectModal);
  modalBackdrop?.addEventListener("click", closeProjectModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("open")) {
      closeProjectModal();
    }
  });

  // 2. Skills Category Interactive Filter Bar
  const filterBtns = document.querySelectorAll(".skills-filter-btn");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      const cards = document.querySelectorAll(".skill-category-card");

      cards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // 3. 3D Tilt Micro-Interaction Engine for Cards
  const tiltCards = document.querySelectorAll(".timeline-card, .achievement-card, .skill-category-card");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && window.innerWidth > 992) {
    tiltCards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
      });
    });
  }

  // 4. Interactive Ambient Canvas Particle System
  const canvas = document.getElementById("ambient-canvas");
  if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && window.innerWidth > 768) {
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resizeCanvas();

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 200);
    });

    // ponytail: capped at 24 particles + 80px link radius — 45 particles with a
    // 130px radius did ~1000 distance checks + draw calls every frame, uncapped,
    // full-viewport, forever. That was the real cause of site-wide scroll jank.
    const PARTICLE_COUNT = 24;
    const LINK_DISTANCE = 80;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.3 + 0.1
    }));

    let isPageVisible = true;
    document.addEventListener("visibilitychange", () => {
      isPageVisible = !document.hidden;
    });

    function drawAmbientCanvas() {
      requestAnimationFrame(drawAmbientCanvas);
      if (!isPageVisible) return;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 76, 36, ${p.alpha})`;
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < LINK_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 76, 36, ${0.12 * (1 - dist / LINK_DISTANCE)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });
    }
    drawAmbientCanvas();
  }

  // 5. Copy Email to Clipboard Handler
  const copyEmailBtns = document.querySelectorAll(".copy-email-btn");
  copyEmailBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = "todarshpatel002@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `Copied! <i data-lucide="check" style="width: 16px; height: 16px;"></i>`;
        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
          btn.innerHTML = originalText;
          if (window.lucide) window.lucide.createIcons();
        }, 2500);
      }).catch(err => {
        console.error("Clipboard copy failed: ", err);
      });
    });
  });

  // 6. Contact Form Handling — Real Submission via FormSubmit.co
  const contactForm = document.getElementById("contact-form");
  const formToast = document.getElementById("form-toast");

  function showFormToast(message, isError = false) {
    if (!formToast) return;
    formToast.classList.remove("success", "error");
    formToast.classList.add(isError ? "error" : "success");
    formToast.textContent = message;
  }

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("form-name");
      const emailInput = document.getElementById("form-email");
      const messageInput = document.getElementById("form-message");

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        showFormToast("Please fill in all required fields.", true);
        return;
      }

      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.textContent = "SENDING...";
      submitBtn.disabled = true;
      formToast.classList.remove("success", "error");

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: { Accept: "application/json" }
        });

        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        contactForm.reset();
        showFormToast("✓ Message sent successfully! Darsh will reply shortly.");
      } catch (err) {
        console.error("Contact form submission failed:", err);
        showFormToast(`Could not send message. Please email todarshpatel002@gmail.com directly.`, true);
      } finally {
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.disabled = false;
        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
          formToast.classList.remove("success", "error");
        }, 6000);
      }
    });
  }

  // Scroll-to-top: footer link + floating FAB
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelector(".back-to-top-btn")?.addEventListener("click", scrollToTop);

  const scrollTopFab = document.getElementById("scroll-top-fab");
  if (scrollTopFab) {
    scrollTopFab.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", () => {
      scrollTopFab.classList.toggle("visible", window.scrollY > 600);
    });
  }
});
