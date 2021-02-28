const slider = document.querySelector('.slider');
const before = document.querySelector('.image-container-before');
const after = document.querySelector('.image-container-after');
const container = document.querySelector('.container');

const dragSlider = (e) => {
let posX= e.layerX;
let size = container.offestWidth;
before.style.width = posX + "px";
slider.style.left = posX + "px";

if(posX < 30) {
    before.style.width = 0;
    slider.style.left = 0;
}
if (posX + 30 > size) {
before.style.width = size + "px";
slider.style.left = size + "px";
}
}

container.addEventListener('mousemove', dragSlider);
container.addEventListener('touchmove', dragSlider);