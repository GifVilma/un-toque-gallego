// === Funciones globales para el modal de carta ===
function openCartaModal() {
    const cartaModal = document.getElementById("carta-modal");
    if (cartaModal) {
        cartaModal.style.display = "block";
    }
}

function closeCartaModal() {
    const cartaModal = document.getElementById("carta-modal");
    if (cartaModal) {
        cartaModal.style.display = "none";
    }
}

function downloadCarta() {
    const filePath = 'img/carta-un-toque-gallego.jpg';
    const fileName = 'carta-un-toque-gallego.jpg';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// === Función faltante para modal en sección "Para llevar" ===
function openModal() {
    const modal = document.getElementById("modal");
    if (modal) modal.style.display = "block";
}

// === Funciones para Quiénes Somos ===
function initializeMemoryCards() {
    document.querySelectorAll('.memory-card').forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.getAttribute('data-image');
            const previewImg = document.querySelector('#memory-preview img');
            if (previewImg) {
                previewImg.src = imgSrc;
            }
        });
    });
}

function initializeLocationToggle() {
    const toggleButton = document.getElementById('toggle-localizacion');
    const localizacion = document.getElementById('localizacion');
    if (toggleButton && localizacion) {
        toggleButton.addEventListener('click', () => {
            const isHidden = localizacion.style.display === 'none' || localizacion.style.display === '';
            if (isHidden) {
                localizacion.style.display = 'block';
                setTimeout(() => {
                    localizacion.classList.add('visible');
                    localizacion.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    toggleButton.textContent = 'Ocultar localización';
                }, 10);
            } else {
                localizacion.classList.remove('visible');
                setTimeout(() => {
                    localizacion.style.display = 'none';
                    toggleButton.textContent = 'Localización';
                }, 500);
            }
        });
    }
}

// === DOMContentLoaded ===
document.addEventListener("DOMContentLoaded", function () {
    initializeMemoryCards();
    initializeLocationToggle();

    const menuCheckbox = document.getElementById("menu"),
          navbar = document.querySelector(".navbar"),
          menuItems = document.querySelectorAll(".has-submenu > a"),
          submenuItems = document.querySelectorAll(".submenu a"),
          mainMenuLinks = document.querySelectorAll(".nav-menu > li > a:not(.has-submenu > a)");

    const closeSubmenus = () => {
        document.querySelectorAll(".submenu-open").forEach(item => item.classList.remove("submenu-open"));
    };

    const closeMainMenu = () => {
        if (window.innerWidth <= 991) {
            menuCheckbox.checked = false;
            navbar.style.transform = "translateX(-100%)";
        }
    };

    const navigateAndClose = (href) => {
        const target = document.querySelector(href);
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight || 85;
            const extraMargin = 15;
            const offset = headerHeight + extraMargin;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            setTimeout(() => {
                closeSubmenus();
                closeMainMenu();
            }, 300);
        }
    };

    const toggleMenu = () => {
        if (window.innerWidth <= 991) {
            navbar.style.transform = menuCheckbox.checked ? "translateX(0)" : "translateX(-100%)";
        }
    };

    menuCheckbox.addEventListener("change", toggleMenu);

    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const parent = this.parentElement;
            const submenu = parent.querySelector(".submenu");
            const isOpen = parent.classList.contains("submenu-open");

            closeSubmenus();

            if (!isOpen) {
                parent.classList.add("submenu-open");
                if (submenu) {
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                }
            }
        });
    });

    submenuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            if (href && href.startsWith("#")) {
                navigateAndClose(href);
            }
        });
    });

    mainMenuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            if (href && href.startsWith("#")) {
                navigateAndClose(href);
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 991) {
            navbar.style.transform = "translateX(0)";
            document.querySelectorAll(".submenu").forEach(submenu => {
                submenu.style.maxHeight = "";
            });
            closeSubmenus();
        } else {
            toggleMenu();
            closeSubmenus();
        }
    });

    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target) && !menuCheckbox.contains(e.target)) {
            closeSubmenus();
        }
    });

    const downloadButton = document.querySelector('#carta-modal .btn-download-modal');
    if (downloadButton) {
        downloadButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            downloadCarta();
        });
    }

    window.onclick = function(event) {
        const cartaModal = document.getElementById("carta-modal");
        const modal = document.getElementById("modal");
        if (cartaModal && event.target === cartaModal) {
            cartaModal.style.display = "none";
        }
        if (modal && event.target === modal) {
            modal.style.display = "none";
        }
    };

    const legalLinks = document.querySelectorAll('.legal-link');
    const legalContents = document.querySelectorAll('.legal-content');
    const closeButtons = document.querySelectorAll('.close-legal');

    legalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            legalContents.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('fade-in');
            });
            if (targetContent) {
                targetContent.style.display = 'flex';
                setTimeout(() => {
                    targetContent.classList.add('fade-in');
                }, 10);
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.closest('.legal-content');
            content.classList.remove('fade-in');
            setTimeout(() => {
                content.style.display = 'none';
            }, 300);
        });
    });

    legalContents.forEach(content => {
        content.addEventListener('click', (e) => {
            if (e.target === content) {
                content.classList.remove('fade-in');
                setTimeout(() => {
                    content.style.display = 'none';
                }, 300);
            }
        });
    });

    const anchorLinks = document.querySelectorAll('a[href^="#"]:not(.nav-menu a):not(.btn-download-modal):not(.emoji a):not([href^="tel:"]):not([href^="mailto:"])');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight || 85;
                const extraMargin = 15;
                const offset = headerHeight + extraMargin;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    const phoneMessage = document.getElementById('phone-message');

    phoneLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const phoneNumber = link.getAttribute('href').replace('tel:', '');
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            if (isMobile) return;

            e.preventDefault();
            if (phoneMessage) {
                phoneMessage.textContent = `Por favor, llama al número: ${phoneNumber}`;
                phoneMessage.style.display = 'block';
                setTimeout(() => {
                    phoneMessage.style.display = 'none';
                }, 5000);
            }
        });
    });

    // === Botón Scroll to Top (#scrollTopBtn) ===
    const scrollToTopBtn = document.getElementById('scrollTopBtn');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = 'flex';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
    }
});
