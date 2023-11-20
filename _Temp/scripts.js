


let num1 = [1, 2, 3, 4];
let num2 = [5, 6, 7, 8];

const arr1 = [num1, num2];        // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
const arr2 = [num1.concat(num2)]; // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
const arr3 = [...num1, ...num2];  // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

console.log(arr1);
console.log(arr2);
console.log(arr3);