// elements
const hourElem = document.getElementById("hour");
const minuteElem = document.getElementById("minute");
const secondsElem = document.getElementById("seconds");

// variables
let time, timeNow, seconds, minuts, hour;

// functions

function updateClock() {
    setInterval(() => {
        time = new Date();
        timeNow = time.toLocaleTimeString();
        seconds = timeNow.split(":")[2].split(" ")[0];
        minuts = timeNow.split(":")[1];
        hour = time.getHours();
        hourElem.innerHTML = hour;
        minuteElem.innerHTML = minuts;
        secondsElem.innerHTML = seconds;
    }, 1000);
}

updateClock();
