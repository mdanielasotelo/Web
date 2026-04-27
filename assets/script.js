document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const menuIcon = menuToggle.querySelector('i');

    // Abre o cierra el menú al tocar la hamburguesa
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Cambia el icono de barras a una "X"
        if (navMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Cierra el menú cuando se hace clic en un enlace (ideal para one-page)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        });
    });
});