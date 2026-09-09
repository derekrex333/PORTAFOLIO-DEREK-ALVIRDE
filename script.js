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

// Año dinámico footer (reemplaza 2026 hardcodeado)
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Toggle idioma ES/EN — traducción real visible
const translations = {
    es: {
        nav_inicio: "INICIO",
        nav_sobre: "SOBRE MI",
        nav_proyectos: "PROYECTOS",
        nav_cursos: "CURSOS",
        nav_contacto: "CONTÁCTAME",
        hero_intro: "Data Science Student specializing in Data Analysis,\nStatistical Modeling and Machine Learning.",
        hero_cta: "Contáctame",
        sobre_title: "SOBRE MI",
        sobre_p1: "De diagnosticar motores a diagnosticar modelos. Soy técnico en autotrónica y estudiante de Ingeniería en Ciencia de Datos en la UVM, con una segunda formación en curso en Ingeniería en IA (ESCOM-IPN). Mi manera de trabajar es simple: antes de usar una librería, la construyo desde cero para entender qué hay detrás — así pasé de un algoritmo de cierre convexo concurrente a un clasificador cuántico y a un modelo de mantenimiento predictivo entrenado con mi propio código de machine learning.",
        sobre_p2: "Resuelvo problemas con mi core stack — Python, SQL y Machine Learning (Pandas/NumPy) — y visualizo en Tableau/Power BI. Mi sello es demostrarlo: MotorSense desde cero con paridad 0.94 vs sklearn y recall 15%→85%. Busco prácticas donde diagnosticar modelos genere impacto real, no solo dashboards.",
        stack_title: "Core Stack — con lo que resuelvo el 80% de los problemas",
        stack_also: "También he usado — ver por proyecto",
        stack_note: "Cada uno aparece solo donde el proyecto lo requirió — ver detalle en cada tarjeta.",
        proyectos_title: "Proyectos Destacados",
        proyectos_sub: "Una selección de mis proyectos más representativos — descubre el resto en la galería completa.",
        motorsense_title: "MotorSense — Diagnóstico Predictivo",
        motorsense_human: "Evita paradas de fábrica anticipando fallas de motor antes de que ocurran.",
        motorsense_desc: "Logística desde cero vs sklearn · AI4I 2020 · 10k motores, 3.4% fallas.",
        motorsense_detail_sum: "Detalle técnico",
        motorsense_detail_txt: "Regresión logística con GD y class_weight/SMOTE, StandardScaler solo en train, split estratificado 80/20, RF balanced como baseline (prec 0.885, rec 0.794). Validación sin accuracy. Dataset AI4I 2020 (10k, 3.4% fallas).",
        vqc_title: "Clasificador Cuántico Variacional (VQC)",
        vqc_human: "Experimento: ¿puede un chip cuántico de 2 qubits clasificar datos con fronteras curvas mejor que lo clásico?",
        vqc_desc: "Fronteras no lineales en moons · ~0.80 accuracy (12 params vs 3 de logística)",
        vqc_detail_sum: "Detalle técnico",
        vqc_detail_txt: "Angle encoding Ry(x) + ansatz hardware-efficient (Ry/Rz+CNOT, L=3), gradientes parameter-shift, Adam/SGD. Doble backend NumPy exacto / Q# opcional.",
        ecobalance_title: "Eco-Balance — Prototipo de concepto",
        ecobalance_human: "Prototipo de dashboard que calcula un Índice de Salud del Ecosistema (EHI) para decisiones ambientales.",
        ecobalance_desc: "Live en Render ✓ — Alertas en tiempo real, modelos de biodiversidad y BD integrada.",
        ecobalance_detail_sum: "Detalle técnico",
        ecobalance_detail_txt: "PWA + IA mock EHI, JS + Python, base de datos integrada. Código abierto para iterar. Demo: https://ecobalance-khxn.onrender.com/",
        recesiones_title: "Impacto de Recesiones en Ventas de Automóviles",
        recesiones_human: "¿Cómo afectan las recesiones a lo que compramos? 9 gráficos cuentan la historia 1980-2023.",
        recesiones_desc: "PIB, desempleo y gasto publicitario — caídas y alta volatilidad en recesiones evidencian fuerte correlación con el ciclo económico.",
        cyclistic_title: "Cyclistic — Miembros vs Casuales",
        cyclistic_human: "R + tidyverse para convertir usuarios casuales en miembros anuales.",
        cyclistic_desc: "Bikeshare · Limpieza y visualización en R · Patrones por día/semana y recomendaciones de conversión.",
        mas_title: "MÁS PROYECTOS →",
        mas_desc: "Ver galería completa con todos los proyectos: análisis en R, C++/Qt, toolkits matemáticos y más.",
        mas_btn: "Explorar todos",
        cursos_title: "Cursos y Certificaciones",
        cursos_sub: "Proyectos primero, diplomas después — aquí los 5 más relevantes, el resto en la galería completa (31).",
        ver_todos_title: "Ver Todos los Cursos",
        ver_todos_desc: "Haz clic aquí para visualizar todas mis certificaciones y los PDF",
        contacto_title: "CONTÁCTAME",
        contacto_sub: "¿Hablamos? Respondo en 24h. Formulario activo vía Formspree ✓ — o escríbeme directo.",
        contacto_cv: "📄 Descargar CV",
        contacto_nombre_label: "Nombre",
        contacto_nombre_ph: "Tu nombre",
        contacto_email_ph: "tu@email.com",
        contacto_msg_label: "Mensaje",
        contacto_msg_ph: "Escribe tu mensaje aquí...",
        contacto_btn: "Enviar Mensaje — Respondo en 24h",
        title: "Portafolio Derek A."
    },
    en: {
        nav_inicio: "HOME",
        nav_sobre: "ABOUT",
        nav_proyectos: "PROJECTS",
        nav_cursos: "COURSES",
        nav_contacto: "CONTACT",
        hero_intro: "Data Science Student specializing in Data Analysis,\nStatistical Modeling and Machine Learning.",
        hero_cta: "Contact me",
        sobre_title: "ABOUT ME",
        sobre_p1: "From diagnosing engines to diagnosing models. I'm an Autotronics technician and Data Science Engineering student at UVM, with a second degree in AI Engineering in progress (ESCOM-IPN). My approach is simple: before using a library, I build it from scratch to understand what's underneath — from a concurrent convex-hull algorithm to a quantum classifier and a predictive-maintenance model trained with my own ML code.",
        sobre_p2: "I solve problems with my core stack — Python, SQL and Machine Learning (Pandas/NumPy) — and visualize in Tableau/Power BI. My signature is proof: MotorSense built from scratch with 0.94 parity vs sklearn and recall 15%→85%. I'm looking for internships where diagnosing models creates real impact, not just dashboards.",
        stack_title: "Core Stack — what I use for 80% of problems",
        stack_also: "Also used — see per project",
        stack_note: "Each appears only where the project required it — see card details.",
        proyectos_title: "Featured Projects",
        proyectos_sub: "A selection of my most representative projects — explore the full gallery for more.",
        motorsense_title: "MotorSense — Predictive Diagnostics",
        motorsense_human: "Prevent factory downtime by anticipating engine failures before they happen.",
        motorsense_desc: "Logistics from scratch vs sklearn · AI4I 2020 · 10k engines, 3.4% failures.",
        motorsense_detail_sum: "Technical detail",
        motorsense_detail_txt: "Logistic Regression with GD and class_weight/SMOTE, StandardScaler on train only, stratified 80/20 split, RF balanced as baseline (prec 0.885, rec 0.794). No-accuracy evaluation. AI4I 2020 dataset (10k, 3.4% failures).",
        vqc_title: "Variational Quantum Classifier (VQC)",
        vqc_human: "Experiment: can a 2-qubit quantum chip classify curved-boundary data better than classical?",
        vqc_desc: "Non-linear frontiers on moons · ~0.80 accuracy (12 params vs 3 for logistic)",
        vqc_detail_sum: "Technical detail",
        vqc_detail_txt: "Angle encoding Ry(x) + hardware-efficient ansatz (Ry/Rz+CNOT, L=3), parameter-shift gradients, Adam/SGD. Dual backend: exact NumPy / optional Q#.",
        ecobalance_title: "Eco-Balance — Concept Prototype",
        ecobalance_human: "Dashboard prototype that computes an Ecosystem Health Index (EHI) for environmental decisions.",
        ecobalance_desc: "Live on Render ✓ — Real-time alerts, biodiversity models and integrated DB.",
        ecobalance_detail_sum: "Technical detail",
        ecobalance_detail_txt: "PWA + mock AI EHI, JS + Python, integrated database. Open source to iterate. Demo: https://ecobalance-khxn.onrender.com/",
        recesiones_title: "Recession Impact on Auto Sales",
        recesiones_human: "How do recessions affect what we buy? 9 charts tell the 1980-2023 story.",
        recesiones_desc: "GDP, unemployment and ad spend — drops and high volatility in recessions show strong correlation with the business cycle.",
        cyclistic_title: "Cyclistic — Members vs Casuals",
        cyclistic_human: "R + tidyverse to convert casual riders into annual members.",
        cyclistic_desc: "Bikeshare · Cleaning and visualization in R · Patterns by weekday and conversion recommendations.",
        mas_title: "MORE PROJECTS →",
        mas_desc: "Browse the full gallery: R analyses, C++/Qt, math toolkits and more.",
        mas_btn: "Explore all",
        cursos_title: "Courses & Certifications",
        cursos_sub: "Projects first, diplomas after — here are the 5 most relevant, the rest in the full gallery (31).",
        ver_todos_title: "See All Courses",
        ver_todos_desc: "Click here to view all my certifications and PDFs",
        contacto_title: "CONTACT ME",
        contacto_sub: "Let's talk? I reply within 24h. Form active via Formspree ✓ — or write me directly.",
        contacto_cv: "📄 Download CV",
        contacto_nombre_label: "Name",
        contacto_nombre_ph: "Your name",
        contacto_email_ph: "your@email.com",
        contacto_msg_label: "Message",
        contacto_msg_ph: "Write your message here...",
        contacto_btn: "Send Message — I reply in 24h",
        title: "Derek A. Portfolio"
    }
};

