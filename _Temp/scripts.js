let users = [
    { name: 'ali', age: 20 },
    { name: 'reza', age: 30 },
    { name: 'mohammad', age: 40 }
]

let isInUsers = users.some(function () {
    return user.name === 'ali';
})

// let isInUsers = users.some((user) => user.name === 'ali'); // arrow function

console.log(isInUsers);


