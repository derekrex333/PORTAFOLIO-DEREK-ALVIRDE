// Toggle de tema claro/oscuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const toggleSlider = document.querySelector('.toggle-slider');

const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.remove('light', 'dark');
body.classList.add(savedTheme);
toggleSlider.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

function toggleTheme() {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        toggleSlider.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        toggleSlider.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('click', toggleTheme);


// Animación de entrada para los certificados
const certItems = document.querySelectorAll('.cert-item');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
            }, index * 150);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

certItems.forEach(item => observer.observe(item));


// Scroll suave para navegación
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});


//Neural Network Background 
(function () {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const COUNT = 65;
    const MAX_DIST = 130;
    const COLOR = '0,255,135';
    const tiers = [
        { r: 1.5, weight: 0.55, alpha: 0.35, speed: 0.50 },
        { r: 3.2, weight: 0.35, alpha: 0.55, speed: 0.30 },
        { r: 5.5, weight: 0.10, alpha: 0.75, speed: 0.15 }
    ];

    function pickTier() {
        const rand = Math.random();
        if (rand < tiers[0].weight) return tiers[0];
        if (rand < tiers[0].weight + tiers[1].weight) return tiers[1];
        return tiers[2];
    }

    let particles = [];

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    function initParticles() {
        particles = Array.from({ length: COUNT }, () => {
            const t = pickTier();
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * t.speed,
                vy: (Math.random() - 0.5) * t.speed,
                r: t.r,
                alpha: t.alpha
            };
        });
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Conexiones
        for (let i = 0; i < COUNT; i++) {
            const p = particles[i];
            for (let j = i + 1; j < COUNT; j++) {
                const q = particles[j];
                const dx = p.x - q.x;
                const dy = p.y - q.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    ctx.strokeStyle = `rgba(${COLOR},${(1 - dist / MAX_DIST) * 0.15})`;
                    ctx.lineWidth = (p.r + q.r) / 14;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.stroke();
                }
            }
        }
        // Nodos
        for (const p of particles) {
            if (p.r > 4) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${COLOR},0.06)`;
                ctx.fill();
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${COLOR},${p.alpha})`;
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        }
        requestAnimationFrame(draw);
    }
    resize();
    initParticles();
    draw();

    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });
})();