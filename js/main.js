// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!wasActive) item.classList.add('active');
    });
});

// Scroll fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .pricing-card, .faq-item, .section-header').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Schemes sind hardcoded im HTML (itms-apps:// und market://).
// Fallback fuer Desktop/unsupported: Wenn Scheme nicht feuert -> Web-Store nach 1.5s.
document.querySelectorAll('a[href^="itms-apps://"]').forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
            if (!document.hidden) {
                window.location.href = 'https://apps.apple.com/ch/app/lappilot/id6760356759';
            }
        }, 1500);
    });
});

document.querySelectorAll('a[href^="market://"]').forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
            if (!document.hidden) {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.LAPpilot.app';
            }
        }, 1500);
    });
});
