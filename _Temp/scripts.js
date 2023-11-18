let scores = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let ismoreThan15 = scores.every(function (score) {

    console.log(score);
    return score < 15
})
console.log(ismoreThan15);