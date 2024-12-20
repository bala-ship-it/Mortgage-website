// Initialize EmailJS with your Public Key
emailjs.init("fyRrgXBLB1OSnMGLK");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form[name='contact']");
    const responseDiv = document.createElement("div");
    responseDiv.style.marginTop = "20px";
    responseDiv.style.textAlign = "center";
    form.appendChild(responseDiv);

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Send the form data using EmailJS
        emailjs
            .send("officialbalaji98", "template_qwh41uq", formData) // Replace with your Service ID and Template ID
            .then(() => {
                // Success feedback
                responseDiv.textContent = "Thank you! Your message has been sent successfully.";
                responseDiv.style.color = "green";
                form.reset(); // Reset the form
            })
            .catch((error) => {
                // Error feedback
                console.error("EmailJS Error: ", error);
                responseDiv.textContent = "Oops! Something went wrong. Please try again later.";
                responseDiv.style.color = "red";
            });
    });
});
