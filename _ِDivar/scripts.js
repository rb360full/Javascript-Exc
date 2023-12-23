var chatId = "108565119";
var Token = "6780599674:AAF7eZIYljQUF4nNF436f35g3GK3oExVPwc";

const string1 = "لحظاتی پیش";
const string2 = "دقایقی پیش";
const string3 = "یک ربع پیش";
const string4 = "نیم ساعت پیش";
const string5 = "۱ ساعت پیش";
const string6 = "نردبان شده";
let time = new Date().toLocaleTimeString();
// localStorage.clear();
let agahiLocal = JSON.parse(localStorage.getItem("agahi"));
let agahiArray = [];
const intervalId = setInterval(function () {
    // sendMessageToTelegramBot("---------------------     " + time + "     ---------------------")
    let elements = document.body.querySelector("#post-list-container-id").children[0].children[0].children[0];

    for (let i = 0; i < 4; i++) {
        if (
            elements.children[i].innerText.includes(string1) ||
            elements.children[i].innerText.includes(string1) ||
            elements.children[i].innerText.includes(string1) ||
            elements.children[i].innerText.includes(string1) ||
            elements.children[i].innerText.includes(string1) ||
            elements.children[i].innerText.includes(string1)
        ) {
            let newItem = elements.children[i].innerText;
            let link = "divar.ir" + elements.children[i].children[0].getAttribute("href");
            let agahi = newItem + "\n \n" + link;
            agahiArray.push(agahi);
            localStorage.setItem("agahi", JSON.stringify(agahiArray));
        }

        console.log(agahiArray);
    }
    if (JSON.stringify(agahiLocal) == JSON.stringify(agahiArray)) {
        clearInterval(intervalId);
    } else {
        agahiArray.forEach((agahi) => {
            var encodedMessage = encodeURI(agahi);
            sendMessageToTelegramBot(agahi, chatId);
            sendMessageToTelegramBot(encodedMessage, "@MyAlarmChannel");
        });

        clearInterval(intervalId);
    }

    // location.reload();
}, 5000);

setTimeout(function () {
    location.reload();
}, 10000);

function sendMessageToTelegramBot(post, chatId) {
    try {
        const Http = new XMLHttpRequest();

        var ID = chatId; //"108565119"
        var url = "https://api.telegram.org/bot" + Token + "/sendMessage?text=" + post + "&chat_id=" + ID;
        Http.open("GET", url);
        Http.send();
    } catch (e) {
        console.error(e);
    }
}
