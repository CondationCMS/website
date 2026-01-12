// Navigation Toggle Funktionalität
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Hamburger Button Klick Handler
hamburgerBtn.addEventListener('click', () => {
    // Toggle der Klassen
    mobileMenu.classList.toggle('hidden');
    hamburgerBtn.classList.toggle('menu-open');

    // Update aria-expanded für Barrierefreiheit
    const isExpanded = hamburgerBtn.classList.contains('menu-open');
    hamburgerBtn.setAttribute('aria-expanded', isExpanded);
});

// Menü schließen, wenn auf einen Link geklickt wird
const navLinks = mobileMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerBtn.classList.remove('menu-open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
});

// Menü schließen, wenn Größe > md
const mediaQuery = window.matchMedia('(min-width: 768px)');
mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        mobileMenu.classList.add('hidden');
        hamburgerBtn.classList.remove('menu-open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
});