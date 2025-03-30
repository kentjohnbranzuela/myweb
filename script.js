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
            this.classList.add("clicked"); // Add animation class
            
            setTimeout(() => {
                this.classList.remove("clicked"); // Remove class after animation ends
            }, 300); // Same duration as animation
        });
    });
});
