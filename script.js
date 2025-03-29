document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
});
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animated");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add("fade-in");
        }, 200);
    });
});

