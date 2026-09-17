function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("active");
}

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Project details object
const projectDetails = {
    stackbox: {
        title: "Stackbox - Warehouse Management",
        description: "An automation framework for warehouse management to optimize logistics operations efficiently."
    },
    travel: {
        title: "Customer Travel Solutions",
        description: "Developed automation tests for a travel booking application to improve the user experience."
    },
    tractor: {
        title: "Tractor Supply Chain",
        description: "Automated end-to-end testing for an agricultural supply chain management system."
    },
    retail: {
        title: "Total Energies Retail Apps",
        description: "Ensured quality assurance for Total Energies' retail applications through automated test suites."
    }
};

// Function to show popup with project details
function showPopup(projectKey) {
    const popupOverlay = document.createElement("div");
    popupOverlay.classList.add("popup-overlay");
    popupOverlay.addEventListener("click", closePopup);

    const popupCard = document.createElement("div");
    popupCard.classList.add("popup-card");

    const popupTitle = document.createElement("h2");
    popupTitle.innerText = projectDetails[projectKey].title;

    const popupDescription = document.createElement("p");
    popupDescription.innerText = projectDetails[projectKey].description;

    popupCard.appendChild(popupTitle);
    popupCard.appendChild(popupDescription);

    document.body.appendChild(popupOverlay);
    document.body.appendChild(popupCard);

    popupOverlay.style.display = "block";
    popupCard.style.display = "block";
}

// Function to close the popup when clicking outside
function closePopup(event) {
    if (event.target.classList.contains("popup-overlay")) {
        document.querySelector(".popup-overlay")?.remove();
        document.querySelector(".popup-card")?.remove();
    }
}

// Close popup on ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelector(".popup-overlay")?.remove();
        document.querySelector(".popup-card")?.remove();
    }
});

// Typewriter effect for hero subtitle
const heroText = "Test Automation Engineer | Java | Selenium | Appium | Playwright";
let index = 0;
const heroElement = document.querySelector(".hero p");

function typeEffect() {
    if (index < heroText.length) {
        heroElement.textContent += heroText.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(skill => {
        const targetWidth = skill.getAttribute('data-skill');
        skill.style.width = '0%';

        setTimeout(() => {
            skill.style.transition = 'width 1.5s ease-in-out';
            skill.style.width = targetWidth;
        }, 300);
    });
});
heroElement.textContent = "";
typeEffect();



