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

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all') {
                item.classList.remove('hidden');
                item.style.display = 'block';
            } else {
                const category = item.getAttribute('data-category');
                if (category === filter) {
                    item.classList.remove('hidden');
                    item.style.display = 'block';
                } else {
                    item.classList.add('hidden');
                    item.style.display = 'none';
                }
            }
        });
    });
});

// Tab Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');

        // Remove active from all tabs and buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));

        // Add active to clicked button and corresponding tab
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});