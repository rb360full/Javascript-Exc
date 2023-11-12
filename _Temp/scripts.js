a = 1
b = 10
let check = (a, b) => {
    var result;
    a == b ? result = "equal" :
        a + b > 5 ? result = ">5" :
            a + b < 5 ? result = "<5" :
                result = a + b;
    return result;
}

console.log(check(a, b))