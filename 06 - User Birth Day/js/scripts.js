let userBirthYear = +prompt("Please Enter Your Birth Year (Shamsi): ", 1370);

if (isNaN(userBirthYear)) {
    alert("Please Enter a Valid Number");
}
else {
    let userAge = 1402 - userBirthYear;
    if (userAge >= 0) {

        alert("Your Age Is : " + userAge);
    }
    else {
        alert("its impossible , please enter a valid year");
    }
}