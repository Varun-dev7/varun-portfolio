// Intersection Observer for fade-in sections
const faders = document.querySelectorAll('.fade-in');
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = 'translateY(0)';
    obs.unobserve(entry.target);
  });
}, observerOptions);

faders.forEach(el => observer.observe(el));

// Active nav link highlighting
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
