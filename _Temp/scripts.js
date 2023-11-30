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

let localKeys = Object.keys(localStorage);
let keyValueArray = [];
for (let key of localKeys) {
    let data = JSON.parse(localStorage.getItem(key));
    let objectLocal = { key: key, value: data.value, date: data.date };
    keyValueArray.push(objectLocal);
}
keyValueArray.sort(function (a, b) {
    return a.date - b.date;
});

keyValueArray.forEach(function (item) {
    ul.innerHTML += `<li class="list-item"><span>${item.value}</span></li>`;
});

console.log(keyValueArray);

button.addEventListener("click", function () {
    ul.innerHTML += `<li class="list-item"><span>${input.value}</span></li>`;
    let date = new Date().getTime();
    let inputVal = input.value;
    let data = { value: inputVal, date: date };
    localStorage.setItem(`todoItem${date}`, JSON.stringify(data));
});
