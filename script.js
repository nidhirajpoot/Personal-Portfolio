// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    alert("Thank you for contacting me. I will get back to you soon!");
    
    // Clear form
    document.getElementById('contact-form').reset();
});
