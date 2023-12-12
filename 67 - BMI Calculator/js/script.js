// elements
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const weightResult = document.getElementById("weight-val");
const heightResult = document.getElementById("height-val");
const bmiResult = document.getElementById("result");
const bmiCategory = document.getElementById("category");

// functions
function setIntoDom() {
    weightResult.innerHTML = weightInput.value + " kg";
    heightResult.innerHTML = heightInput.value + " cm";
}

function bmiCalculator() {
    let result = weightInput.value / (heightInput.value / 100) ** 2;
    setIntoDom();
    bmiResult.innerHTML = "BMI = " + result.toFixed(2);
    bmiResult.style.color =
        result > 18.5 && result < 24.9 ? "green" :
            result > 24.9 && result < 29.9 ? "orange" :
                result > 29.9 ? "red" : "blue";
                
    bmiCategory.innerHTML =
        result > 18.5 && result < 24.9 ? "Normal Weight" :
            result > 24.9 && result < 29.9 ? "Overweight" :
                result > 29.9 ? "Obese" : "Underweight";

    return result;
}

// events

weightInput.addEventListener("input", bmiCalculator);
heightInput.addEventListener("input", bmiCalculator);
