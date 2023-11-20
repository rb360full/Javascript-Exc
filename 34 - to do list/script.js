let todoList = [
    { id: 1, todo: "study", isDone: false },
    { id: 2, todo: "exercise", isDone: false },
    { id: 3, todo: "footbal", isDone: false },
];

document.querySelector("#result").innerHTML = todoList.map(JSON.stringify).join("<br>");

document.querySelector("#addbtn").addEventListener("click", function () {
    let userTodoAdd = document.querySelector("#userTodo").value;
    let todoNew = {
        id: todoList.length + 1,
        todo: userTodoAdd,
        isDone: false,
    };
    todoList.push(todoNew);
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#result").innerHTML += todoList.map(JSON.stringify).join("<br>");
});

document.querySelector("#removebtn").addEventListener("click", function () {
    let userTodoRemove = document.querySelector("#userTodo").value;
    todoList = todoList.filter(function (item) {
        return item.todo !== userTodoRemove;
    });
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#result").innerHTML += todoList.map(JSON.stringify).join("<br>");
});

document.querySelector("#clearbtn").addEventListener("click", function () {
    document.querySelector("#result").innerHTML = "";
});

document.querySelector("#completebtn").addEventListener("click", function (todo) {
    let userTodoComplete = document.querySelector("#userTodo").value;

    let itemCompleted = todoList.filter(function (item) {
        return item.todo === userTodoComplete;
    });

    todoList.map(function (item) {
        itemCompleted.forEach(function (itemC) {
            if (itemC.todo == item.todo) {
                return (item.isDone = true);
            }
        });
    });

    document.querySelector("#result").innerHTML = "";
    document.querySelector("#result").innerHTML += todoList.map(JSON.stringify).join("<br>");
});
