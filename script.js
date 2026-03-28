document.addEventListener('DOMContentLoaded', () => {
  // Fade-in sections on scroll
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transition = 'opacity 800ms ease-in';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Simple nav shadow on scroll for depth
  const nav = document.querySelector('.site-nav');
  const onScroll = () => {
    if (window.scrollY > 6) {
      nav.style.boxShadow = '0 6px 16px rgba(0,0,0,0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Form submission handle
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your inquiry has been sent to Mongha Electricals.');
    form.reset();
  });
});
