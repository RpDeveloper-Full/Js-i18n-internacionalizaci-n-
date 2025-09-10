// Diccionario de traducciones
const translations = {
  es: {
    title: "Bienvenido",
    home: "Inicio",
    about: "Acerca de",
    contact: "Contacto",
    description: "Esta es una página de ejemplo con soporte multilenguaje.",
    footer: "Todos los derechos reservados."
  },
  en: {
    title: "Welcome",
    home: "Home",
    about: "About",
    contact: "Contact",
    description: "This is a sample page with multilingual support.",
    footer: "All rights reserved."
  }
};

// Función para cambiar idioma
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
  // Cambiar atributo lang en <html>
  document.documentElement.lang = lang;
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  const langSwitcher = document.getElementById("lang-switcher");
  
  // Idioma por defecto
  changeLanguage(langSwitcher.value);

  // Evento al cambiar idioma
  langSwitcher.addEventListener("change", (e) => {
    changeLanguage(e.target.value);
  });
}); 