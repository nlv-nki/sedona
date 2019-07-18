const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu-items");
const hamburger = document.querySelector(".header__hamburger");

hamburger.onclick = function() {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    hamburger.classList.toggle("is-active");
    header.classList.toggle("header-show-menu");
};

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        header.classList.remove("header-show-menu");
        hamburger.classList.remove("is-active");
    }
});