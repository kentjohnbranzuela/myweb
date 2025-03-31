document.addEventListener("DOMContentLoaded", function () {
    fetch("../header.html") // Gamitin "../header.html" kung nasa subfolder
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});
$(document).ready(function() {
    $("#header-container").load("/header.html");
});
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