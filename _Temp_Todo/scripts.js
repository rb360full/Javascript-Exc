let $ = document;
function _id(elemId = "") {
    return $.getElementById(elemId);
}
function _class(elemClass = "") {
    return $.querySelector("." + elemClass);
}
function _classes(elemClasses = "") {
    return $.querySelectorAll("." + elemClasses);
}

let ul = _class("list");
let lis = _classes("list-item");
let input = _id("input");
let button = _id("button");

let keys = Object.keys(localStorage);
let keyValueArray = [];

for (let key of keys) {
    let value = JSON.parse(localStorage.getItem(key));
    console.log(value.inputVal);

    let inputVal = value.inputVal;

    keyValueArray.push({ key, value });
}

keyValueArray.sort(function (a, b) {
    return a.value.date - b.value.date;
});

console.log(keyValueArray);

keyValueArray.forEach(function (obj) {
    let element = `<li class="list-item"><span>${obj.value.inputVal}</span></li>`;
    ul.innerHTML += element;
});

button.addEventListener("click", function () {
    console.log(input.value);
    let inputVal = input.value;
    let date = new Date().getTime();
    console.log(date);
    let data = { inputVal, date };

    localStorage.setItem(`value${input.value}`, JSON.stringify(data));
    let element = `<li class="list-item"><span>${input.value}</span></li>`;
    ul.innerHTML += element;
});
