const userInput = document.querySelector('input[type="text"]');
const passInput = document.querySelector('input[type="password"]');
const form = document.querySelector("form");
const checkBox = document.getElementById("chbox");

let now = new Date();

form.addEventListener("submit", (e) => {
    now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    if (checkBox.checked) {
        setCookie();
    }
});

window.addEventListener("load", () => {
    if (getCookie("user") || getCookie("pass")) {
        window.location.href = 'http://localhost/Javascript-Exc/91%20-%20Cookie%20Login%20Project/index.html'
    }
});

function setCookie() {
    now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = `user=${userInput.value};path=/;expires=${now}`;
    document.cookie = `pass=${passInput.value};path=/;expires=${now}`;
}

function getCookie(param) {
    let allCookies = document.cookie.split(";");
    let user = allCookies.find((cok) => {
        return cok.includes(param);
    });
    return user.split('=')[1]
    return user.substring(user.indexOf("=") + 1);
}

 console.log(getCookie('user'));
