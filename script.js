// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Function to toggle light mode
function toggleLightMode() {
    const body = document.body;
    body.classList.remove('dark-mode');
}

// Add event listeners for dark mode and light mode buttons
document.getElementById('darkModeButton').addEventListener('click', toggleDarkMode);
document.getElementById('lightModeButton').addEventListener('click', toggleLightMode);
