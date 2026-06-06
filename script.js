// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
function toggleMenu() {
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
}

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-trigger').addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});

// Scroll reveal animation
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObs.unobserve(e.target);
        }
    });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Form submit handler (simulated success)
function handleFormSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = '✓ Request Sent — We\'ll contact you shortly!';
    btn.style.background = '#2d7a4f';
    btn.style.color = '#fff';
    btn.style.pointerEvents = 'none';
    setTimeout(() => {
        btn.textContent = 'Secure My Strategy Session →';
        btn.style.background = '';
        btn.style.color = '';
        btn.style.pointerEvents = '';
        e.target.reset();
    }, 4000);
}