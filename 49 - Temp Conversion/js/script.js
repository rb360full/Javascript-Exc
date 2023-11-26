// define variables of the HTML elements
let convInputElem = document.getElementById("converter");
let convBtnElem = document.querySelector(".convertButton");
let resetBtnElem = document.querySelector(".resetButton");
let changeBtnElem = document.querySelector(".changeButton");
let celSpanElem = document.querySelector(".C");
let farSpanElem = document.querySelector(".F");
let resultElem = document.querySelector(".result");

function CelciusToFahrenheit(celcius) {
    let farenheit = celcius * (9 / 5) + 32;
    return farenheit.toFixed(2);
}

function FahrenheitToCelcius(farenheit) {
    let celcius = (farenheit - 32) * (5 / 9);
    return celcius.toFixed(2);
}

function Swap() {
    let temp = farSpanElem.innerHTML;
    farSpanElem.innerHTML = celSpanElem.innerHTML;
    convInputElem.setAttribute("placeholder", temp);
    celSpanElem.innerHTML = temp;
    document.title = "| " + temp + " to " + farSpanElem.innerHTML + " |";
  }

function Reset() {
    convInputElem.value = "";
    celSpanElem.innerHTML = "°C";
    farSpanElem.innerHTML = "°F";
    resultElem.innerHTML = "";
    convInputElem.setAttribute("placeholder", "°C");
    document.title = "| " + "°C" + " to " + "°F" + " |";
    resultElem.style.color = "rgb(255, 255, 102)";
}

function CalcElements() {
    let result;
    let color;
    if (convInputElem.getAttribute("placeholder") == "°C" && convInputElem.value != "" && !isNaN(convInputElem.value)) {
        result = convInputElem.value + " °C to " + CelciusToFahrenheit(convInputElem.value) + " °F";
        color = "rgb(255, 255, 102)";
    } else if (convInputElem.getAttribute("placeholder") == "°F" && convInputElem.value != "" && !isNaN(convInputElem.value)) {
        result = convInputElem.value + " °F to " + FahrenheitToCelcius(convInputElem.value) + " °C";
        color = "rgb(255, 255, 102)";
    } else {
        result = "Enter a True Value ...";
        color = "red";
    }

    resultElem.style.color = color;
    resultElem.innerHTML = result;
}

changeBtnElem.addEventListener("click", Swap);
convBtnElem.addEventListener("click", CalcElements);
resetBtnElem.addEventListener("click", Reset);