let inputElement = document.getElementById("input");
let outputElement = document.getElementById("output");
let buttonElement = document.getElementById("button");

function GetId() {
    let result = 3 * 5
    let color = 'red'
    return { result: result, color: color }
}



let DomElements = () => {
    outputElement.innerHTML = GetId().color;
}


buttonElement.addEventListener("click", DomElements)