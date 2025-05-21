// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeSwitch');
    const htmlElement = document.documentElement;
    
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        if (darkModeToggle) darkModeToggle.checked = true;
    }
    
    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                htmlElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                htmlElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Detect system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (savedTheme === 'system' || !savedTheme) {
        if (prefersDarkScheme.matches) {
            htmlElement.setAttribute('data-theme', 'dark');
            if (darkModeToggle) darkModeToggle.checked = true;
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            if (darkModeToggle) darkModeToggle.checked = false;
        }
    }
    
    // Listen for system preference changes
    prefersDarkScheme.addEventListener('change', e => {
        const newTheme = e.matches ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        if (darkModeToggle) darkModeToggle.checked = e.matches;
        localStorage.setItem('theme', newTheme);
    });
});