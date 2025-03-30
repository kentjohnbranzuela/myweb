document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated");
    
    function handleScroll() {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load to check if elements are already in view

    // Click animations with more effects
    document.querySelectorAll(".click-animate").forEach(el => {
        el.addEventListener("click", function () {
            this.style.transform = "scale(1.1) rotate(5deg)";
            this.style.transition = "transform 0.3s ease-in-out";
            this.style.pointerEvents = "none"; // Disable clicks during animation

            setTimeout(() => {
                this.style.transform = "scale(1) rotate(0deg)";
            }, 300);

            setTimeout(() => {
                this.style.pointerEvents = "auto"; // Enable clicks again
            }, 310);
        });
    });
});
