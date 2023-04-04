const line = document.querySelector('.line');
const items = document.querySelectorAll('.header__item');
const itemActive = document.querySelector('.header__item.active');


line.style.left = itemActive.offsetLeft + "px";
line.style.width = itemActive.offsetWidth + "px";

items.forEach((item, index) => {
item.onclick = function () {
itemActive.classList.remove("active");
line.style.left = this.offsetLeft + "px";
line.style.width = this.offsetWidth + "px";
this.classList.add("active")
}
});