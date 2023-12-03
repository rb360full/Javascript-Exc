// define elements
const inputElem = document.getElementById("input-field");
const addBtnElem = document.getElementById("btn-save");
const clearBtnElem = document.getElementById("btn-delete");
const result = document.getElementById("listed");
const colorBox = document.getElementById("color-select");

// define functions
function addNote() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card", "shadow-sm", "rounded");
    const newP = document.createElement("p");
    newP.classList.add("card-text", "p-3");
    newP.textContent = inputElem.value;
    newDiv.appendChild(newP);
    result.appendChild(newDiv);
    console.log(result);
    newDiv.style.backgroundColor = inputElem.style.backgroundColor;
    inputElem.value = "";
}

function setColor() {
    colorBox.addEventListener("click", function (e) {
        inputElem.style.backgroundColor = e.target.style.backgroundColor;
    });
}

// define Events
setColor();
addBtnElem.addEventListener("click", addNote);
inputElem.addEventListener("keydown", function (e) {
    e.key == "Enter" ? addNote() : null;
});
result.addEventListener("click", function (e) {
    e.target.closest("div.rounded").remove();
});
clearBtnElem.addEventListener("click", function () {
    inputElem.value = "";
});
