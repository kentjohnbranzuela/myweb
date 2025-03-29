document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animated");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add("fade-in");
        }, 200);
    });
});
