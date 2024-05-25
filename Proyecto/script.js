document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('.nav__link');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition - 80, // Offset for fixed nav
            behavior: 'smooth'
        });
    }

    // Form validation
    const form = document.querySelector('.contact__form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || name.length < 6) {
            alert('Por favor ingrese un nombre válido (al menos 6 caracteres).');
            event.preventDefault();
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert('Por favor ingrese un correo electrónico válido.');
            event.preventDefault();
        }

        if (!message) {
            alert('Por favor ingrese un mensaje.');
            event.preventDefault();
        }
    });
});
