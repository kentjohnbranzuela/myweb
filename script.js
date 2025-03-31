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
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".animated-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant navigation
            let img = this.querySelector("img");
            
            // Add animation effect
            img.style.transition = "transform 0.3s ease-in-out";
            img.style.transform = "scale(0.9)";
            
            // Wait for animation, then navigate
            setTimeout(() => {
                window.location.href = this.href;
            }, 300); // Delay para sa smooth effect
        });
    });
});