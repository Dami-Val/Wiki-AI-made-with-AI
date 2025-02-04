document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Form validation
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        if (nameValue === "" || emailValue === "" || messageValue === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (!validateEmail(emailValue)) {
            alert("Por favor, introduce una dirección de correo electrónico válida.");
            return;
        }

        // Simulate form submission (in a real scenario, you would send the data to a server here)
        alert("Formulario enviado con éxito.");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});