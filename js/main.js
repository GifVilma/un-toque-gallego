// js/main.js → Versión FINAL que SÍ funciona en todas las subcategorías (29/12/2025)

class RestaurantApp {
    constructor() {
        this.currentSection = 'inicio';
        this.currentSubsection = null;
        this.contentContainer = document.getElementById('content-container');
        this.breadcrumbNav = document.querySelector('.breadcrumb-nav');
        this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.mobileNav = document.getElementById('mobileNav');
        this.mobileSubcategoryBar = document.getElementById('mobileSubcategoryBar');
        this.subcategoryButtons = document.getElementById('subcategoryButtons');
        this.backToTopBtn = document.getElementById('backToTop');

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadSection('inicio');
        this.updateBreadcrumbs();
        this.setupScrollToTop();
    }

    setupEventListeners() {
        // Un solo listener para TODO el documento
        document.addEventListener('click', (e) => {
            const target = e.target;

            // 1. Navegación principal
            const navBtn = target.closest('[data-section]');
            if (navBtn) {
                e.preventDefault();
                const section = navBtn.dataset.section;
                if (restaurantData.sections[section]) {
                    this.loadSection(section);
                } else if (restaurantData.subsections[section]) {
                    this.loadSubsection(section);
                }
                this.closeMobileMenu();
                return;
            }

            // 2. Subcategorías en escritorio (tarjetas laterales)
            const subCard = target.closest('.subcategory-card[data-category]');
            if (subCard) {
                const category = subCard.dataset.category;
                this.loadSubsection(this.currentSection, category);
                return;
            }

            // 3. Subcategorías en móvil (botones barra inferior)
            const subBtn = target.closest('.subcategory-btn[data-category]');
            if (subBtn) {
                const category = subBtn.dataset.category;
                this.loadSubsection(this.currentSection, category);
                return;
            }

            // 4. Ver carta completa (desde tríptico o inicio)
            const cartaBtn = target.closest('.ver-carta-completa-btn');
            if (cartaBtn) {
                e.preventDefault();
                this.loadCartaCompleta();
                return;
            }

            // 5. Menú hamburguesa móvil
            if (target.closest('#mobileMenuBtn')) {
                this.mobileNav.classList.toggle('active');
                const expanded = this.mobileNav.classList.contains('active');
                this.mobileMenuBtn.setAttribute('aria-expanded', expanded);
            }
        });

        // Formulario reservas vía WhatsApp
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'reservation-form') {
                e.preventDefault();
                const fd = new FormData(e.target);
                const mensaje = `¡Hola! Quiero reservar:\n\nNombre: ${fd.get('name') || 'Cliente'}\nFecha: ${fd.get('date')}\nHora: ${fd.get('time')}\nPersonas: ${fd.get('people')}\nComentarios: ${fd.get('comments') || 'Ninguno'}`;
                window.open(`https://wa.me/34656945489?text=${encodeURIComponent(mensaje)}`, '_blank');
                alert('Abriendo WhatsApp...');
                e.target.reset();
            }
        });
    }

    loadCartaCompleta() {
        this.currentSection = 'carta-completa';
        this.currentSubsection = null;
        this.updateActiveStates('carta');
        this.updateBreadcrumbs('Carta Completa');
        this.hideMobileSubcategoryBar();

        this.contentContainer.innerHTML = '<div class="loading">Cargando carta completa...</div>';
        this.contentContainer.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
            window.renderCartaPDF(this.contentContainer);
        }, 300);
    }

    loadSection(section) {
        const data = restaurantData.sections[section] || restaurantData.sections.inicio;
        this.currentSection = section;
        this.currentSubsection = null;
        this.updateActiveStates(section);
        this.updateBreadcrumbs(data.title);
        this.hideMobileSubcategoryBar();
        this.contentContainer.innerHTML = `
            <div class="fade-in">
                <h2 class="section-title">${data.title}</h2>
                ${data.description ? `<p class="section-description">${data.description}</p>` : ''}
                ${data.content || ''}
            </div>
        `;
    }

    loadSubsection(section, subsection = null) {
        this.currentSection = section;
        const data = restaurantData.subsections[section];
        if (!data) return this.loadSection('inicio');

        // Si es menús (tiene .content)
        if (data.content) {
            this.currentSubsection = null;
            this.updateActiveStates(section);
            this.updateBreadcrumbs(data.title);
            this.hideMobileSubcategoryBar();
            this.contentContainer.innerHTML = `
                <div class="fade-in">
                    <h2 class="section-title">${data.title}</h2>
                    ${data.description ? `<p class="section-description">${data.description}</p>` : ''}
                    ${data.content}
                </div>
            `;
            return;
        }

        // Secciones con categorías (desayunos y carta)
        if (!subsection) subsection = Object.keys(data.categories)[0];
        this.currentSubsection = subsection;
        this.updateActiveStates(section);
        this.updateBreadcrumbs(`${data.title} / ${data.categories[subsection].title}`);

        const category = data.categories[subsection];

        if (window.innerWidth <= 768) {
            // MÓVIL: solo platos + barra inferior
            this.renderMobile(category);
            this.setupMobileSubcategoryBar(data);
        } else {
            // ESCRITORIO: sidebar + platos
            this.renderDesktop(data, subsection);
        }

        this.contentContainer.scrollIntoView({ behavior: 'smooth' });
    }

    renderDesktop(data, activeKey) {
        const sidebar = Object.entries(data.categories).map(([key, cat]) => `
            <div class="subcategory-card ${key === activeKey ? 'active' : ''}" data-category="${key}">
                <h4>${cat.title}</h4>
                <p>${cat.description || ''}</p>
            </div>
        `).join('');

        const category = data.categories[activeKey];
        const dishes = category.dishes.map(d => `
            <div class="dish-card">
                <div class="dish-content">
                    <div class="dish-image">${d.image || ''}</div>
                    <div class="dish-info">
                        <h3 class="dish-name">${d.name}</h3>
                        <p class="dish-description">${d.description || ''}</p>
                        <div class="dish-allergens">
                            ${(d.allergens || []).map(a => `<span class="allergen-tag">${a}</span>`).join('')}
                        </div>
                    </div>
                    <div class="dish-price-column">
                        <div class="dish-price">${d.price}</div>
                    </div>
                </div>
            </div>
        `).join('');

        this.contentContainer.innerHTML = `
            <div class="fade-in">
                <h2 class="section-title">${category.title}</h2>
                <p class="section-description">${category.description || ''}</p>
                <div class="content-layout">
                    <div class="content-sidebar">
                        <div class="subcategory-cards">${sidebar}</div>
                    </div>
                    <div class="content-main">
                        <div class="dishes-container">${dishes}</div>
                    </div>
                </div>
            </div>
        `;
    }

    renderMobile(category) {
        const dishes = category.dishes.map(d => `
            <div class="dish-card">
                <div class="dish-content">
                    <div class="dish-image">${d.image || ''}</div>
                    <div class="dish-info">
                        <h3 class="dish-name">${d.name}</h3>
                        <p class="dish-description">${d.description || ''}</p>
                        <div class="dish-allergens">
                            ${(d.allergens || []).map(a => `<span class="allergen-tag">${a}</span>`).join('')}
                        </div>
                    </div>
                    <div class="dish-price-column">
                        <div class="dish-price">${d.price}</div>
                    </div>
                </div>
            </div>
        `).join('');

        this.contentContainer.innerHTML = `
            <div class="fade-in">
                <h2 class="section-title">${category.title}</h2>
                <p class="section-description">${category.description || ''}</p>
                <div class="dishes-container">${dishes}</div>
            </div>
        `;
    }

    setupMobileSubcategoryBar(data) {
        if (window.innerWidth > 768) {
            this.hideMobileSubcategoryBar();
            return;
        }

        const buttons = Object.entries(data.categories).map(([key, cat]) => `
            <button class="subcategory-btn ${key === this.currentSubsection ? 'active' : ''}" data-category="${key}">
                ${cat.title}
            </button>
        `).join('');

        this.subcategoryButtons.innerHTML = buttons;
        this.mobileSubcategoryBar.classList.add('active');
        document.body.classList.add('has-subcategory');
    }

    hideMobileSubcategoryBar() {
        this.mobileSubcategoryBar.classList.remove('active');
        this.subcategoryButtons.innerHTML = '';
        document.body.classList.remove('has-subcategory');
    }

    updateActiveStates(section) {
        document.querySelectorAll('[data-section]').forEach(el => {
            el.classList.toggle('active', el.dataset.section === section);
        });
    }

    updateBreadcrumbs(title = null) {
        if (!this.breadcrumbNav) return;

        let currentText = 'Inicio';
        if (this.currentSection !== 'inicio') {
            if (this.currentSubsection) {
                const data = restaurantData.subsections[this.currentSection];
                currentText = `${data.title} / ${data.categories[this.currentSubsection].title}`;
            } else if (title) {
                currentText = title;
            } else {
                currentText = restaurantData.sections[this.currentSection]?.title || this.currentSection;
            }
        }

        this.breadcrumbNav.innerHTML = `
            <a href="#" class="breadcrumb-home" data-section="inicio"><i class="fas fa-home"></i> Inicio</a>
            <span class="breadcrumb-separator"> / </span>
            <span class="breadcrumb-current">${currentText}</span>
        `;
    }

    closeMobileMenu() {
        this.mobileNav.classList.remove('active');
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }

    setupScrollToTop() {
        window.addEventListener('scroll', () => {
            this.backToTopBtn.classList.toggle('visible', window.scrollY > 300);
        });
        this.backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Iniciar la app
document.addEventListener('DOMContentLoaded', () => {
    new RestaurantApp();
});