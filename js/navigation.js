/**
 * Darsh Patel Portfolio — Navigation Module
 */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuClose = document.querySelector(".mobile-menu-close");
  const mobileOverlay = document.querySelector(".mobile-menu-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const navLinks = document.querySelectorAll(".nav-link");
  const dockLinks = document.querySelectorAll("[data-dock-link]");
  const dockMenuBtn = document.querySelector(".dock-menu-btn");
  const sections = document.querySelectorAll("section[id]");

  // Sticky Header Scroll State
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }

    // Scroll Spy Active Link
    let currentSectionId = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSectionId = sec.getAttribute("id") || "";
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });

    mobileLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });

    dockLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // Mobile Menu Toggle Functions
  function openMobileMenu() {
    mobileOverlay?.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileOverlay?.classList.remove("open");
    document.body.style.overflow = "";
  }

  menuToggle?.addEventListener("click", openMobileMenu);
  menuClose?.addEventListener("click", closeMobileMenu);
  dockMenuBtn?.addEventListener("click", openMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay?.classList.contains("open")) {
      closeMobileMenu();
    }
  });
});
