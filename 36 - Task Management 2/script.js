let usersTasks = {
    ahmad: ["Front Ednd", "Seo"],
    hasan: ["Back End"],
    amin: ["Translate"],
    mohsen: ["Archive"],
};

let user = prompt("Enter The User Name : ", "ahmad");
let task = prompt("Enter the Task : ", "Seo");

let arr = usersTasks[user];

arr.push(task);

console.log(usersTasks);
