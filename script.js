document.addEventListener('DOMContentLoaded', () => {
    // Example animation on scroll
    const elements = document.querySelectorAll('.animate__animated');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Contact form submission using EmailJS
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_eyit9e9', 'template_7gfx3ty', contactForm)
            .then(() => {
                alert('Thank you for contacting us. We will get back to you soon!');
                contactForm.reset();
            }, (error) => {
                console.error('Failed to send message:', error);
                alert('Failed to send your message. Please try again later.');
            });
    });
});
