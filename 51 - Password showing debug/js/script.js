// Functions for select elems with id & class
var $ = document;
function _id(id_name) {
  return $.getElementById(id_name);
}

function _class(class_name) {

  let classElements = $.getElementsByClassName(class_name);
  return classElements[0]
}

// Select Elems
let togglePassword = _class("toggle-password");
let passwordField = _id("password-field");

// Fire click event on eye icon
togglePassword.addEventListener("click", function () {

  if (passwordField.type == "password") {
    togglePassword.classList.remove("active");
    passwordField.type = "text";
  } else {
    togglePassword.classList.add("active");
    passwordField.type = "password";
  }
})