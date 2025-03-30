document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section-content");
    const navLinks = document.querySelectorAll("nav ul li a");

    function showSection(sectionId) {
        sections.forEach(section => {
            if ("#" + section.id === sectionId) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        });

        // Highlight active menu item
        navLinks.forEach(link => {
            if (link.getAttribute("href") === sectionId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href");
            showSection(sectionId);
        });
    });

    // Show only "About" section by default
    showSection("#about");
});
