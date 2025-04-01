document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const buttons = document.querySelectorAll(".btn"); // Select all buttons
    
    // Function to show the correct section and make it active
    function showSection(sectionId) {
    sections.forEach(section => {
        if (section.id === sectionId.replace("#", "")) {
            section.style.opacity = "1";
            section.style.pointerEvents = "auto"; // Make sure it's interactive
        } else {
            section.style.opacity = "0.3";
            section.style.pointerEvents = "none"; // Disable interaction for non-active sections
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === sectionId);
    });
}

    // Add click event for buttons to toggle 'active' class
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active")); // Remove 'active' from all buttons
            this.classList.add("active"); // Add 'active' to the clicked button
            
            const sectionId = this.getAttribute("href");
            document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
            showSection(sectionId);

            // Also ensure that the correct nav link is highlighted when the button is clicked
            navLinks.forEach(link => {
                if (link.getAttribute("href") === sectionId) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        });
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href");
            document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
            showSection(sectionId);
        });
    });
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
document.getElementById("hamburger-menu").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active"); // Toggle the active class to show/hide the menu
});