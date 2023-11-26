// define variables of the HTML elements
let convInputElem = document.getElementById("converter");
let convBtnElem = document.querySelector(".convertButton");
let resetBtnElem = document.querySelector(".resetButton");
let changeBtnElem = document.querySelector(".changeButton");
let celSpanElem = document.querySelector(".C");
let farSpanElem = document.querySelector(".F");
let resultElem = document.querySelector(".result");

let result;
let convertedValue;
let resultColor;




function Swap() {
    let temp = farSpanElem.innerHTML;
    farSpanElem.innerHTML = celSpanElem.innerHTML;
    convInputElem.setAttribute("placeholder", temp);
    celSpanElem.innerHTML = temp;
    document.title = "| " + temp + " to " + farSpanElem.innerHTML + " |";
    if (convInputElem.value != "") {
        CalcConvert();
    }
}

let CalcConvert = function () {
    if (convInputElem.getAttribute("placeholder") == "°C" && convInputElem.value != "") {
        convertedValue = convInputElem.value * (9 / 5) + 32;
        result = convInputElem.value + celSpanElem.innerHTML + " to " + convertedValue.toFixed(2) + farSpanElem.innerHTML;
        resultColor = "rgb(255, 255, 102)";
    } else if (convInputElem.getAttribute("placeholder") == "°F" && convInputElem.value != "") {
        convertedValue = (convInputElem.value - 32) * (5 / 9);
        result = convInputElem.value + celSpanElem.innerHTML + " to " + convertedValue.toFixed(2) + farSpanElem.innerHTML;
        resultColor = "rgb(255, 255, 102)";
    }

    if (convInputElem.value == "") {
        result = "Enter a Value please ...";
        resultColor = "red";
    }
    else if (isNaN(convertedValue)) {
        result = "Invalid Input";
        resultColor = "red";
    }


    return { result:result , color: resultColor}
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




function InsertDomElements() {
    resultElem.style.color = CalcConvert().color
    resultElem.innerHTML = CalcConvert().result;

}

changeBtnElem.addEventListener("click", Swap);
convBtnElem.addEventListener("click", CalcConvert && InsertDomElements);
resetBtnElem.addEventListener("click", Reset);
