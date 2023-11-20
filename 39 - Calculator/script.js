let num1 = +prompt("Enter Num1 :", 0)
let num2 = +prompt("Enter Num2 :", 0)
let operator = prompt("Enter Operator : \n1. + \n2. - \n3. * \n4. / \n5. ** \n6. %", "+")
let result = 0

switch (operator) {
    case '+':
        result = num1 + num2
        break;
    case '-':
        result = num1 - num2
        break;
    case '*':
        result = num1 * num2
        break;
    case '/':
        result = num1 / num2
        break;
    case '**':
        result = num1 ** num2
        break;
    case '%':
        result = num1 % num2
        break;

    default:
        break;
}

alert(result);