function applyLang(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    const t = translations[lang] || translations.es;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            // Preserve inner HTML for titles with spans? Use textContent for simple, innerHTML for ecobalance_title
            if (key === 'ecobalance_title' && lang === 'es') {
                el.innerHTML = 'Eco-Balance — Prototipo de concepto <span style="font-size:0.75rem; font-weight:600; background:rgba(0,255,135,0.15); border:1px solid #00ff87; padding:0.15rem 0.5rem; border-radius:999px; vertical-align:middle;">repo: GEO_BALANCE</span>';
            } else if (key === 'ecobalance_title' && lang === 'en') {
                el.innerHTML = 'Eco-Balance — Concept Prototype <span style="font-size:0.75rem; font-weight:600; background:rgba(0,255,135,0.15); border:1px solid #00ff87; padding:0.15rem 0.5rem; border-radius:999px; vertical-align:middle;">repo: GEO_BALANCE</span>';
            } else {
                el.textContent = t[key];
            }
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });
    if (t.title) document.title = t.title;
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang.toUpperCase();
}

const langToggle = document.getElementById('langToggle');
if (langToggle) {
    const savedLang = localStorage.getItem('lang') || document.documentElement.lang || 'es';
    applyLang(savedLang);
    langToggle.addEventListener('click', () => {
        const cur = localStorage.getItem('lang') || document.documentElement.lang || 'es';
        const next = cur === 'es' ? 'en' : 'es';
        applyLang(next);
    });
}


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


// Revelado suave de tarjetas de proyecto al hacer scroll
const projectCards = document.querySelectorAll('.project-card');
if ('IntersectionObserver' in window && projectCards.length) {
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    projectCards.forEach(card => {
        card.classList.add('reveal');
        revealObserver.observe(card);
    });
}


// Envío del formulario de contacto sin salir de la página
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    const formStatus = contactForm.querySelector('.form-status');
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando…';
        formStatus.hidden = true;
        formStatus.className = 'form-status';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                contactForm.reset();
                formStatus.textContent = '¡Mensaje enviado! Te responderé pronto.';
                formStatus.classList.add('success');
            } else {
                formStatus.textContent = 'Hubo un problema. Escríbeme a Derekjrex@gmail.com.';
                formStatus.classList.add('error');
            }
        } catch {
            formStatus.textContent = 'Sin conexión. Escríbeme a Derekjrex@gmail.com.';
            formStatus.classList.add('error');
        }

        formStatus.hidden = false;
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    });
}


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