document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Animate stats on scroll
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const animateStats = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        const statsSection = document.querySelector('.stats');

        if (statsSection) {
            const statsTop = statsSection.getBoundingClientRect().top;

            if (statsTop < triggerBottom && !hasAnimated) {
                stats.forEach(stat => {
                    const value = stat.innerText;
                    // Simplify: Just a placeholder animation logic
                    // In a real app, use a counter library or logic
                    console.log('Animating stat:', value);
                });
                hasAnimated = true;
            }
        }
    };

    window.addEventListener('scroll', animateStats);

    // Simple fade-in animation for scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in class to major sections for observation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
});
