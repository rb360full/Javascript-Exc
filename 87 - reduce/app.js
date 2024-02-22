

let users = ["ali", "ali", "reza", "akbar", "reza", "mohsen", "majid", "reza"];

let object = {};

let red = users.reduce((obj, current) => {
    let val = (obj[current] || 0) + 1;
    object = { ...obj, [current]: val };
    console.log(object);

    return object;
}, {});


let temp = { name: 'reza' }

console.log({['reza']:temp['reza']});



