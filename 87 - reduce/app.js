

let users = ["ali", "ali", "reza", "akbar", "mohsen", "majid", "reza", "reza"];

let reduceOutput = users.reduce((obj, current) => {
    console.log({ ...obj, [current]: (obj[current] || 0) + 1 });

    return { ...obj, [current]: (obj[current] || 0) + 1 };
}, {});


