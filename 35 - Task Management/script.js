let users = [
    { id: 1, name: "ahmad", task: [] },
    { id: 2, name: "hasan", task: [] },
    { id: 3, name: "amin", task: [] },
    { id: 4, name: "mohsen", task: [] },
];

let tasks = [
    { id: 1, name: "Front Ednd" },
    { id: 2, name: "Back End" },
    { id: 3, name: "Seo" },
    { id: 4, name: "Translate" },
    { id: 5, name: "Archive" },
];
let isAgain = 1;
while (isAgain === 1) {
    let userSelect = +prompt("Select The User from below names : \n1. ahmad\n2. hasan\n3. amin\n4. mohsen ");
    let userTaskAdd = +prompt("Select The Task from below Options : \n1. Front End \n2. Back End \n3. Seo \n4. Translate \n5. Archive");

    let findedTask = tasks.filter(function (task) {
        return task.id == userTaskAdd;
    });

    users.map(function (user) {
        findedTask.forEach(function (task) {
            if (user.id == userSelect) {
                return user.task.push(task.name);
            }
        });
    });

    isAgain = +prompt("Again ? \n1. Yes \n2. No", 1);
}

console.log(users);
