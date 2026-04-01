/**
 * Niyonkuru Thierry - Portfolio Main JavaScript
 * Handles Theme Toggling, Smooth Scrolling, Project Filtering, Form Validation, and AI Toast Recommendations.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Theme Toggle (Dark/Light Mode)
       ========================================================================== */
    const themeBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const iconSun = document.querySelector('.icon-sun');
    const iconMoon = document.querySelector('.icon-moon');

    // Check local storage for theme preference, default is dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            iconSun.style.display = 'block';
            iconMoon.style.display = 'none';
        } else {
            iconSun.style.display = 'none';
            iconMoon.style.display = 'block';
        }
    }

    /* ==========================================================================
       2. Mobile Navigation Toggle
       ========================================================================== */
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('open');
        mainNav.classList.toggle('nav-open');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(mainNav.classList.contains('nav-open')) {
                mobileMenuBtn.classList.remove('open');
                mainNav.classList.remove('nav-open');
            }
        });
    });

    /* ==========================================================================
       3. Smooth Scrolling & Active State Update
       ========================================================================== */
    // Smooth scrolling is handled by CSS scroll-behavior: smooth,
    // but we need JS to update the active link on scroll
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       4. Project Filtering
       ========================================================================== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');

            const filterValue = e.target.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                    // Optional: Add a subtle fade-in animation
                    card.style.opacity = '0';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ==========================================================================
       5. Contact Form Validation (Client-Side)
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic Validation Check
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                formStatus.textContent = 'Please fill out all fields.';
                formStatus.className = 'form-status error';
                return;
            }

            // Simulate form submission (e.g., via EmailJS or custom backend later)
            formStatus.textContent = 'Sending message...';
            formStatus.className = 'form-status';

            setTimeout(() => {
                formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
                formStatus.className = 'form-status success';
                contactForm.reset();

                // Clear message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = 'form-status';
                }, 5000);
            }, 1500);
        });
    }

    /* ==========================================================================
       6. Bonus AI Feature: Skill Recommendation Toast
       ========================================================================== */
    const skillPills = document.querySelectorAll('.skill-pill');
    const toastContainer = document.getElementById('ai-toast');
    const toastMessage = document.getElementById('toast-message');
    const toastLink = document.getElementById('toast-link');
    const toastClose = document.querySelector('.toast-close');

    // Mock Data representing an AI mapping between Skills and Content
    const aiRecommendations = {
        'cybersecurity': {
            msg: "AI Match: Since you're interested in Cybersecurity, check out my thoughts on securing IoT devices in mechanical systems.",
            linkText: "Read Blog Post",
            url: "blog.html#cyber-iot"
        },
        'forex': {
            msg: "AI Match: Interest in Forex detected. See my custom Dashboard project built with JS and public market APIs.",
            linkText: "View Project",
            url: "#projects"
        },
        'maintenance': {
            msg: "AI Match: Mechanical Maintenance is my strong suit. See my final year project on pedal-powered water pumps.",
            linkText: "View Project",
            url: "#projects"
        },
        'german': {
            msg: "AI Match: Sprechen Sie Deutsch? Check out my bilingual technical documentation on GitHub.",
            linkText: "View GitHub",
            url: "#"
        },
        'default': {
            msg: "AI Match: That's a great skill! Check out my overall project portfolio to see how I apply it.",
            linkText: "View Portfolio",
            url: "#projects"
        }
    };

    let toastTimeout;

    function showToast(skillId) {
        // Clear existing timeout if a new toast is triggered quickly
        if(toastTimeout) clearTimeout(toastTimeout);

        const rec = aiRecommendations[skillId] || aiRecommendations['default'];

        toastMessage.textContent = rec.msg;
        toastLink.textContent = rec.linkText;
        toastLink.href = rec.url;

        // Ensure class doesn't have hidden, add visible state logic
        toastContainer.classList.remove('hidden');

        // Auto hide after 8 seconds
        toastTimeout = setTimeout(() => {
            toastContainer.classList.add('hidden');
        }, 8000);
    }

    // Attach click listeners to all skill pills
    skillPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            const skillId = e.target.getAttribute('data-skill');

            // Add visual feedback to clicked pill
            skillPills.forEach(p => p.style.backgroundColor = ''); // Reset others
            e.target.style.backgroundColor = 'rgba(14, 165, 233, 0.2)'; // Highlight current

            showToast(skillId);
        });
    });

    // Close toast manually
    toastClose.addEventListener('click', () => {
        toastContainer.classList.add('hidden');
        if(toastTimeout) clearTimeout(toastTimeout);
    });

});
