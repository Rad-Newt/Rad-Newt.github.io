const hamburger = document.querySelector(".hamburger");

var menu = 0;
hamburger.addEventListener("click", mobileMenu);


function mobileMenu() {

    if (menu == 0){
        document.getElementById("header").style.height = "100vh";
        document.getElementById("header").style.height = "100vh";
        document.getElementById("menu").style.display = "flex";
        menu = 1;
    }else {
        document.getElementById("header").style.height = "5vh";
        document.getElementById("menu").style.display = "none";
        menu = 0;
    }
    
    console.log("Test");
}
