// Intersection Observer for fade-in
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateY(0)";
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// Smooth scroll & Active link highlight
const navLinks = document.querySelectorAll(".nav-menu a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 90;
  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section &&
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Typing effect for hero title
const typingText = "Full-Stack Developer";
const typingElem = document.querySelector(".typing");
let index = 0;

function typeNextChar() {
  if (index <= typingText.length) {
    typingElem.textContent = typingText.slice(0, index);
    index++;
    setTimeout(typeNextChar, 100);
  } else {
    // Optional: repeat typing after delay
    setTimeout(() => {
      index = 0;
      typeNextChar();
    }, 4000);
  }
}
typeNextChar();

// Mobile nav toggle
const navToggleBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggleBtn.addEventListener("click", () => {
  const expanded =
    navToggleBtn.getAttribute("aria-expanded") === "true" || false;
  navToggleBtn.setAttribute("aria-expanded", !expanded);
  navMenu.classList.toggle("open");
});

// Back to top button
const backToTopBtn = document.querySelector(".back-to-top");
backToTopBtn.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});
