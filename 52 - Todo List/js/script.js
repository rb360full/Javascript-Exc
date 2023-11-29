let inputTodo = document.getElementById("inputTodo");
let delIcons = document.getElementsByClassName("delete");
let editIcons = document.getElementsByClassName("edit");
let ulElem = document.querySelector("ul");
let myModal = new bootstrap.Modal(document.getElementById("modalId"));
let modalBody = document.getElementById("modalBody");
let modalTitleId = document.getElementById("modalTitleId");

function addTodo(todoItem) {
    ulElem.innerHTML += `
    <li class=" list-group-item d-flex justify-content-between align-items-center">
    <span>${todoItem}</span>
    <span>
      <i class="fa fa-pencil edit px-3"></i>
      <i class="fa fa-trash-o delete"></i>
    </span>
  </li>
    `
    inputTodo.value = "";
    delIcons = document.getElementsByClassName("delete");
    editIcons = document.getElementsByClassName("edit");
}
function delTodo(...iconsDel) {
    iconsDel.forEach(function (icon) {

        icon.addEventListener("click", function (event) {
            event.target.parentElement.parentElement.remove();
        });
    });
}



function editTodo(...iconsEdit) {
    iconsEdit.forEach(function (icon) {

        console.log("edit start");

        icon.addEventListener('click', function (event1) {


            inputTodo.focus();
            inputTodo.addEventListener("keydown", function (event2) {
                if (event2.key == "Enter") {
                    event2.preventDefault();
                    console.log(event2);
                    event1.target.parentElement.previousElementSibling.innerHTML = inputTodo.value;
                    editIcons = ""
                    return
                    // inputTodo.value = "";
                }
            })
        })
    })





}


editTodo(...editIcons)








delTodo(...delIcons)

inputTodo.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        if (inputTodo.value == "") {
            modalBody.innerHTML = "The Todo is Empty";
            modalTitleId.innerHTML = "Invalid Todo";
            myModal.toggle();
        }
        else {
            // addTodo(inputTodo.value);
            delTodo(...delIcons)
            editTodo(...editIcons)

        }
    }
});
