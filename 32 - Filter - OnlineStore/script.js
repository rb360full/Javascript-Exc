let cart = [
    { id: 1, name: "Laptop", price: 500000 },
    { id: 2, name: "Mouse", price: 80000 },
    { id: 3, name: "Keyboard", price: 90000 },
    { id: 4, name: "Monitor", price: 250000 },
    { id: 5, name: "CPU", price: 300000 },
    { id: 6, name: "RAM", price: 60000 },
];

let totalSum = 0;
let invoice = cart.map(function (product) {
    if (product.price > 100000) {
        return product.price + 1000;
    } else return product.price;
});

invoice.forEach(function (param) {
    totalSum += param;
});

console.log('totalSum = ' , totalSum);
