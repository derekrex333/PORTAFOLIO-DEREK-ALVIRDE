// Toggle de tema claro/oscuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const toggleSlider = document.querySelector('.toggle-slider');

// Cargar tema guardado
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

const observer = new IntersectionObserver(function(entries) {
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

certItems.forEach(item => {
    observer.observe(item);
});

// Scroll suave para navegación
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});