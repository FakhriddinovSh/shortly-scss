let elHamburger = document.querySelector(".site-header__button")
let elHeader = document.querySelector(".site-header__box")

elHamburger.addEventListener("click", function(){
    elHeader.classList.toggle("site-header__box--active")
})