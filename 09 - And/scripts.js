var userGender = prompt("Enter your gender", "male or female");
var userAge = +prompt("Enter your age");
if (userAge > 18 && userGender == "male") {
    alert("Welcome");
}
else {
    alert("You Are Not Allowed");
}
