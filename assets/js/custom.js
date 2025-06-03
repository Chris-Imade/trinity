// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 15 + "s";
    particle.style.animationDuration = 15 + Math.random() * 10 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});

// Smooth hover effect for icon boxes
function setupHoverEffects() {
  const iconBoxes = document.querySelectorAll(".vl-about-icon-box");

  iconBoxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.style.transform = "translateY(-10px) scale(1.02)";
    });

    box.addEventListener("mouseleave", () => {
      box.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  setupHoverEffects();
});

// Add a subtle parallax effect to the background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".vl-about-section::before");
  const speed = scrolled * 0.5;
});
