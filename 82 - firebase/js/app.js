const myApi = "https://rbazdaran-js-default-rtdb.firebaseio.com/";
const submitButton = document.querySelector("button");
const form = document.querySelector("form");

const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const password = document.querySelector(".password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let userData = {
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value,
    };

    fetch(myApi + "users.json", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userData),
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

    clearFormData();
});

function clearFormData() {
    firstname.value = "";
    lastname.value = "";
    password.value = "";
}
