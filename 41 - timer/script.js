let userMinutes = +prompt("Enter number of minutes : ")
let userSeconds = +prompt("Enter number of seconds : ")

let totalSeconds = userMinutes * 60 + userSeconds

let minutesText = Math.trunc(totalSeconds / 60)
let secondsText = totalSeconds % 60


var timer = setInterval(function () {
    let result = `${minutesText} : ${secondsText}`;

    console.log(result);
    document.querySelector("#timer").innerHTML = ""
    document.querySelector("#timer").innerHTML += JSON.stringify(result)
    if (totalSeconds === 0) {
        clearInterval(timer)
        console.log("Time is up")
        timerDiv = document.querySelector("#timer").innerHTML = "Time is up"
    }

    totalSeconds--;
    minutesText = Math.trunc(totalSeconds / 60)
    secondsText = totalSeconds % 60

}, 200);


