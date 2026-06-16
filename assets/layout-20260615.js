// Navigation toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        hamburgerBtn.classList.toggle('menu-open');

        const isExpanded = hamburgerBtn.classList.contains('menu-open');
        hamburgerBtn.setAttribute('aria-expanded', isExpanded);
    });

    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            hamburgerBtn.classList.remove('menu-open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        });
    });

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    mediaQuery.addEventListener('change', (e) => {
        if (e.matches) {
            mobileMenu.classList.add('hidden');
            hamburgerBtn.classList.remove('menu-open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

// Portfolio filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(item => item.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all') {
                item.classList.remove('hidden');
                item.style.display = 'block';
                return;
            }

            const category = item.getAttribute('data-category');
            if (category === filter) {
                item.classList.remove('hidden');
                item.style.display = 'block';
            } else {
                item.classList.add('hidden');
                item.style.display = 'none';
            }
        });
    });
});

// Content tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        const activePanel = document.getElementById(tabName);

        tabBtns.forEach(item => item.classList.remove('active'));
        tabContents.forEach(item => item.classList.remove('active'));

        btn.classList.add('active');
        if (activePanel) {
            activePanel.classList.add('active');
        }
    });
});

// Code tabs
const codeTabs = document.querySelectorAll('.code-tabs');

codeTabs.forEach(container => {
    const tabs = container.querySelectorAll('.tab');
    const contents = container.querySelectorAll('.code-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(item => item.classList.remove('active'));

            tab.classList.add('active');

            const activeContent = container.querySelector(`[data-content="${tab.dataset.tab}"]`);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
});
