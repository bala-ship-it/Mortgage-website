document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form[name='contact']");
    const responseDiv = document.createElement("div");
    responseDiv.style.marginTop = "20px";
    responseDiv.style.textAlign = "center";
    form.appendChild(responseDiv);

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Show a loading message
        responseDiv.textContent = "Sending...";
        responseDiv.style.color = "blue";

        // Create FormData object
        const formData = new FormData(form);

        // Send data to Formspree
        fetch("https://formspree.io/f/xbljnzoa", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    // Success feedback
                    responseDiv.textContent = "Thank you! Your message has been sent successfully.";
                    responseDiv.style.color = "green";
                    form.reset(); // Reset the form
                } else {
                    // Error feedback
                    responseDiv.textContent = "Oops! Something went wrong. Please try again later.";
                    responseDiv.style.color = "red";
                }
            })
            .catch((error) => {
                console.error("Formspree Error:", error);
                responseDiv.textContent = "An unexpected error occurred. Please try again later.";
                responseDiv.style.color = "red";
            });
    });
});
