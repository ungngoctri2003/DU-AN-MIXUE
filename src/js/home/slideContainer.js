//Slide container
let slidePrev = document.getElementById('slidePrev');
let slideNext = document.getElementById('slideNext');
let slideImage = document.querySelector('.slider__container-images');
let slideItems = document.querySelectorAll('.slider__container-images .slider__container-item');
let slideContents = document.querySelectorAll('.slider__container-content .slider__container-item');
let slideRotate = 0;
let slideActive = 0;
let slideCountItem = slideItems.length;
let slideRotateAdd = 360 / slideCountItem;

function nextSlider(){
    slideActive = slideActive + 1 > slideCountItem - 1 ? 0 : slideActive + 1;
    slideRotate = slideRotate + slideRotateAdd; 
    show();
}
function prevSlider(){
    slideActive = slideActive - 1 < 0 ? slideCountItem - 1 : slideActive - 1;
    slideRotate = slideRotate - slideRotateAdd; 
    show();     
     
}
function show(){
    slideImage.style.setProperty("--rotate", slideRotate + 'deg');
    slideImage.style.setProperty("--rotate", slideRotate + 'deg');
    slideContents.forEach((content, key) => {
        if(key == slideActive){
            content.classList.add('active');
        }else{
            content.classList.remove('active');
        }
    })
}
slideNext.onclick = nextSlider;
slidePrev.onclick = prevSlider;
const slideAutoNext = setInterval(nextSlider, 5303);    