function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("active");
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        document.getElementById("nav-links").classList.remove("active"); // Close menu after click
    });
});

// Project details
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

// Show popup
function showPopup(projectKey) {
    if (document.querySelector(".popup-overlay")) return; // Prevent multiple popups

    const popupOverlay = document.createElement("div");
    popupOverlay.classList.add("popup-overlay");
    popupOverlay.addEventListener("click", closePopup);

    const popupCard = document.createElement("div");
    popupCard.classList.add("popup-card");

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("popup-close");
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", closePopup);

    const popupTitle = document.createElement("h2");
    popupTitle.innerText = projectDetails[projectKey].title;

    const popupDescription = document.createElement("p");
    popupDescription.innerText = projectDetails[projectKey].description;

    popupCard.appendChild(closeBtn);
    popupCard.appendChild(popupTitle);
    popupCard.appendChild(popupDescription);

    document.body.appendChild(popupOverlay);
    document.body.appendChild(popupCard);
}

// Close popup
function closePopup() {
    document.querySelector(".popup-overlay")?.remove();
    document.querySelector(".popup-card")?.remove();
}

// Close popup on ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closePopup();
    }
});

// Typewriter effect
window.addEventListener('DOMContentLoaded', () => {
    const heroText = "Test Automation Engineer | Java | Selenium | Appium | Playwright";
    let index = 0;
    const heroElement = document.querySelector(".hero p");

    heroElement.textContent = "";

    function typeEffect() {
        if (index < heroText.length) {
            heroElement.textContent += heroText.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect();

    // Animate skills
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
