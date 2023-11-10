let average = +prompt("Please Enter Your Average : ");

switch (average) {
    case 18:
    case 19:
    case 20:
        console.log("Grade A");
        break;
    case 15:
    case 16:
    case 17:
        console.log("Grade B");
        break;
    case 12:
    case 13:
    case 14:
        console.log("Grade C");
        break;
    default:
        if (average < 12) {
            console.log("Refuse");
        }


}


