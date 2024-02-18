const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");
let todoListItems = [];

class TodoTask {
    constructor(id, todoName) {
        this.id = id;
        this.todoName = todoName;
    }
}

window.addEventListener("load", (e) => {
    let items = JSON.parse(localStorage.getItem("task")) || [];
    todoListItems = [...items];

    items.forEach((element) => {
        todoList.insertAdjacentHTML(
            "afterbegin",
            `
    
        <li class="completed well">
            <label>${element.todoName}</label>
            <button class="btn btn-success">Complete</button>
            <button class="btn btn-danger">Remove</button>
        </li>
        `
        );
    });
});

addButton.addEventListener("click", (e) => {
    let generateId = todoListItems.length ? todoListItems[todoListItems.length - 1].id + 1 : 1;

    let newTodo = new TodoTask(generateId, itemInput.value);

    todoListItems.push(newTodo);
    localStorage.setItem("task", JSON.stringify(todoListItems));

    todoList.insertAdjacentHTML(
        "afterbegin",
        `
    
    <li class="completed well">
        <label>${newTodo.todoName}</label>
        <button class="btn btn-success">Complete</button>
        <button class="btn btn-danger">Remove</button>
    </li>
    `
    );
});
