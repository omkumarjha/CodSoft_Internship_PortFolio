// Contact form JS to clear the content of each and every input after clicking on submit.
const formSubmit = () => {
    let nameInput = document.querySelector(".nameInput")
    let emailInput = document.querySelector(".emailInput")
    let messageInput = document.querySelector(".messageInput")

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
}

// Hamburger JS
// let hamburger = document.querySelector(".svg-parent");
// let right = document.querySelector(".right");
// let left = document.querySelector(".left");

// hamburger.addEventListener("click",()=>{
//     right.classList.toggle("display-none")
//     left.classList.toggle("display-none")
// })


// For hamburger

let hamburger = document.querySelector(".svg-parent");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let navbar = document.getElementById("navbar");

hamburger.addEventListener("click",()=>{
    left.classList.toggle("v-hidden")
    right.classList.toggle("v-hidden")
    navbar.classList.toggle("h-navbar")
})