
/* =========================
   PORTFOLIO MAIN SCRIPT
   (theme + nav + animations)
   ========================= */

   document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       THEME TOGGLE SYSTEM
       ========================= */
    const toggleBtn = document.getElementById("themeToggle");
  
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
  
        // persist user preference
        const theme = document.body.classList.contains("light") ? "light" : "dark";
        localStorage.setItem("theme", theme);
      });
    }
  
    /* load saved theme */
    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme === "light") {
      document.body.classList.add("light");
    }
  
  
    /* =========================
       MOBILE NAV TOGGLE
       ========================= */
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
  
        // toggle menu visibility
        navLinks.classList.toggle("active");
  
        // toggle hamburger → X animation
        hamburger.classList.toggle("active");
      });
    }
  
  
    /* =========================
       SCROLL REVEAL (CARDS)
       ========================= */
    const revealElements = document.querySelectorAll(".reveal");
  
    if (revealElements.length > 0) {
  
      const observer = new IntersectionObserver((entries, obs) => {
  
        entries.forEach((entry) => {
  
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
  
            // animate only once for performance
            obs.unobserve(entry.target);
          }
  
        });
  
      }, {
        threshold: 0.25
      });
  
      revealElements.forEach((el) => observer.observe(el));
    }
  
  });