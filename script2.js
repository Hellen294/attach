document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value; // Changed variable name to 'name'
    const email = document.getElementById('email').value; // Changed variable name to 'email'
    const phoneNumber = document.getElementById('phone-number').value; // Changed variable name to 'phoneNumber'
    const projectDetails = document.getElementById('project-details').value; // Changed variable name to 'projectDetails'

    // Construct the WhatsApp message
    const message = `*MathCloud-Tech. Subscription*\n\n` +
                    `*Name:* ${name}\n` +
                    `*Email:* ${email}\n` +
                    `*Phone Number:* ${phoneNumber}\n` +
                    `*Project Details:* ${projectDetails}\n` +
                    `Please remember that payment must be made before the commencement of work. Thank you!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Redirect to WhatsApp with the message
    window.location.href = `https://wa.me/+2348102341648?text=${encodedMessage}`;
});
