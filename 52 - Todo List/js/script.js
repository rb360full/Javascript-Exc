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
    let i = 0
    iconsEdit.forEach(function (icon) {

        console.log("edit start");

        icon.addEventListener('click', function (event) {
            i++
            icon.setAttribute('edit-id', i)



            inputTodo.focus();
            inputTodo.addEventListener("keydown", function (event) {
                if (event.key == "Enter") {
                    event.preventDefault();
                    console.log(document.querySelector(`[edit-id="${i}"]`));
                    document.querySelector(`[edit-id="${i}"]`).parentElement.previousElementSibling.innerText = inputTodo.value;
                    console.log(inputTodo.value);


                    inputTodo.value = "";
                    return
                    // editIcons = ""
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
