const inputElem = document.querySelector("input");
const counterElem = document.querySelector(".counter");

inputElem.addEventListener("keyup", (e) => {
    counterElem.innerHTML = 19 - e.target.value.length;
});
