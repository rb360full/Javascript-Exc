let userMinutes = +prompt("Please Enter Your Minutes : ");
let houre = parseInt(userMinutes / 60);
let minutes = userMinutes % 60;


if (isNaN(userMinutes)) {
    alert("Please Enter a Valid Number");
}
else {
    alert("Your Time Is : " + houre + " houre and " + minutes + " minutes")
}



