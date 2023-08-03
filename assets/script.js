// Smooth scrolling for the navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerOffset = 50; // Adjust this value based on your header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Form validation for the contact section
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Basic validation
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill in all fields');
    } else {
        // Here you can add code to submit the form data to your desired endpoint or handle it as needed
        alert('Form submitted successfully!');
        contactForm.reset(); // Clear the form after successful submission
    }
});
