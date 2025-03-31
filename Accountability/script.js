
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const images = document.querySelectorAll(".image-link img");
    const closeModal = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", function (e) {
            e.preventDefault();
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".about");

    function checkVisibility() {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            aboutSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
document.addEventListener("DOMContentLoaded", function() {
    const referenceSection = document.querySelector(".reference");

    function checkVisibility() {
        const rect = referenceSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            referenceSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the clicked section
    document.getElementById(sectionId).classList.add('active');
}
function showSection(sectionId) {
    let sections = document.querySelectorAll('.section');

    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    setTimeout(() => {
        let section = document.getElementById(sectionId);
        section.classList.add('active');

        // Smooth scroll to the center of the section
        section.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
}
function showSection(sectionId) {
    let sections = document.querySelectorAll('.section');

    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    setTimeout(() => {
        let section = document.getElementById(sectionId);
        section.classList.add('active');

        // Smooth scroll to the center of the section
        section.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
}
function showSection(sectionId) {
    let sections = document.querySelectorAll('section');

    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    setTimeout(() => {
        let section = document.getElementById(sectionId);
        section.classList.add('active');

        // Smooth scroll to the center of the section
        section.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
}
