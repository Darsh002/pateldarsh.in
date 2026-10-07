/**
 * Darsh Patel Portfolio — Main Orchestrator Script
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Darsh Patel Portfolio Loaded — Engineering Scalable Web Ecosystems.");

  // Re-run icon generation after dynamic content rendering
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
