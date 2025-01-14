document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const closeMenuButton = document.getElementById("close-menu");
    
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    closeMenuButton.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});
