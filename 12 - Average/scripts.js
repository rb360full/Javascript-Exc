let Average = function (a, b, c) {
    let sum = a + b + c;
    let ave = sum / 3;
    return ave;
}

let number1 = +prompt("Enter First Number : ")
let number2 = +prompt("Enter Second Number : ")
let number3 = +prompt("Enter Third Number : ")

if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    alert("Please Enter a Valid Number");
}
else {
    alert("The Average is " + Average(number1, number2, number3));
}
