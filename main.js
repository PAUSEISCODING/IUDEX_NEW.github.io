// IUDEX INDUSTRIES — Mobile Navigation System

const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

// Toggle menu open/close
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileNav.classList.toggle('open');
  document.body.classList.toggle('nav-open');
});

// Close menu when clicking a link (optional but clean)
const navLinks = mobileNav.querySelectorAll('a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.classList.remove('nav-open');
  });
});
