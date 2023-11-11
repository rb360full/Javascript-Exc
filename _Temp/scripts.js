let num1 = +prompt("Enter Number 1 : ")
let num2 = +prompt("Enter Number 2 : ")



console.log(typeof num1, typeof num2)
console.log(num1, num2)

function Sum(a = 0, b = 0) {
    if (isNaN(a) || isNaN(b)) {
        return "Please enter a valid number"
    }
    return a + b;
}


alert(Sum(num1, num2))