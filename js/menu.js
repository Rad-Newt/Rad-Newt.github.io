const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
//const header = Document.querySelector(".header");
var menu = 0;
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if (menu == 0){
        document.getElementById("header").style.height = "100vh";
        menu = 1;
    }else {
        document.getElementById("header").style.height = "5vh";
        menu = 0;
    }
    
    console.log("Test");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}