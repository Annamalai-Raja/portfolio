function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("active");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
