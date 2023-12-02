// Define variables for HTML elements
const convInputElem = document.getElementById("converter");
const convBtnElem = document.querySelector(".convertButton");
const resetBtnElem = document.querySelector(".resetButton");
const changeBtnElem = document.querySelector(".changeButton");
const celSpanElem = document.querySelector(".C");
const farSpanElem = document.querySelector(".F");
const resultElem = document.querySelector(".result");

// Convert Celsius to Fahrenheit
function CelsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * (9 / 5) + 32;

    return fahrenheit.toFixed(2);
}

// Convert Fahrenheit to Celsius
function FahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);

    return celsius.toFixed(2);
}

// Swap Celsius and Fahrenheit
function swapTempUnits() {
    const temp = farSpanElem.innerHTML;
    farSpanElem.innerHTML = celSpanElem.innerHTML;
    convInputElem.setAttribute("placeholder", temp);
    celSpanElem.innerHTML = temp;
    document.title = `| ${temp} to ${farSpanElem.innerHTML} |`;
}

// Reset all elements
function reset() {
    convInputElem.value = "";
    celSpanElem.innerHTML = "°C";
    farSpanElem.innerHTML = "°F";
    resultElem.innerHTML = "";
    convInputElem.setAttribute("placeholder", "°C");
    document.title = "| °C to °F |";
    resultElem.style.color = "rgb(255, 255, 102)";
}

// Calculate elements
function calculateElements() {
    let result;
    let color;
    if (
        convInputElem.getAttribute("placeholder") == "°C" &&
        convInputElem.value != "" &&
        !isNaN(convInputElem.value)
    ) {
        result = `${convInputElem.value} °C to ${CelsiusToFahrenheit(
            convInputElem.value
        )} °F`;
        color = "rgb(255, 255, 102)";
    } else if (
        convInputElem.getAttribute("placeholder") == "°F" &&
        convInputElem.value != "" &&
        !isNaN(convInputElem.value)
    ) {
        result = `${convInputElem.value} °F to ${FahrenheitToCelsius(
            convInputElem.value
        )} °C`;
        color = "rgb(255, 255, 102)";
    } else {
        result = "Enter a valid value...";
        color = "red";
    }

    resultElem.style.color = color;
    resultElem.innerHTML = result;
}

// Add event listeners
changeBtnElem.addEventListener("click", swapTempUnits);
convBtnElem.addEventListener("click", calculateElements);
resetBtnElem.addEventListener("click", reset);
