document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const header = document.getElementById('header');
    const faders = document.querySelectorAll('.fade-in');

    // Loader Animation
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Animations
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Parallax Spice Particles (Optional but fun)
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        const value = window.scrollY;
        if (heroContent) {
            heroContent.style.transform = `translateY(${value * 0.2}px)`;
            heroContent.style.opacity = 1 - (value * 0.002);
        }
    });

    // Smooth Scrolling for Mobile
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
});
