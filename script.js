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
});
