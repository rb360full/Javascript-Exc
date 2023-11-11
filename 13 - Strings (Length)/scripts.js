let userName = prompt("What is your name?", "Reza");
let userPassword = prompt("What is your password?", "1234");

function LoginCheck(user, pass) {

    if (user.length < 3 || pass.length < 8) {
        return false
    }
    else {
        return true
    }
}

let loginCheck = LoginCheck(userName, userPassword);
if (loginCheck) {
    alert("Login Successful")
}
else {
    alert("Login Failed")
}