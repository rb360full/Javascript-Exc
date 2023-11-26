// define variables of the HTML elements
let convInputElem = document.getElementById("converter");
let convBtnElem = document.querySelector(".convertButton");
let resetBtnElem = document.querySelector(".resetButton");
let changeBtnElem = document.querySelector(".changeButton");
let celSpanElem = document.querySelector(".C");
let farSpanElem = document.querySelector(".F");
let resultElem = document.querySelector(".result");

let convertedValue;

changeBtnElem.addEventListener("click", () => {
    let temp = farSpanElem.innerHTML;
    farSpanElem.innerHTML = celSpanElem.innerHTML;
    convInputElem.setAttribute("placeholder", temp);
    celSpanElem.innerHTML = temp;
    document.title = "| " + temp + " to " + farSpanElem.innerHTML + " |";
    if (convInputElem.value != "") {
        CalcConvert();
    }
});

convBtnElem.addEventListener("click", CalcConvert);
resetBtnElem.addEventListener("click", Reset);

function CalcConvert() {
    let result;
    if (convInputElem.getAttribute("placeholder") == "°C" && convInputElem.value != "") {
        convertedValue = convInputElem.value * (9 / 5) + 32;
        result = convInputElem.value + celSpanElem.innerHTML + " to " + convertedValue.toFixed(2) + farSpanElem.innerHTML;
        resultElem.style.color = 'rgb(255, 255, 102)'
    } else if (convInputElem.getAttribute("placeholder") == "°F" && convInputElem.value != "") {
        convertedValue = (convInputElem.value - 32) * (5 / 9);
        result = convInputElem.value + celSpanElem.innerHTML + " to " + convertedValue.toFixed(2) + farSpanElem.innerHTML;
        resultElem.style.color = 'rgb(255, 255, 102)'
    }

    if (isNaN(convertedValue)) {
        result = "Invalid Input";
        resultElem.style.color = 'red'
    }
    if (convInputElem.value == "") {
        result = "Enter a Value please ...";
        resultElem.style.color = 'red'
    }

    resultElem.innerHTML = result;
}

function Reset() {
    convInputElem.value = "";
    celSpanElem.innerHTML = "°C";
    farSpanElem.innerHTML = "°F";
    resultElem.innerHTML = "";
    convInputElem.setAttribute("placeholder", "°C");
    document.title = "| " + "°C" + " to " + "°F" + " |";
    resultElem.style.color = 'rgb(255, 255, 102)'
}
