function OddEven(num) {
    let pair = num % 2;
    if (num == 0) {
        return "Zero"
    }
    else if (pair == 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
}

let num = +prompt("Enter a Number : ");

if (isNaN(num)) {
    alert("Please Enter a Valid Number");
}
else {
    let result = OddEven(num);
    alert(num + " is " + result);
}