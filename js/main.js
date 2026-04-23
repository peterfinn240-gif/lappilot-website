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

// Native App Store / Play Store opening (bypass TikTok in-app browser web view)
// Strategy: Replace href on page load based on device. User click = native scheme = OS opens native Store app.
const ua = navigator.userAgent;
const isIOS = /iPhone|iPad|iPod/i.test(ua);
const isAndroid = /Android/i.test(ua);

if (isIOS) {
    document.querySelectorAll('a[href*="apps.apple.com"]').forEach(btn => {
        btn.href = 'itms-apps://apps.apple.com/ch/app/lappilot/id6760356759';
    });
}

if (isAndroid) {
    document.querySelectorAll('a[href*="play.google.com"]').forEach(btn => {
        btn.href = 'market://details?id=com.LAPpilot.app';
    });
}
