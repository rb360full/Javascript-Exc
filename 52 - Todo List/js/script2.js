// declare variables and functions
let $ = document;
function _id(elemId = "") {
    return $.getElementById(elemId);
}
function _class(elemClass = "") {
    return $.querySelector("." + elemClass);
}
function _classes(elemClasses = "") {
    return $.querySelectorAll("." + elemClasses);
}
let idCounter = localStorage.getItem("idCounter");

function timeNow() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return hours + ":" + minutes + ":" + seconds;
}

function removeTodo(id = "") {
    _id(id).parentElement.parentElement.remove();
}

function addTodo(value = "") {
    idCounter++;
    let output = `
    <li class=" list-group-item d-flex justify-content-between align-items-center">
    <span>${value}</span>
    <span>
      <i>${timeNow()}</i>
      <i class="fa fa-pencil px-3 edit" id="edit${idCounter}"></i>
      <i class="fa fa-trash-o delete" id="del${idCounter}"></i>
    </span>
  </li>`;
    _id("ultodo").innerHTML += output;
    return output;
}

function editTodo(id = "", value = "") {
    _id(id).parentElement.previousElementSibling.innerHTML = value;
}

_id("inputtodo").addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();

        addTodo(_id("inputtodo").value);

        _id("inputtodo").value = "";

        _classes("delete").forEach(function (item) {
            item.addEventListener("click", function (event) {
                removeTodo(item.id);

                localStorage.removeItem(`item${item.id.slice(-1)}`);
            });
        });

        _classes("edit").forEach(function (item) {
            item.addEventListener("click", function (event) {
                editTodo(item.id, _id("inputtodo").value);
            });
        });
    }
});

///////////////////////////////

_classes("edit").forEach(function (item) {
    item.addEventListener("click", function (event) {
        editTodo(item.id, _id("inputtodo").value);
    });
});

// _classes('edit').forEach(function (item) {
//     item.addEventListener('click', function (event) {
//         editTodo(item.id, _id('inputtodo').value)
//         console.log(item.id);
//     })
// })
