document.addEventListener('DOMContentLoaded', () => {
    // Hide loader after 4 seconds
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 300); // Match with CSS transition duration
    }, 4000);

    // Toggle dark/light mode
    const toggleButton = document.getElementById('toggle-theme');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleButton.querySelector('.slider').style.transform = isDarkMode ? 'translateX(26px)' : 'translateX(0)';
    });
});
