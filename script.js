// script.js

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Hamburger Menu Toggle for Mobile
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinksContainer = document.getElementById('nav-links');

hamburgerIcon.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
});

// Contact Form Validation
const form = document.getElementById('contact-form');
const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        feedbackDiv.textContent = 'Please fill out all fields.';
    } else {
        feedbackDiv.textContent = 'Thank you for your message!';
        feedbackDiv.style.color = 'green';
        form.reset(); // Reset form after submission
    }
});
