
// Nav Container
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Line
// let line = document.querySelector('.line');
// const items = document.querySelectorAll('.header__item');
// const itemActive = document.querySelector('.header__item.active');

// line.style.left = itemActive.offsetLeft + "px";
// line.style.width = itemActive.offsetWidth + "px";

// items.forEach((item, index) => {
// item.onclick = function () {
// itemActive.classList.remove("active");
// line.style.left = this.offsetLeft + "px";
// line.style.width = this.offsetWidth + "px";
// this.classList.add("active")
// }
// });

