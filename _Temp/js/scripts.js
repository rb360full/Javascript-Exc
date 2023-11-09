let num = +prompt("Please Enter Your Number : ", 10);
let allowAcces = (num > 10) ? "greater than 10" :
    (num < 10) ? "less than 10" :
        "equal 10";
        
console.log(allowAcces)