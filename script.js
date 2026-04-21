
/* =========================
   PORTFOLIO MAIN SCRIPT
   (theme + nav + animations)
   CLEAN + OPTIMIZED VERSION
   ========================= */

   document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       THEME SYSTEM
       ========================= */
    const toggleBtn = document.getElementById("themeToggle");
  
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
  
        const theme = document.body.classList.contains("light")
          ? "light"
          : "dark";
  
        localStorage.setItem("theme", theme);
      });
    }
  
    // load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light");
    }
  
  
    /* =========================
       MOBILE NAVIGATION
       ========================= */
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
      });
    }
  
  
    /* =========================
       SCROLL REVEAL SYSTEM
       (unified for ALL sections)
       ========================= */
    const revealElements = document.querySelectorAll(".reveal");
  
    if (revealElements.length === 0) return;
  
    const observer = new IntersectionObserver((entries, obs) => {
  
      entries.forEach((entry) => {
  
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
  
          // animate once (performance + avoids flicker)
          obs.unobserve(entry.target);
        }
  
      });
  
    }, {
      threshold: 0.2,        // balanced trigger point
      rootMargin: "0px 0px -10% 0px" // slightly earlier reveal
    });
  
    revealElements.forEach((el) => observer.observe(el));
  
  });