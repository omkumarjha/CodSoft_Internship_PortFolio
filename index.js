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
let hamburger = document.querySelector(".svg-parent");
let right = document.querySelector(".right");
let left = document.querySelector(".left");

hamburger.addEventListener("click",()=>{
    right.classList.toggle("display-none")
    left.classList.toggle("display-none")
})