document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function showSection(targetId) {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            showSection(targetId);
        });
    });

    // Show only the first section by default
    showSection(sections[0].id);
});
