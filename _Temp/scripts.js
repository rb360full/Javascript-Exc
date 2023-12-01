function sumNumbers(inputArray) {
  return inputArray.reduce((a, b) => a + b, 0);
}




let numbers = [1, 2, 3, 4, 5,3,23,23,23,23,23];
console.log(sumNumbers(numbers));  // Output: 15
