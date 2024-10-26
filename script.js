let currentLang = 'es';

function loadTranslations() {
    fetch('translations.json')
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

// Cargar las traducciones al iniciar
document.addEventListener("DOMContentLoaded", loadTranslations);
