// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    // Perform validation and submit data to server
}

// Function to handle mouseover event
function handleMouseOver(event) {
    event.target.style.backgroundColor = 'lightgray';
}

// Function to handle mouseout event
function handleMouseOut(event) {
    event.target.style.backgroundColor = '';
}

// Function to show alert on button click
function showAlert() {
    alert('Button clicked!');
}

// Function to toggle visibility of password field
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function to fetch data from API
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Function to dynamically create elements
function createElements() {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.textContent = 'New div element';
    container.appendChild(newDiv);
}

// Add event listeners
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
document.getElementById('submitForm').addEventListener('submit', handleSubmit);
document.getElementById('button').addEventListener('mouseover', handleMouseOver);
document.getElementById('button').addEventListener('mouseout', handleMouseOut);
document.getElementById('button').addEventListener('click', showAlert);
document.getElementById('showPassword').addEventListener('click', togglePasswordVisibility);

// Call functions
const email = 'example@example.com';
console.log('Email validation result:', validateEmail(email));
fetchData().then(data => console.log('Fetched data:', data));
createElements();
