let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".rect");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        indicators[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }  
    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 15000); // Change slide every 3 seconds
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

document.addEventListener("DOMContentLoaded", showSlides);

let header = document.querySelector('header');
window.addEventListener('scroll', function(){
    if(this.scrollY > 700){
        header.style.background = 'rgba(0,0,0,0.5)';
        header.classList.add('animate__fadeInDown');
    }else{
        header.style.background = 'rgba(0,0,0,0)';
        header.classList.remove('animate__fadeInDown');
    }
})

const hamburger = document.getElementById("hamburger");
const dropMenuWrapper = document.getElementById("dropMenuWrapper");
const exitIcon = document.getElementById("exitIcon");
let body = document.querySelector("body");

hamburger.addEventListener("click", () => {
    dropMenuWrapper.classList.add("show-menu");
    body.classList.add("bodyOver"); // Prevent body scroll
});

exitIcon.addEventListener("click", () => {
    dropMenuWrapper.classList.remove("show-menu");
    body.classList.remover("bodyOver"); // Allow body scroll
});
