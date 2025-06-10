// Navigation mobile et scroll
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Gestion du menu hamburger
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fermer le menu mobile quand on clique sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navigation active selon la section visible (pour la page d'accueil)
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector('.nav-link[href*=' + sectionId + ']');
            
            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }

    // Appliquer seulement sur la page d'accueil
    if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        window.addEventListener('scroll', highlightNavOnScroll);
    }

    // Animation des barres de compétences
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            if (level) {
                bar.style.width = level + '%';
            }
        });
    };

    // Observer pour déclencher l'animation quand les barres sont visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    });

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi de formulaire
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Validation simple
            if (!name || !email || !subject || !message) {
                showMessage('Veuillez remplir tous les champs obligatoires.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showMessage('Veuillez entrer une adresse email valide.', 'error');
                return;
            }

            // Simulation d'envoi réussi
            showMessage('Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.', 'success');
            contactForm.reset();
        });
    }

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Faire défiler vers le message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Masquer le message après 5 secondes pour les messages de succès
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Smooth scroll pour les liens internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation d'apparition au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .soft-skill-card, .info-card, .skills-category, .preview-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialiser l'état des éléments animés
    const initAnimatedElements = () => {
        const elements = document.querySelectorAll('.project-card, .soft-skill-card, .info-card, .skills-category, .preview-card');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });
    };

    initAnimatedElements();
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Gestion des erreurs d'images
    const handleImageErrors = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', function() {
                this.style.backgroundColor = '#f1f5f9';
                this.style.display = 'flex';
                this.style.alignItems = 'center';
                this.style.justifyContent = 'center';
                this.innerHTML = '<span style="color: #64748b;">Image non disponible</span>';
            });
        });
    };

    handleImageErrors();

    // Amélioration de l'accessibilité
    const improveAccessibility = () => {
        // Ajouter des attributs ARIA aux éléments interactifs
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
                button.setAttribute('aria-label', 'Bouton d\'action');
            }
        });

        // Gérer la navigation au clavier
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                // Fermer le menu mobile si ouvert
                if (navMenu && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    };

    improveAccessibility();

    // Gestion de la navbar fixe
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    let heroBottom = 0;
    
    function updateHeroBottom() {
        heroBottom = hero.offsetTop + hero.offsetHeight;
    }

    function updateDropdownDirection() {
        if (window.scrollY > heroBottom) {
            // Navbar est fixée en haut
            dropdownMenu.classList.remove('dropdown-menu-up');
            dropdownMenu.classList.add('dropdown-menu-down');
        } else {
            // Navbar est en bas du hero
            dropdownMenu.classList.remove('dropdown-menu-down');
            dropdownMenu.classList.add('dropdown-menu-up');
        }
    }

    function handleScroll() {
        if (window.scrollY > heroBottom) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
        updateDropdownDirection();
    }

    // Initialisation
    window.addEventListener('load', () => {
        updateHeroBottom();
        updateDropdownDirection();
    });
    window.addEventListener('resize', updateHeroBottom);
    window.addEventListener('scroll', handleScroll);

    // Console log pour confirmer que le script est chargé
    console.log('Portfolio JavaScript chargé avec succès !');
});

// Fonction utilitaire pour débouncer les événements
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimisation des performances pour le scroll
const optimizedScrollHandler = debounce(() => {
    // Logique de scroll optimisée
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);