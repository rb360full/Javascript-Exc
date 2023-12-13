// elements
const body = document.body;
const title = document.querySelector(".title");

// functions

function animateKeyEnd(keyElem) {
    keyElem.addEventListener("animationend", function () {
        keyElem.classList.remove("hit");
    });
}

function setKey(e) {
    if (e.key == "Backspace") {
        e.preventDefault();

        title.innerHTML = title.innerHTML.slice(0, -1);
    } else {
        let keyElem = document.getElementById(e.key.toUpperCase());

        if (keyElem || e.key == " ") {
            title.textContent += e.key;
            if (e.key != " ") {
                keyElem.classList.add("hit")
                animateKeyEnd(keyElem)
            }
        }
    }
}

// events

body.addEventListener("keyup", setKey);
