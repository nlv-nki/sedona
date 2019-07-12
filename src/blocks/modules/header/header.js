const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu-items");
const hamburger = document.querySelector(".header__hamburger");

hamburger.onclick = function() {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    header.classList.toggle("header-show-menu");
};