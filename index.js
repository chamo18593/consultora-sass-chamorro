const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-v");

    if (navMenu.classList.contains("nav-menu-v")) {
        navToggle.setAttribute("aria-label", "cerrar menu"); 
    } else{
        navToggle.setAttribute("aria-label", "abrir menu");
    }
});