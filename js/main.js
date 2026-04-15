document.addEventListener('DOMContentLoaded', () => {
    
    // CONFIGURACIÓN DEL OBSERVALDOR DE INTERSECCIÓN
    const observerOptions = {
        root: null, // Usa el viewport del navegador
        threshold: 0.15, // Se activa cuando el 15% del elemento es visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento entra en la vista del usuario
            if (entry.isIntersecting) {
                // Añadimos la clase 'visible' que activa el CSS de Fade In
                entry.target.classList.add('visible');
                
                // Una vez animado, dejamos de observarlo para mejorar el rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // APLICAR EL OBSERVADOR A TODOS LOS ELEMENTOS CON CLASE .fade-in
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // LOG DE TECH LEAD (Opcional - para pruebas)
    console.log("🚀 Portafolio de Gustavo cargado con éxito.");
});