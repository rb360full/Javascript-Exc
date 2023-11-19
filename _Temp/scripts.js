

let scores = [10, 9, 14, 9, 12, 17, 15];

let result = scores.filter(function (score) {
    if (score > 12) {

        return score;
    }
})

console.log(result);   // [ 14, 17, 15 ]

