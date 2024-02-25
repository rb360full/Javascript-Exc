const userInput = document.querySelector('input[type="text"]');
const passInput = document.querySelector('input[type="password"]');
const form = document.querySelector("form");
const checkBox = document.getElementById("chbox");

let now = new Date();

form.addEventListener("submit", (e) => {
    now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    if (checkBox.checked) {
        document.cookie = `user=${userInput.value};path=/;expires=${now}`;
        document.cookie = `pass=${passInput.value};path=/;expires=${now}`;
    }
});
