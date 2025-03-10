// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add the current year to the footer copyright
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Kaan Dogan. All rights reserved.`;

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        updateTheme(newTheme);
    });

    function updateThemeIcon(theme) {
        const themeIcon = themeToggle.querySelector('i');
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Update the theme toggle functionality
    function updateTheme(theme) {
        document.documentElement.style.setProperty('--transition-duration', '0.5s');
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        const themeIcon = document.querySelector('.theme-toggle i');
        themeIcon.style.transform = 'rotate(360deg)';
        
        // Update icon
        setTimeout(() => {
            themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            themeIcon.style.transform = 'rotate(0deg)';
        }, 200);
    }
}); 