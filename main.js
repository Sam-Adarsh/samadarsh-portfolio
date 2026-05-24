document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    document.body.classList.add('js-ready');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const siteHeader = document.querySelector('.site-header');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.desktop-nav');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const menuActions = document.querySelectorAll('.desktop-nav .nav-link, .feature-pill');
    const sections = document.querySelectorAll('section[id]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initStarfield = () => {
        const canvas = document.getElementById('starfield');
        if (!canvas) return null;

        const ctx = canvas.getContext('2d');
        if (!ctx) return null;

        let width = 0;
        let height = 0;
        let stars = [];
        let shootingStars = [];
        let animationId = 0;
        let lastShootingStar = 0;

        const createStars = () => {
            const count = Math.min(320, Math.floor((width * height) / 6500));
            stars = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.3 + 0.25,
                alpha: Math.random() * 0.45 + 0.25,
                twinkleSpeed: Math.random() * 0.0015 + 0.0008,
                twinklePhase: Math.random() * Math.PI * 2,
            }));
        };

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            createStars();
            shootingStars = [];
        };

        const spawnShootingStar = (time) => {
            if (time - lastShootingStar < 4200 || Math.random() > 0.015) return;

            lastShootingStar = time;
            shootingStars.push({
                x: Math.random() * width * 0.8,
                y: Math.random() * height * 0.45,
                length: Math.random() * 90 + 50,
                speed: Math.random() * 7 + 5,
                angle: Math.PI / 4,
                opacity: 1,
            });
        };

        const drawStatic = () => {
            ctx.clearRect(0, 0, width, height);
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(240, 243, 255, ${star.alpha})`;
                ctx.fill();
            });
        };

        const draw = (time) => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
                const twinkle = 0.55 + 0.45 * Math.sin(time * star.twinkleSpeed + star.twinklePhase);
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(240, 243, 255, ${star.alpha * twinkle})`;
                ctx.fill();
            });

            if (!reducedMotion) {
                spawnShootingStar(time);
            }

            shootingStars = shootingStars.filter((star) => star.opacity > 0.05);
            shootingStars.forEach((star) => {
                const tailX = star.x - Math.cos(star.angle) * star.length;
                const tailY = star.y - Math.sin(star.angle) * star.length;
                const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
                gradient.addColorStop(0, 'rgba(34, 211, 238, 0)');
                gradient.addColorStop(1, `rgba(34, 211, 238, ${star.opacity})`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.4;
                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(star.x, star.y);
                ctx.stroke();

                star.x += Math.cos(star.angle) * star.speed;
                star.y += Math.sin(star.angle) * star.speed;
                star.opacity -= 0.018;
            });

            animationId = requestAnimationFrame(draw);
        };

        resize();
        window.addEventListener('resize', resize);

        if (reducedMotion) {
            const onResize = () => {
                resize();
                drawStatic();
            };

            window.addEventListener('resize', onResize);
            drawStatic();
            return () => window.removeEventListener('resize', onResize);
        }

        animationId = requestAnimationFrame(draw);
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    };

    const cleanupStarfield = initStarfield();

    const closeMenu = () => {
        if (!menuBtn || !nav || !siteHeader) return;
        nav.classList.remove('open');
        siteHeader.classList.remove('is-open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
    };

    if (menuBtn && nav && siteHeader) {
        menuBtn.addEventListener('click', () => {
            const willOpen = !nav.classList.contains('open');
            nav.classList.toggle('open', willOpen);
            siteHeader.classList.toggle('is-open', willOpen);
            menuBtn.classList.toggle('active', willOpen);
            menuBtn.setAttribute('aria-expanded', String(willOpen));
        });

        menuActions.forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });

        document.addEventListener('click', (event) => {
            if (!nav.classList.contains('open')) return;
            if (siteHeader.contains(event.target)) return;
            closeMenu();
        });
    }

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        });
    }, {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
    });

    sections.forEach((section) => {
        scrollSpyObserver.observe(section);
    });

    if (reducedMotion) {
        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            element.classList.add('is-visible');
        });
        return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
    });

    document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
        revealObserver.observe(element);
    });

    window.addEventListener('beforeunload', () => {
        if (typeof cleanupStarfield === 'function') {
            cleanupStarfield();
        }
    });
});
