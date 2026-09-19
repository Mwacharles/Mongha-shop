document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.products img').forEach(image => {
    image.loading = 'lazy';
    image.decoding = 'async';
  });

  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.rel = 'noopener noreferrer';
  });

  // Fade-in sections on scroll where the browser supports it
  const sections = document.querySelectorAll('section');
  if ('IntersectionObserver' in window) {
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
  }

  // Simple nav shadow on scroll for depth
  const nav = document.querySelector('.site-nav');
  const onScroll = () => {
    if (!nav) return;

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
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your inquiry has been sent to Mongha Electricals.');
    form.reset();
  });
});
