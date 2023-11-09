var userGender = prompt("Enter Your Gender", "male or female");
var userAge = +prompt("Enter Your Age");
if (userGender != "male" && userGender != "female") {
    alert("Please Enter a Valid Gender");
}
else if (isNaN(userAge) || userAge < 0) {
    alert("Please Enter a Valid Age or DataType");
}
else if (userGender == "female" || userAge < 18) {
    alert("You Are Not Allowed");
}
else {
    alert("Welcome");
}