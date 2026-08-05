// ===============================
// Navigation Toggle
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// ===============================
// Image Slider
// ===============================

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }

    setTimeout(showSlides, 3000);
}

showSlides();

// Gallery Image Zoom
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        image.classList.toggle("zoom");
    });
});
// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            e.preventDefault();
            alert("Please fill all fields.");
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            e.preventDefault();
            alert("Enter a valid email address.");
            return;
        }

        alert("Form submitted successfully!");
    });
}