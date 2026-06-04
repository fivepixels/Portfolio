
/* =========================
   PORTFOLIO MAIN SCRIPT
   (nav + animations)
   CLEAN + OPTIMIZED VERSION
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

    const heroDescription = document.querySelector(".hero .description");

    if (heroDescription) {
      const sourceText = heroDescription.textContent.trim().replace(/\s+/g, " ");
      const originalHeight = heroDescription.getBoundingClientRect().height;
      const textNode = document.createTextNode("");
      const cursor = document.createElement("span");
      let index = 0;

      cursor.className = "typewriter-cursor";
      cursor.setAttribute("aria-hidden", "true");

      heroDescription.setAttribute("aria-label", sourceText);
      heroDescription.style.minHeight = `${originalHeight}px`;
      heroDescription.textContent = "";
      heroDescription.append(textNode, cursor);

      const typeNextCharacter = () => {
        textNode.textContent = sourceText.slice(0, index);

        if (index < sourceText.length) {
          const currentCharacter = sourceText.charAt(index);
          const pause = /[.,]/.test(currentCharacter) ? 90 : 40;

          index += 1;
          window.setTimeout(typeNextCharacter, pause);
        }
      };

      window.setTimeout(() => {
        heroDescription.classList.add("typewriter-active");
        typeNextCharacter();
      }, 800);
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

      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          hamburger.classList.remove("active");
        });
      });
    }
  
  
    /* =========================
       SCROLL REVEAL SYSTEM
       (unified for ALL sections)
       ========================= */
    const timedMoreArCards = document.querySelectorAll(".more-ar-grid .reveal");

    if (timedMoreArCards.length > 0) {
      window.setTimeout(() => {
        timedMoreArCards.forEach((el) => el.classList.add("active"));
      }, 250);
    }

    const revealElements = Array.from(document.querySelectorAll(".reveal"))
      .filter((el) => !el.closest(".more-ar-grid"));

    if (revealElements.length > 0) {
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
    }

});
