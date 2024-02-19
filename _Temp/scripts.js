let nums = [1, 2, 3, 4, 5, 6, 7, 8]

let filterNums = nums.filter(num => num > 3)
let mapNums = nums.map(num => {
    return num * 10
})


let reduceNums = nums.reduce((prev, current) => {
    console.log(prev,current);
    return prev + current
})



// console.log(nums);
// console.log(filterNums);
// console.log(mapNums);