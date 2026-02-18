const menuButton = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const mainMenu = document.getElementById("main-menu");

menuButton.addEventListener("click", toggleEvent);

function toggleEvent() {
    mainNav.classList.toggle("minimized");
    mainMenu.classList.toggle("hidden");
}