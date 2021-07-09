const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

const toggleMenu = function() {
    navbar.classList.toggle("open");
}

menuIcon.addEventListener("click", toggleMenu);

