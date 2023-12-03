const inputElem = document.querySelector("form input");
const counterElem = document.querySelector(".counter");

inputElem.addEventListener("keyup", (e) => {
    counterElem.innerHTML = 19 - e.target.value.length;
});
