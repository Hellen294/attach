document.getElementById('send-whatsapp').addEventListener('click', function() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const projectDetails = document.getElementById('project-details').value;

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

document.getElementById('send-email').addEventListener('click', function() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const projectDetails = document.getElementById('project-details').value;

    // Construct the email content
    const subject = encodeURIComponent("MathCloud-Tech. Subscription");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nProject Details: ${projectDetails}\n\nPlease remember that payment must be made before the commencement of work. Thank you!`);

    // Redirect to email client with the message
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
