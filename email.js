// Initialize EmailJS with your User ID (get it from EmailJS)
emailjs.init("YOUR_USER_ID");

function sendEmail() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const projectDetails = document.getElementById('project-details').value;

    // EmailJS template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        phone_number: phoneNumber,
        project_details: projectDetails,
    };

    // Send email
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then((response) => {
            alert('Email sent successfully!');
        }, (error) => {
            alert('Failed to send email. Please try again later.');
            console.error('Error sending email:', error);
        });
}

// Attach event listener to email button
document.getElementById('send-email').addEventListener('click', sendEmail);
