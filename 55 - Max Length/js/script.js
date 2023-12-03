const inputElem = document.querySelector("form input");
const counterElem = document.querySelector(".counter");

inputElem.addEventListener("keyup", (e) => {
    const maxLength = inputElem.getAttribute('maxlength')
    let currentLength = e.target.value.length;
    counterElem.innerHTML = maxLength - currentLength;
});
