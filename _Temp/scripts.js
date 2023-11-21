

let users = [
    { id: 1, name: 'reza', age: 20 },
    { id: 2, name: 'ali', age: 21 },
    { id: 3, name: 'mohsen', age: 22 },
    { id: 4, name: 'sara', age: 23 }
]

var userData = users.find(function (user) {
    return user.name === 'mohsen'
})
var userData2 = users.filter(function (user) {
    return user.name === 'mohsen'
})


console.log("Output of find function : ", userData);
console.log("Output of filter function : ", userData2);



