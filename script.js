// Function to toggle the navigation menu in mobile view
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}

// Typing effect settings
const text = "Information Technology Enthusiast";
const speed = 100;
const delayBeforeRestart = 500;
let index = 0;

// Function to create a typing effect
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(() => {
            index = 0;
            document.getElementById("typing").innerHTML = ""; 
            typeEffect();
        }, delayBeforeRestart);
    }
}

// Function to add fade-in animation when opening a section
function animateSection(section) {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    setTimeout(() => {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
        section.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
    }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();

    const navLinks = document.querySelectorAll(".nav-list a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href");
            const section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: "smooth" });
            animateSection(section);
        });
    });
});

// Initialize Swiper for the project slider
var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
    },
    effect: "coverflow",
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    }
});

// Show projects section when the button is clicked
document.getElementById("project-btn").addEventListener("click", function() {
    const projectsSection = document.getElementById("projects");
    projectsSection.style.display = "flex";
    animateSection(projectsSection); 
});
