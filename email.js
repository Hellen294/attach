// Function to send email
function sendEmail() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const projectDetails = document.getElementById('project-details').value;

    // Construct the email content
    const subject = encodeURIComponent("MathCloud-Tech. Subscription");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nProject Details: ${projectDetails}\n\nPlease remember that payment must be made before the commencement of work. Thank you!`);

    // Debugging output
    console.log(`mailto:${email}?subject=${subject}&body=${body}`);

    // Redirect to email client with the message
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

// Attach event listener to email button
document.getElementById('send-email').addEventListener('click', sendEmail);
