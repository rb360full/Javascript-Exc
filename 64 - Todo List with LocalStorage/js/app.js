// Elements
const addTaskElem = document.getElementById("addButton");
const inputTaskElem = document.getElementById("itemInput");
const tasksContainer = document.getElementById("todoList");
const clearTasksElem = document.getElementById("clearButton");

// Variables
let tasksArray = [];

// Functions

function randomId() {
    return Date.now();
}

function getTimeNow() {
    let currentTime = new Date();
    return currentTime.toLocaleTimeString();
}

function getLocalTasks() {
    localTasksArray = JSON.parse(localStorage.getItem("task"));
    if (localTasksArray) {
        localTasksArray.forEach((task) => {
            tasksArray.push(task);
            appendTask(task.id, task.classs, task.task, task.status, task.timeStart, task.timeEnd);
        });
    }
}

function appendTask(id, classs, task, status, timeStart, timeEnd) {
    let newLi = `<li id="${id}" class="${classs} well">
                 <label>${task}</label>
                 <button class="btn btn-success status">${status}</button>
                 <button class="btn btn-danger">Delete</button>
                 <span class="">${timeStart} Start</span>
                 <span class="time-end">${timeEnd} Done</span>
                 </li>`;
    tasksContainer.innerHTML += newLi;
}

function addTask() {
    let newTask = makeTaskObject();
    tasksArray.push(newTask);
    localStorage.setItem("task", JSON.stringify(tasksArray));
    appendTask(newTask.id, newTask.classs, newTask.task, newTask.status, newTask.timeStart, newTask.timeEnd);
    inputTaskElem.value = "";
    inputTaskElem.focus();
}

function makeTaskObject() {
    let task = inputTaskElem.value;
    let status = "inComplete";
    let timeStart = getTimeNow();
    let timeEnd = "not yet";
    let classs = "incompleted";

    let taskObject = { id: randomId(), task: task, status: status, timeStart: timeStart, timeEnd: timeEnd, classs: classs };
    return taskObject;
}

function clearTasks() {
    localStorage.removeItem("task");
    tasksArray = [];
    tasksContainer.innerHTML = "";
}

// Events
addTaskElem.addEventListener("click", addTask);
inputTaskElem.addEventListener("keydown", function (e) {
    e.key == "Enter" ? addTask() : null;
});
clearTasksElem.addEventListener("click", clearTasks);
document.addEventListener("DOMContentLoaded", getLocalTasks);

tasksContainer.addEventListener("click", (e) => {
    if (e.target.innerHTML == "Delete") {
        liTarget = e.target.closest("li");
        liTargetId = e.target.closest("li").id;
        let findedTask = tasksArray.find(function (task) {
            return task.id == liTargetId;
        });
        tasksArray.splice(tasksArray.indexOf(findedTask), 1);
        liTarget.remove();
        localStorage.setItem("task", JSON.stringify(tasksArray));
    }
});
tasksContainer.addEventListener("click", (e) => {
    if (e.target.matches(".status")) {
        liTarget = e.target.closest("li");
        liTargetId = e.target.closest("li").id;

        let findedTask = tasksArray.find(function (task) {
            return task.id == liTargetId;
        });
        tasksArrayItem = tasksArray[tasksArray.indexOf(findedTask)];

        tasksArrayItem.status = tasksArrayItem.status === "inComplete" ? "Completed" : "inComplete";
        e.target.innerHTML = e.target.innerHTML === "inComplete" ? "Completed" : "inComplete";

        tasksArrayItem.classs = tasksArrayItem.classs === "incompleted" ? "completed" : "incompleted";
        e.target.closest("li").className = e.target.closest("li").className === "incompleted well" ? "completed well" : "incompleted well";

        tasksArrayItem.timeEnd = tasksArrayItem.timeEnd === "not yet" ? getTimeNow() : "not yet";
        e.target.parentElement.children[4].innerHTML = tasksArrayItem.timeEnd + " Done";

        localStorage.setItem("task", JSON.stringify(tasksArray));
    }
});
