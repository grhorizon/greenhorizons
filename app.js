const hamburgerToggle = document.querySelector("#hamburger-toggle");
const navbar =document.querySelector("#navbar");

hamburgerToggle.addEventListener("click", onHamburgerClick);

function onHamburgerClick() {
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
    }else {
        navbar.classList.remove("open");
    }
}



// const nav = document.querySelector('navbar');
// window.addEventListener("scroll",function(){
//     if(this.document.documentElement.scrollTop > 20){
//         navbar.classList.add("sticky")
//     }
//     else{
//         navbar.classList.remove("sticky")
//     }
// })