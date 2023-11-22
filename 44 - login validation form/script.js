let userInput = document.getElementById("username");
let passInput = document.getElementById("password");
let buttonSubmit = document.getElementById("buttonSubmit");
let modalBody = document.getElementById("modalBody");
let modalTitleId = document.getElementById("modalTitleId");
let myModal = new bootstrap.Modal(document.getElementById("modalId"));

function LoginValidCheck() {
    if (passInput.value.length > 8 && userInput.value.length > 12) {
        modalBody.innerHTML = "Login Successful";
        modalTitleId.innerHTML = "Wellcome";
        myModal.toggle();
    } else {
        modalBody.innerHTML = "Login Failed";
        modalTitleId.innerHTML = "Username or Password Invalid";
        myModal.toggle();
    }
}
