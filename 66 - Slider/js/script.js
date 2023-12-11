// Elements
const $ = document;
const prev = $.querySelector(".prev");
const next = $.querySelector(".next");
let sliderItem = $.querySelectorAll(".slider-item");
let sliderItemImage = $.querySelectorAll(".img-slider");

console.log(sliderItem);

// Variables
let index = 0;
let sliderItemIndex = 0;
let intervalId;
let images = ["image/1.jpg", "image/2.png", "image/3.jpg", "image/4.jpg", "image/5.jpg", "image/6.jpg"];

// Functions
function nextItem() {
  index = index < images.length - 1 ? index + 1 : 0;

  sliderItem[(sliderItemIndex = sliderItemIndex == 0 ? 1 : 0)].classList.add("active");
  sliderItem[(sliderItemIndex = sliderItemIndex == 1 ? 0 : 1)].classList.remove("active");
  sliderItemImage[(sliderItemIndex = sliderItemIndex == 0 ? 1 : 0)].src = images[index];
}

function prevItem() {
  index = index == 0 ? images.length - 1 : index - 1;
  sliderItem[(sliderItemIndex = sliderItemIndex == 0 ? 1 : 0)].classList.add("active");
  sliderItem[(sliderItemIndex = sliderItemIndex == 1 ? 0 : 1)].classList.remove("active");
  sliderItemImage[(sliderItemIndex = sliderItemIndex == 0 ? 1 : 0)].src = images[index];
}

function startInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    nextItem();
  }, 3000);
}

// Events

next.addEventListener("click", () => {
  nextItem();
  startInterval();
});
prev.addEventListener("click", () => {
  prevItem();
  startInterval();
});

startInterval();
