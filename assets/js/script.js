let currentLang = 'es';

function loadTranslations() {
    fetch('assets/text/translations.json')
        .then(response => response.json())
        .then(data => {
            const elements = document.querySelectorAll('[data-key]');
            elements.forEach(el => {
                const key = el.getAttribute('data-key');
                el.textContent = data[currentLang][key];
            });
        });
}

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    loadTranslations();
}

// Función para cambiar el tema
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark');

    // Cambiar a tema claro si actualmente está en oscuro
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Función para mostrar/ocultar el formulario con animación
function toggleForm() {
    let form = document.getElementById("contactForm");

    // Si el formulario está oculto, lo mostramos con la animación
    if (form.style.display === "none" || !form.style.display) {
        form.style.display = "block";
        setTimeout(() => form.classList.add("show"), 10); // Añadir la clase para animación
        form.scrollIntoView({ behavior: "smooth" });
    } else {
        form.classList.remove("show"); // Remover la clase para la animación
        setTimeout(() => form.style.display = "none", 500); // Esperar a que termine la animación y luego ocultarlo
    }
}

// Cargar el tema guardado al cargar la página
window.addEventListener("load", function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        // Si no hay tema guardado, establecer tema claro por defecto
        document.body.classList.add('light');
        localStorage.setItem('theme', 'dark');
    }
});

// Cargar las traducciones al iniciar
document.addEventListener("DOMContentLoaded", loadTranslations);
