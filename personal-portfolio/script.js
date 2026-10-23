// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Display the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Demonstration contact form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (name === "") {
        formStatus.textContent = "Please enter your name.";
        return;
    }

    formStatus.textContent =
        "Thank you, " + name + "! This is a demo form. Your message has not been sent.";

    contactForm.reset();
});