// Elements
const body = document.body;
const modalTodoShow = document.getElementById("add_btn");
const modalTodo = document.getElementById("todo_form");
const closeModalBtn = document.querySelector(".close-modal");
const todoSubmitBtn = document.getElementById("todo_submit");
const todoInput = document.getElementById("todo_input");
// containers for status
const todoContainer = document.querySelector(".todo-container");
const statusBoxes = document.querySelectorAll(".status");
const noStatusBox = document.getElementById("no_status");
const noStartedBox = document.getElementById("no_started");
const inProgressBox = document.getElementById("in_progress");
const completedBox = document.getElementById("completed");

// Functions

function generateId() {
    return "todoItem" + Date.now().toString();
}
function closeModal() {
    (modalTodo.style.top = "-100%"), todoInput.blur();
}
function openModal() {
    (modalTodo.style.top = "50%"), todoInput.focus();
}

function addTodoItem() {
    let isEmpty = false;
    let newDivElem = document.createElement("div");
    let newSpanElem = document.createElement("span");
    newDivElem.classList.add("todo");
    newDivElem.setAttribute("id", generateId());
    newDivElem.setAttribute("draggable", true);
    newDivElem.innerHTML = todoInput.value;
    newSpanElem.classList.add("close");
    newSpanElem.innerHTML = "&times;";
    newDivElem.append(newSpanElem);
    !todoInput.value ? (isEmpty = true) : (isEmpty = false);
    !isEmpty ? noStatusBox.insertBefore(newDivElem, noStatusBox.children[2]) : null;
    closeModal();
    todoInput.value = "";
}

// Events
modalTodoShow.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
body.addEventListener("keydown", (e) => {
    e.key === "Escape" && modalTodo.style.top == "50%" ? closeModal() : null;
});
todoSubmitBtn.addEventListener("click", addTodoItem);
todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTodoItem();
    }
});

todoContainer.addEventListener("click", (e) => {
    if (e.target.matches(".close")) {
        e.target.closest(".todo").remove();
    }
});

todoContainer.addEventListener("dragstart", function (e) {
    console.log(e.target, "dragStart");
    e.dataTransfer.setData("elementId", e.target.id);
});

todoContainer.addEventListener("dragover", function (e) { e.preventDefault(); });

todoContainer.addEventListener("drop", function (e) {
    let elementId = e.dataTransfer.getData("elementId");
    let element = document.getElementById(elementId);
    e.target.append(element);
});
