document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.opacity = (section.id === sectionId.replace("#", "")) ? "1" : "0.3";
        });

        navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === sectionId);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href");
            document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
            showSection(sectionId);
        });
    });

    // Show only "About" section by default
    showSection("#about");
});
