const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu-items");
const hamburger = document.querySelector(".header__hamburger");

hamburger.onclick = function() {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    header.classList.toggle("header-show-menu");
};

(function() {
    "use strict";

    const toggles = document.querySelectorAll(".header__hamburger");

    for (let i = toggles.length - 1; i >= 0; i--) {
        let toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }
})();

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        header.classList.remove("header-show-menu");
        hamburger.classList.remove("is-active");
    }
});