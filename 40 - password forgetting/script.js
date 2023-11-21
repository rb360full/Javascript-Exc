let usersData = [
    { id: 1, user: "amin", pass: "123456" },
    { id: 2, user: "reza", pass: "sdff21`" },
    { id: 3, user: "hasan", pass: "asdQas21" },
    { id: 4, user: "ali", pass: "dasd213s" },
    { id: 5, user: "akbar", pass: "bmbnmdsew" },
    { id: 6, user: "jasem", pass: "dv3sdy33" },
    { id: 7, user: "abbas", pass: "vxvcw3434" },
    { id: 8, user: "mohsen", pass: "czxc45hg" },
    { id: 9, user: "nader", pass: "SDfgfgd556" },
];

let user = prompt("Enter your username : ");

var userFinded = usersData.find(function (data) {
    return data.user === user;
});

if (userFinded === undefined) {
    alert("User Not Found");
} else {
    let pass = prompt("Enter your password : ");
    if (userFinded.pass === pass) {
        alert("Welcome " + userFinded.user);
    } else {
        alert("Wrong Password . The Correct Password is : \n" + userFinded.pass);
    }
}
