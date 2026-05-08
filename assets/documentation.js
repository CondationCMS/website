// Documentation Mobile Sidebar Toggle
        const docNavToggle = document.getElementById('doc-nav-toggle');
        const docNavMobile = document.getElementById('doc-nav-mobile');

        docNavToggle.addEventListener('click', () => {
            docNavMobile.classList.toggle('open');
        });

        // Close sidebar when clicking on a link
        const docLinks = docNavMobile.querySelectorAll('a');
        docLinks.forEach(link => {
            link.addEventListener('click', () => {
                docNavMobile.classList.remove('open');
            });
        });

        // Submenu Toggle (Desktop & Mobile)
        const submenuToggles = document.querySelectorAll('.submenu-toggle');

        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const submenuId = toggle.getAttribute('data-toggle');
                const submenu = document.getElementById(submenuId);

                if (submenu) {
                    submenu.classList.toggle('open');
                    toggle.classList.toggle('active');
                }
            });
        });