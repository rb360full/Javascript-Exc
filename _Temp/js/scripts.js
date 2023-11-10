var num1 = +prompt("Please Enter Number 1 : ")
var num2 = +prompt("Please Enter Number 2 : ")
var result = num1 * num2 == 12 ? 12 :
    num1 * num2 == 6 ? 6 :
        num1 * num2 == 4 ? 4 :
            "OK"

alert(result)